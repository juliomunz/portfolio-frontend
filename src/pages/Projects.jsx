import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaBuilding, FaLock, FaSearch, FaChevronDown } from 'react-icons/fa';
import { featuredProjects } from '../data/profileData';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  
  const GITHUB_USERNAME = 'juliomunz'; 

  const PRIORITY_REPOS = ['red-urgencia-aconcagua', 'Proyecto-Kafka', 'inventario-joyeria'];

  useEffect(() => {
    const fetchRepos = async () => {
      try {

        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30`);
        if (response.ok) {
          const data = await response.json();
          
          // Lógica de Ordenamiento
          const sortedData = data.sort((a, b) => {
            const indexA = PRIORITY_REPOS.indexOf(a.name);
            const indexB = PRIORITY_REPOS.indexOf(b.name);

            // 1. Si ambos están en la lista de prioridad, respetar el orden de esa lista
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
            return new Date(b.pushed_at) - new Date(a.pushed_at);
          });

          const cleanData = sortedData.filter(repo => 
            repo.name !== 'apiDesafio' &&
            !repo.fork
          );

          setRepos(cleanData);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos = repos.filter(repo => 
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Función para cargar más
  const showMoreRepos = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Portafolio de Proyectos</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Desde soluciones empresariales de gran escala hasta mis laboratorios de código abierto.
          </p>
        </motion.div>

        {/* SECCIÓN 1: Experiencia Corporativa */}
        <div className="mb-24">
          <div className="flex items-center mb-8 border-b border-gray-200 pb-4">
            <div className="p-3 bg-primary-100 rounded-lg mr-4">
              <FaBuilding className="text-2xl text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Trayectoria Corporativa</h2>
              <p className="text-gray-500">Proyectos destacados desarrollados en entornos empresariales</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card border-l-4 border-primary-600 hover:shadow-xl transition-all duration-300 bg-white"
              >
                {/* ... (El contenido de la tarjeta corporativa sigue igual) ... */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <span className="text-primary-600 font-bold tracking-wide uppercase text-xs mb-1">
                      {project.company}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold whitespace-nowrap">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-gray-400 text-sm">
                   <FaLock className="mr-2" />
                   <span>Código propietario / Confidencial</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECCIÓN 2: GitHub (Dinámica y Curada) */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 pb-4">
             <div className="flex items-center mb-4 md:mb-0">
              <div className="p-3 bg-gray-900 rounded-lg mr-4">
                <FaGithub className="text-2xl text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Proyectos Personales</h2>
                <p className="text-gray-500">Repositorios públicos y Open Source</p>
              </div>
            </div>
            
            <div className="relative w-full md:w-64">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar repo..." 
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-gray-500">Analizando actividad en GitHub...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRepos.length > 0 ? (

                  filteredRepos.slice(0, visibleCount).map((repo, index) => (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="card hover:-translate-y-1 hover:border-primary-500 border-2 border-transparent transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                    >
                      {/* Badge para repos prioritarios */}
                      {PRIORITY_REPOS.includes(repo.name) && (
                        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-bl-lg z-10">
                          ⭐ Destacado
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-4">
                        <FaCodeBranch className="text-gray-400" />
                        <div className="flex items-center text-gray-500 text-sm font-medium">
                          {repo.stargazers_count > 0 && (
                            <><FaStar className="mr-1 text-yellow-400" /> {repo.stargazers_count}</>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg text-gray-900 mb-2 truncate pr-6" title={repo.name}>
                        {repo.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {repo.description || "Sin descripción disponible."}
                      </p>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2 py-1 rounded">
                          {repo.language || "Code"}
                        </span>
                        <span className="text-xs text-gray-400">
                          Act: {new Date(repo.pushed_at).toLocaleDateString()}
                        </span>
                      </div>
                    </motion.a>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-10 text-gray-500">
                    No se encontraron repositorios con ese nombre.
                  </div>
                )}
              </div>

              {/* Botón Ver Más */}
              {visibleCount < filteredRepos.length && (
                <div className="text-center mt-12">
                  <button 
                    onClick={showMoreRepos}
                    className="group px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300 flex items-center mx-auto"
                  >
                    Ver más proyectos
                    <FaChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Projects;