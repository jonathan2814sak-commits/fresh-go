import { useState } from 'react';
import {
  ShoppingBag,
  Leaf,
  Utensils,
  Clock,
  MapPin,
  //Instagram,
  //Facebook,
  X,
  ChevronRight,
  //Star,
  Heart,
  Sparkles,
} from 'lucide-react';
import './App.css';

interface NavBarProps {
  currentView: string;
  setView: (view: string) => void;
}

// 2. Aplicamos la interfaz al componente
const NavBar = ({ currentView, setView }: NavBarProps) => (
  <nav className="nav-container">
    <div
      className="nav-logo"
      style={{ cursor: 'pointer' }}
      onClick={() => setView('home')}
    >
      <img
        src="/logo.jpeg"
        alt="FreshGo Logo"
        style={{ height: '40px', width: 'auto', marginRight: '10px' }}
      />
      <span>
        FRESH<span>GO</span>
      </span>
    </div>
    <div className="nav-links">
      <button
        onClick={() => setView('home')}
        className={currentView === 'home' ? 'active' : ''}
      >
        Inicio
      </button>
      <button
        onClick={() => setView('menu')}
        className={currentView === 'menu' ? 'active' : ''}
      >
        Menú Fresco
      </button>
      <button
        onClick={() => setView('habits')}
        className={currentView === 'habits' ? 'active' : ''}
      >
        Salud
      </button>
      <button
        className="nav-cta"
        onClick={() => window.open('https://wa.me/tunúmero', '_blank')}
      >
        WhatsApp
      </button>
    </div>
  </nav>
);

const HistoryPage = () => (
  <div className="history-page fade-in">
    <section
      className="history-hero"
      style={{
        padding: '80px 8%',
        display: 'flex',
        gap: '60px',
        alignItems: 'center',
      }}
    >
      <div style={{ flex: 1 }}>
        <span className="badge">Desde 2026</span>
        <h2
          style={{
            fontFamily: 'Playfair Display',
            fontSize: '48px',
            margin: '20px 0',
          }}
        >
          Cultivando una <span>visión consciente</span>
        </h2>
        <p style={{ fontSize: '18px', color: '#5e6d62', marginBottom: '20px' }}>
          Somos una iniciativa gastronómica en Nueva Guinea creada
          específicamente para resolver el dilema del estudiante y el trabajador
          moderno: la falta de tiempo para comer saludable. Entendemos que el
          ritmo de la ciudad obliga a muchos a recurrir a la comida rápida
          tradicional por necesidad; por ello, nuestro proyecto se enfoca en
          ofrecer ensaladas, bowls nutritivos y batidos naturales que están
          listos al instante, garantizando que puedas alimentarte bien sin
          perder un solo minuto de tu jornada académica o laboral.
        </p>
        <p style={{ color: '#5e6d62' }}>
          Nuestra propuesta se basa en el equilibrio perfecto entre calidad
          premium y accesibilidad económica, seleccionando ingredientes de
          primera categoría para elaborar recetas balanceadas que cuidan tanto
          tu bienestar como tu bolsillo. En este espacio, no solo servimos
          comida; brindamos la opción inteligente para aquellos que buscan
          mantener un estilo de vida sano en medio de sus responsabilidades
          diarias, posicionándonos como el aliado estratégico de tu nutrición en
          el corazón de la ciudad.
        </p>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800"
          alt="Granja orgánica"
          style={{
            width: '100%',
            borderRadius: '40px 0 40px 0',
            boxShadow: '20px 20px 0px #dcfd8b',
          }}
        />
      </div>
    </section>

    <section
      className="values"
      style={{
        background: '#1a3c34',
        color: 'white',
        padding: '80px 8%',
        textAlign: 'center',
      }}
    >
      <h3
        style={{
          fontFamily: 'Playfair Display',
          fontSize: '32px',
          marginBottom: '50px',
        }}
      >
        Nuestros Pilares
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
        }}
      >
        <div>
          <Leaf color="#dcfd8b" size={40} style={{ marginBottom: '20px' }} />
          <h4>Respeto Animal</h4>
          <p style={{ color: '#acc2b9' }}>Opciones balanceadas con ética.</p>
        </div>
        <div>
          <Sparkles
            color="#dcfd8b"
            size={40}
            style={{ marginBottom: '20px' }}
          />
          <h4>Transparencia</h4>
          <p style={{ color: '#acc2b9' }}>
            Sabes exactamente de dónde viene tu comida.
          </p>
        </div>
        <div>
          <Heart color="#dcfd8b" size={40} style={{ marginBottom: '20px' }} />
          <h4>Comunidad</h4>
          <p style={{ color: '#acc2b9' }}>Apoyamos el comercio justo local.</p>
        </div>
      </div>
    </section>
  </div>
);

const FullMenuPage = () => {
  const categories = ['Todos', 'Bowls', 'Bebidas', 'Postres'];
  const [activeCat, setActiveCat] = useState('Todos');

  return (
    <div className="full-menu-page fade-in" style={{ padding: '60px 8%' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '42px' }}>
          La Carta
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginTop: '25px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: '10px 25px',
                borderRadius: '50px',
                border: '1px solid #2d5a27',
                background: activeCat === cat ? '#2d5a27' : 'transparent',
                color: activeCat === cat ? 'white' : '#2d5a27',
                cursor: 'pointer',
                fontWeight: '600',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Aquí reutilizamos el MenuPage pero filtrado, o simplemente mostramos la cuadrícula */}
      <MenuPage />
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <h3>FRESHGO</h3>
        <p>
          Nutriendo tu cuerpo, respetando la tierra. Comida orgánica 100% local.
        </p>
      </div>
      <div className="footer-info">
        <h4>Ubicación</h4>
        <p>
          <MapPin size={14} /> Del Prque Central, 1C al sur
        </p>
        <p>
          <Clock size={14} /> Lun-Sab: 8am - 10pm
        </p>
      </div>
      <div className="footer-social">
        <h4>Síguenos</h4>
        <div className="social-icons">
          <X size={20} />
        </div>
      </div>
    </div>
    <div className="footer-bottom">© 2026 FRESHGO - Restaurante Saludable</div>
  </footer>
);

// --- VISTAS ---

const HomePage = (
  { setView } // <--- Recibimos setView aquí
) => (
  <div className="fade-in">
    <section className="hero-section">
      <div className="hero-text">
        <span className="badge">Orgánico & Fresco</span>
        <h1>
          Sabor que te hace <span>bien.</span>
        </h1>
        <p>
          Descubre una experiencia gastronómica diseñada para equilibrar tu
          energía y deleitar tu paladar.
        </p>
        <div className="hero-btns">
          {/* BOTÓN 1: Ahora te lleva al menú */}
          <button className="btn-primary" onClick={() => setView('menu')}>
            Explorar Menú
          </button>

          {/* BOTÓN 2: Ahora te lleva a la historia */}
          <button className="btn-secondary" onClick={() => setView('historia')}>
            Nuestra Historia
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
          alt="Bowl Saludable"
        />
      </div>
    </section>

    <section className="features">
      <div className="feature-card">
        <Utensils className="feat-icon" />
        <h4>Ingredientes Premium</h4>
        <p>Solo vegetales de temporada recolectados hoy mismo.</p>
      </div>
      <div className="feature-card">
        <Heart className="feat-icon" />
        <h4>Cocina con Propósito</h4>
        <p>Recetas balanceadas por nutricionistas expertos.</p>
      </div>
      <div className="feature-card">
        <Leaf className="feat-icon" />
        <h4>Sustentabilidad</h4>
        <p>Cero plástico y apoyo directo a agricultores locales.</p>
      </div>
    </section>
  </div>
);

const MenuPage = () => {
  const menuItems = [
    {
      name: 'Zen Bowl',
      desc: 'Quinoa, kale, aguacate y aderezo de tahini.',
      price: '$12.50',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    },
    {
      name: 'Pasta de Zucchini',
      desc: 'Zoodles frescos con pesto de nuez y cherrys.',
      price: '$14.00',
      img: 'https://tse3.mm.bing.net/th/id/OIP.I5q17Qk_teb8pOKsU-4i7QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      name: 'Tacos de Coliflor',
      desc: 'Tortilla de maíz morado con coliflor al pastor.',
      price: '$11.00',
      img: 'https://blogscdn.thehut.net/app/uploads/sites/450/2021/03/Cauliflower-Tacos_1616497086.jpg',
    },
    {
      name: 'Smoothie Bosque',
      desc: 'Arándanos, espinaca, chía y leche de almendra.',
      price: '$7.50',
      img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400',
    },
  ];

  return (
    <div className="menu-page fade-in">
      <header className="page-header">
        <h2>Nuestro Menú</h2>
        <p>Opciones veganas, keto y sin gluten disponibles.</p>
      </header>
      <div className="menu-grid">
        {menuItems.map((item, i) => (
          <div key={i} className="menu-item-card">
            <img src={item.img} alt={item.name} />
            <div className="item-info">
              <div className="item-title">
                <h4>{item.name}</h4>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.desc}</p>
              <button className="add-btn">
                <ShoppingBag size={16} /> Añadir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HabitsPage = () => (
  <div className="habits-page fade-in">
    <header className="page-header">
      <h2>Estilo de Vida Verde</h2>
      <p>
        Más que comida, somos una comunidad que busca el bienestar integral.
      </p>
    </header>
    <div className="blog-section">
      <div className="blog-card">
        <div
          className="blog-img"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600)',
          }}
        ></div>
        <div className="blog-content">
          <span className="date">27 Abril, 2026</span>
          <h4>La importancia de la hidratación consciente</h4>
          <p>
            Beber agua es vital, pero ¿sabías que la temperatura y el momento
            influyen en tu digestión?
          </p>
          <a href="#">
            Leer más <ChevronRight size={14} />
          </a>
        </div>
      </div>
      <div className="blog-card">
        <div
          className="blog-img"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600)',
          }}
        ></div>
        <div className="blog-content">
          <span className="date">25 Abril, 2026</span>
          <h4>Superalimentos: Mitos y Realidades</h4>
          <p>
            Analizamos las semillas de chía, el matcha y la espirulina desde un
            enfoque científico.
          </p>
          <a href="#">
            Leer más <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

// --- APP PRINCIPAL ---

export default function App() {
  const [view, setView] = useState('home');

  return (
    <div className="app-wrapper">
      <NavBar currentView={view} setView={setView} />

      <main className="content">
        {/* 1. Muestra la Home y le pasa setView para que funcionen sus botones */}
        {view === 'home' && <HomePage setView={setView} />}

        {/* 2. ESTA ES LA LÍNEA QUE FALTABA: Muestra el Menú */}
        {view === 'menu' && <FullMenuPage />}

        {/* 3. Muestra los artículos de Vida Sana */}
        {view === 'habits' && <HabitsPage />}

        {/* 4. Muestra la historia de la empresa */}
        {view === 'historia' && <HistoryPage />}
      </main>

      <Footer />
    </div>
  );
}
