import { useState } from 'react';

const abrir = () => {
  const phoneNumber = "60541483"; 
  const message = "Hola, me gustaría obtener más información."; 
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Mensaje enviado con éxito!');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        alert('Hubo un problema al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-black relative">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-10 w-auto" src="/img/logos.png" alt="logo TECNOARTE-WEB" />
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#inicio" className="rounded-md px-3 py-2 text-xl font-medium text-white hover:bg-orange-500">Inicio</a>
                <a href="#nosotros" className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-orange-500 hover:text-white">Sobre Nosotros</a>
                <a href="#experiencia" className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-orange-500 hover:text-white">Experiencia</a>
                <a href="#contactos" className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-orange-500 hover:text-white">Contactos</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute inset-x-0 top-full bg-black text-white ${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}
          id="mobile-menu"
          style={{ zIndex: 50 }}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#inicio" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-orange-500">Inicio</a>
            <a href="#nosotros" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-orange-500 hover:text-white">Sobre Nosotros</a>
            <a href="#experiencia" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-orange-500 hover:text-white">Experiencia</a>
            <a href="#contactos" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-orange-500 hover:text-white">Contactos</a>
          </div>
        </div>
      </nav>

      {}
      <section id="inicio" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('img/img1.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 flex items-center h-full">
    <div className="max-w-2xl mx-5 px-6 text-left text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Transformando tu Presencia Digitalmente.
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        En TecnoArte-Web nos especializamos en ofrecer soluciones creativas en diseño y desarrollo web para potenciar tu negocio en línea.
      </p>
      <button onClick={abrir} className="mb-5 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
        Solicitar Información
      </button>
    </div>
  </div>
</section>


      {}
      <section id="nosotros" className="bg-black py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img src="/img/img-web.jpg" alt="Imagen Redondeada" className="w-70 h-70 rounded-lg border border-transparent shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-white px-4 md:px-8">
            <h2 className="text-4xl text-center text-white font-bold mb-4">Sobre Nosotros</h2>
            <p className="text-lg mb-6">En TecnoArte-Web, convertimos ideas en soluciones web innovadoras. Con años de experiencia, nuestro equipo apasionado ofrece resultados de alta calidad, impulsando el crecimiento digital con diseños funcionales y tecnología de vanguardia. Nos dedicamos a superar las expectativas de nuestros clientes en cada proyecto.</p>
          </div>
        </div>
      </section>

      {}
      <section id="experiencia" className="bg-[#0a1a2b] py-16">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Nuestra Experiencia</h2>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg flex flex-col">
            <img src="/img/margarita.jpg" alt="Imagen 1" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 flex-1">
              <h3 className="text-xl font-semibold mb-2">Margarita Salon</h3>
              <p className="text-gray-700">Un sitio web desarrollado para un salón de belleza. El sitio está integrado con la API del sistema de gestión de citas y el sistema de reservas Vagaro, facilitando la programación de servicios de belleza de lujo y la gestión eficiente de clientes.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg flex flex-col">
            <img src="/img/strong.jpg" alt="Imagen 2" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 flex-1">
              <h3 className="text-xl font-semibold mb-2">Strong Barber Shop</h3>
              <p className="text-gray-700">Un sitio web, desarrollado con Bootstrap, no solo simplifica la reserva de citas, sino que también proporciona herramientas de gestión eficientes. Consulta tu historial de citas, recibe recordatorios automáticos y administra tus reservas fácilmente desde cualquier dispositivo.</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="bg-black py-16">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Nuestros Servicios</h2>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 bg-orange-600 text-white rounded-lg p-6">
            <div className="mb-4">
              <img src="/img/diseño.png" alt="Icono 1" className="mx-auto w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Diseño Web</h3>
            <p className="text-gray-100">Creamos sitios web atractivos y funcionales que representan tu marca y conectan con tu audiencia.</p>
          </div>
          <div className="w-full md:w-1/3 bg-orange-600 text-white rounded-lg p-6">
            <div className="mb-4">
              <img src="/img/solucion .png" alt="Icono 2" className="mx-auto w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
            <p className="text-gray-100">Desarrollamos soluciones personalizadas para cumplir con tus necesidades específicas y mejorar la funcionalidad de tu sitio.</p>
          </div>
          <div className="w-full md:w-1/3 bg-orange-600 text-white rounded-lg p-6">
            <div className="mb-4">
              <img src="../img/seo.png" alt="Icono 3" className="mx-auto w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Marketing Digital</h3>
            <p className="text-gray-100">Impulsa tu presencia en línea con estrategias de marketing digital efectivas y orientadas a resultados.</p>
          </div>
        </div>
      </section>

      {}
      <section id="contactos" className="bg-orange-500 py-16">
        <div className="container mx-auto max-w-xl bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Nombre:</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Teléfono:</label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Correo Electrónico:</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

  <footer className="bg-[#0a1a2b] text-white py-8">
  <div className="container mx-auto flex flex-col items-center">
    <div className="flex flex-wrap justify-center gap-8 mb-6">
      {}
      <div className="w-24 h-24 flex items-center justify-center">
        <a href="https://www.facebook.com/profile.php?id=61561417687282" target="_blank" rel="noopener noreferrer" className="w-24 h-24 flex items-center justify-center">
          <img src="img/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
        </a>
      </div>
      {}
      <div className="w-24 h-24 flex items-center justify-center">
        <a href="https://api.whatsapp.com/send/?phone=60541483&text=Hola%2C+me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-24 h-24 flex items-center justify-center">
          <img src="img/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain" />
        </a>
      </div>
      {}
      <div className="w-24 h-24 flex items-center justify-center">
        <a href="https://github.com/Carlos-Guirola" target="_blank" rel="noopener noreferrer" className="w-24 h-24 flex items-center justify-center">
          <img src="img/github.png" alt="GitHub" className="w-full h-full object-contain" />
        </a>
      </div>
      {}
      <div className="w-24 h-24 flex items-center justify-center">
        <a href="https://www.tiktok.com/@tecnoarteweb" target="_blank" rel="noopener noreferrer" className="w-24 h-24 flex items-center justify-center">
          <img src="img/tik-tok.png" alt="TikTok" className="w-full h-full object-contain" />
        </a>
      </div>
    </div>
    <div className="text-center text-white">
      <p>&copy; 2024 TecnoArte-Web. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

    </div>
  );
}
