# Portfolio Profesional - Julio Muñoz

Portfolio web profesional desarrollado con React, Vite, Tailwind CSS y diseñado para mostrar experiencia en desarrollo backend, proyectos y conocimientos técnicos.

## 🚀 Características

- ✅ **Landing Page moderna** con hero section animado
- 📊 **Sección de Experiencia** con timeline interactivo
- 💼 **Proyectos** con integración de GitHub API
- 📝 **Blog técnico** con artículos sobre arquitectura y desarrollo
- 📧 **Formulario de contacto** funcional
- 🎨 **Diseño responsive** optimizado para todos los dispositivos
- ⚡ **Animaciones suaves** con Framer Motion
- 🎯 **SEO optimizado**

## 🛠️ Stack Tecnológico

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: EmailJS (opcional)

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Cuenta de GitHub (para mostrar repositorios)

## 🔧 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tuusuario/portfolio-julio-munoz.git
cd portfolio-julio-munoz
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura tus datos**

Edita los siguientes archivos con tu información:

- `src/data/profileData.js`: Información personal, experiencia, skills
- `src/data/blogData.js`: Artículos del blog
- `src/pages/Projects.jsx`: Cambia `GITHUB_USERNAME` por tu usuario

4. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🎨 Personalización

### Colores
Edita `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  primary: {
    600: '#0ea5e9',  // Cambia estos valores
    // ...
  }
}
```

### Fuentes
Las fuentes están configuradas en `index.html`. Puedes cambiarlas modificando el link de Google Fonts.

### Contenido
Todos los datos están centralizados en:
- `src/data/profileData.js` - Información personal y profesional
- `src/data/blogData.js` - Artículos del blog

## 📧 Configuración del Formulario de Contacto

### Opción 1: EmailJS (Recomendado)

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea una plantilla
4. Instala EmailJS:
```bash
npm install @emailjs/browser
```

5. Actualiza `src/pages/Contact.jsx`:
```javascript
import emailjs from '@emailjs/browser';

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

### Opción 2: Formspree

1. Crea una cuenta en [Formspree](https://formspree.io/)
2. Obtén tu endpoint
3. Actualiza el formulario con fetch a tu endpoint

### Opción 3: Backend Propio

Crea tu propio endpoint en Node.js/Express para manejar el envío de emails.

## 🌐 Despliegue

### Render.com (Recomendado)

1. Crea una cuenta en [Render](https://render.com)
2. Conecta tu repositorio de GitHub
3. Configura:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Despliega

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📁 Estructura del Proyecto

```
portfolio-julio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── profileData.js
│   │   └── blogData.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔒 Variables de Entorno (Opcional)

Si usas EmailJS o APIs externas, crea un archivo `.env`:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_GITHUB_USERNAME=tu_usuario_github
```

Accede a ellas con:
```javascript
import.meta.env.VITE_EMAILJS_SERVICE_ID
```

## 🎯 Dominio .dev

1. **Compra tu dominio .dev** en:
   - [Google Domains](https://domains.google/) (~$12/año)
   - [Namecheap](https://www.namecheap.com/) (~$15/año)
   - [GoDaddy](https://www.godaddy.com/)

2. **Configura DNS** en Render/Vercel/Netlify:
   - Añade registros A o CNAME según las instrucciones del hosting
   - Ejemplo para Render:
     ```
     Type: CNAME
     Name: www
     Value: tu-app.onrender.com
     ```

3. **Habilita HTTPS** (automático en Render/Vercel/Netlify)

## 📊 Integración de GitHub

El componente de Proyectos usa la API pública de GitHub:

```javascript
const GITHUB_USERNAME = 'tuusuario';
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
```

**Límites de la API**: 60 requests/hora sin autenticación

Para más requests, genera un token en GitHub y úsalo:

```javascript
fetch(url, {
  headers: {
    'Authorization': `token ${GITHUB_TOKEN}`
  }
})
```

## 🐛 Troubleshooting

### Error: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Animaciones no funcionan
Asegúrate de tener instalado Framer Motion:
```bash
npm install framer-motion
```

### GitHub API rate limit
Implementa caché local o usa autenticación con token.

## 📝 TODOs / Mejoras Futuras

- [ ] Agregar tests con Vitest
- [ ] Implementar PWA
- [ ] Añadir modo oscuro
- [ ] Integrar Google Analytics
- [ ] Agregar i18n (soporte multi-idioma)
- [ ] Implementar backend con Node.js/Express
- [ ] Añadir base de datos MongoDB para blog dinámico
- [ ] Sistema de comentarios en blog
- [ ] RSS feed para blog

## 🤝 Contribuciones

Si encuentras algún bug o tienes sugerencias, abre un issue o pull request.

## 📄 Licencia

MIT License - siéntete libre de usar este código para tu propio portfolio.

## 👨‍💻 Autor

**Julio Muñoz Cortés**
- Email: julio.mun.cor@gmail.com
- LinkedIn: [Tu perfil]
- GitHub: [@tuusuario]

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub
