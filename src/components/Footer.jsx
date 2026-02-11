import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/profileData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Julio Muñoz
            </h3>
            <p className="text-gray-400 mb-4">
              Backend Developer especializado en arquitecturas de microservicios con Java Spring Boot y Python.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaEnvelope className="mr-2" />
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaPhone className="mr-2" />
                {personalInfo.phone}
              </a>
              <div className="flex items-start text-gray-400">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Inicio
              </a>
              <a href="/experience" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Experiencia
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Proyectos
              </a>
              <a href="/blog" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Blog
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Julio Muñoz. Hecho con <FaHeart className="text-red-500 mx-2" /> y React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
