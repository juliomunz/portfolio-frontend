import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaRocket, FaAward, FaGithub } from 'react-icons/fa';
import { personalInfo, skills, featuredProjects } from '../data/profileData';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-primary-100 mb-2">
                {personalInfo.title}
              </p>
              <p className="text-xl text-primary-200">
                {personalInfo.subtitle}
              </p>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                <FaRocket className="inline mr-2" />
                Trabajemos Juntos
              </Link>
              <Link to="/projects" className="btn-secondary bg-white w-full sm:w-auto">
                <FaCode className="inline mr-2" />
                Ver Proyectos
              </Link>
              <a 
                href="/cv-julio-munoz.pdf" 
                download
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 w-full sm:w-auto"
              >
                <FaDownload className="inline mr-2" />
                Descargar CV
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 flex justify-center gap-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-white">10+</div>
                <div className="text-primary-200">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">20+</div>
                <div className="text-primary-200">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">6+</div>
                <div className="text-primary-200">Certificaciones</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Habilidades Técnicas</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo diariamente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-600">Lenguajes</h3>
              <div className="space-y-4">
                {skills.languages.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.icon} {skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-600">Frameworks</h3>
              <div className="space-y-4">
                {skills.frameworks.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.icon} {skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-600">Herramientas</h3>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.icon} {skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cloud & Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-600">Cloud & DB</h3>
              <div className="space-y-4">
                {[...skills.cloud, ...skills.databases.slice(0, 2)].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.icon} {skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Proyectos Destacados</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Algunos de los proyectos empresariales más importantes en los que he trabajado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-2">
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Empresa: <span className="font-semibold text-gray-700">{project.company}</span></p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects" className="btn-primary inline-flex items-center">
              <FaGithub className="mr-2" />
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaAward className="text-6xl text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Construyamos algo increíble juntos. Especializado en arquitecturas escalables y soluciones de alta calidad.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contáctame Ahora
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
