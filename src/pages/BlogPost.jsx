import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaArrowLeft, FaTag, FaCalendar, FaUser, FaShare } from 'react-icons/fa';
import { blogPosts } from '../data/blogData';
import LikeButton from '../components/LikeButton';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.slug === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Volver al Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <FaUser className="mr-2 text-primary-600" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <FaCalendar className="mr-2 text-primary-600" />
              <span>
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-primary-600" />
              <span>{post.readTime} de lectura</span>
            </div>
            <button
              onClick={sharePost}
              className="flex items-center hover:text-primary-600 transition-colors"
            >
              <FaShare className="mr-2" />
              Compartir
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <FaTag className="text-primary-600 mt-1" />
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="text-gray-700 leading-relaxed space-y-6">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('#')) {
                const level = paragraph.trim().match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s*/, '');
                const HeadingTag = `h${level}`;
                return (
                  <HeadingTag
                    key={index}
                    className={`font-bold text-gray-900 mt-8 mb-4 ${
                      level === 1 ? 'text-4xl' :
                      level === 2 ? 'text-3xl' :
                      level === 3 ? 'text-2xl' : 'text-xl'
                    }`}
                  >
                    {text}
                  </HeadingTag>
                );
              } else if (paragraph.trim().startsWith('```')) {
                return null; // Handle code blocks separately
              } else if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('*')) {
                const text = paragraph.replace(/^[-*]\s*/, '');
                return (
                  <li key={index} className="ml-6 text-gray-700">
                    {text}
                  </li>
                );
              } else if (paragraph.includes('```')) {
                const codeMatch = post.content.match(/```(\w+)?\n([\s\S]*?)```/g);
                if (codeMatch) {
                  return codeMatch.map((block, i) => {
                    const code = block.replace(/```\w*\n|```/g, '');
                    return (
                      <pre key={i} className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto my-6">
                        <code className="text-sm font-mono">{code}</code>
                      </pre>
                    );
                  });
                }
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto my-12">
          <LikeButton slug={post.slug} />
        </div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border-l-4 border-primary-600"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre el Autor</h3>
          <p className="text-gray-700 mb-4">
            <strong>Julio Muñoz</strong> es un Backend Developer con más de 10 años de experiencia
            especializado en arquitecturas de microservicios con Java Spring Boot y Python.
            Actualmente trabaja como Software Engineer en Equifax Chile.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Contáctame
          </Link>
        </motion.div>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Artículos Relacionados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && (
                p.category === post.category || 
                p.tags.some(tag => post.tags.includes(tag))
              ))
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="card group hover:scale-105 transition-transform"
                >
                  <div className="h-32 rounded-lg overflow-hidden mb-4">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </motion.section>
      </article>
    </div>
  );
};

export default BlogPost;
