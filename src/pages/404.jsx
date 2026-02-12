import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '60vh', // Bajamos un poco el alto para que se vea bien entre header y footer
      textAlign: 'center',
      padding: '20px' 
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '10px', color: '#2563eb' }}>404</h1>
      <h2 style={{ marginBottom: '20px' }}>¡Vaya! Parece que te has perdido en el código.</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        La página que buscas no existe o ha sido movida a otra rama del repositorio.
      </p>
      
      <Link to="/" style={{ // Cambiamos href por to
        padding: '10px 20px',
        backgroundColor: '#2563eb',
        color: 'white',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Volver al Inicio
      </Link>
    </div>
  );
}