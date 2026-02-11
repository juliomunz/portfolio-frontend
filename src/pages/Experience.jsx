import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import { experience, education, certifications } from '../data/profileData';

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Experiencia Profesional</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mi trayectoria construyendo soluciones backend escalables y seguras
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <FaBriefcase className="mr-3 text-primary-600" />
            Experiencia Laboral
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600 hidden md:block"></div>
                )}
                
                <div className="card ml-0 md:ml-16 hover:scale-105 transition-transform">
                  {/* Company logo circle */}
                  <div className="absolute -left-3 md:-left-10 top-6 w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                    {job.logo}
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900">{job.position}</h3>
                      <p className="text-xl text-primary-600 font-semibold">{job.company}</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCalendar className="mr-2" />
                      <span className="font-medium">{job.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-600 mr-2 mt-1">▪</span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <FaAward className="mr-3 text-primary-600" />
            Educación
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:scale-105 transition-transform"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl mr-4 flex-shrink-0">
                    {edu.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 font-semibold">{edu.institution}</p>
                    <p className="text-gray-600 text-sm">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <FaAward className="mr-3 text-primary-600" />
            Certificaciones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card group hover:scale-105 transition-transform"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Mi Trayectoria en Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5</div>
              <div className="text-primary-100">Empresas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-primary-100">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">6+</div>
              <div className="text-primary-100">Certificaciones</div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Experience;
