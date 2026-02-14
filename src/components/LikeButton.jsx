import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const LikeButton = ({ slug }) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked ] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || 'https://api-portfolio-julio.onrender.com';

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const response = await fetch(`${API_URL}/api/blog/${slug}/likes`);
                const data = await response.json();
                setLikes(data.likes);
            } catch (error) {
                console.error("Error al cargar likes:", error);
            }    
        };

        const localLiked = localStorage.getItem(`liked_${slug}`);
        if (localLiked) setIsLiked(true);

        fetchLikes();
    }, [slug, API_URL]);

    const handleLike = async () => {
        if (isLiked || isLoading) return;

        setIsLoading (true);
        try {
            const response = await fetch(`${API_URL}/api/blog/${slug}/like`, {
                method: 'PATCH',
              });
              const data = await response.json();
              
              if (data.success) {
                setLikes(data.likes);
                setIsLiked(true);
                localStorage.setItem(`liked_${slug}`, 'true');
              }
            } catch (error) {
                console.error("Error al procesar like", error);
            } finally {
                setIsLoading(false);
            }
        };

        return (
        <div className="flex flex-col items-center gap-2 my-8 p-4 border-t border-b border-gray-100">
        <p className="text-gray-600 font-medium">¿Te gustó este artículo?</p>
        <button
          onClick={handleLike}
          disabled={isLiked || isLoading}
          className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
            isLiked 
              ? 'bg-red-50 text-red-500 cursor-default' 
              : 'bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-400'
          }`}
          >
          {isLiked ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          <span className="font-bold">{likes}</span>
        </button>
      </div>
    );
};

export default LikeButton;