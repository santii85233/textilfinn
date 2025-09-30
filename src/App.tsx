import React, { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Shield, Mail, MapPin, ArrowRight, Menu, X } from 'lucide-react'; 

function App() { 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [scrollY, setScrollY] = useState(0); 

  useEffect(() => { 
    const handleScroll = () => setScrollY(window.scrollY); 
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); 

  const scrollToSection = (sectionId: string) => { 
    const element = document.getElementById(sectionId); 
    if (element) { 
      element.scrollIntoView({ behavior: 'smooth' }); 
      setIsMenuOpen(false); 
    } 
  }; 

  return ( 
    <div className="min-h-screen bg-white"> 
      {/* Header */} 
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${ 
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent' 
      }`}> 
        <nav className="container mx-auto px-6 py-4"> 
          <div className="flex items-center justify-between"> 
            <div className="flex items-center gap-3"> 
              <img  
                src="/Diseño sin título (3).png"  
                alt="TextilFin Logo"  
                className="w-12 h-12 object-contain" 
              /> 
            </div> 
             
            {/* Desktop Navigation */} 
            <div className="hidden md:flex space-x-8"> 
              <button  
                onClick={() => scrollToSection('home')} 
                className="text-white hover:text-yellow-400 transition-colors duration-200" 
              > 
                Inicio 
              </button> 
              <button  
                onClick={() => scrollToSection('about')} 
                className="text-white hover:text-yellow-400 transition-colors duration-200" 
              > 
                Quiénes Somos 
              </button> 
              <button  
                onClick={() => scrollToSection('services')} 
                className="text-white hover:text-yellow-400 transition-colors duration-200" 
              > 
                Qué Hacemos 
              </button> 
              <button  
                onClick={() => scrollToSection('products')} 
                className="text-white hover:text-yellow-400 transition-colors duration-200" 
              > 
                Productos 
              </button> 
              <button  
                onClick={() => scrollToSection('contact')} 
                className="text-white hover:text-yellow-400 transition-colors duration-200" 
              > 
                Contacto 
              </button> 
            </div> 

            {/* Mobile Menu Button */} 
            <button  
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            > 
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />} 
            </button> 
          </div> 

          {/* Mobile Navigation */} 
          {isMenuOpen && ( 
            <div className="md:hidden mt-4 py-4 border-t"> 
              <div className="flex flex-col space-y-4"> 
                <button  
                  onClick={() => scrollToSection('home')} 
                  className="text-white hover:text-yellow-400 transition-colors duration-200 text-left" 
                > 
                  Inicio 
                </button> 
                <button  
                  onClick={() => scrollToSection('about')} 
                  className="text-white hover:text-yellow-400 transition-colors duration-200 text-left" 
                > 
                  Quiénes Somos 
                </button> 
                <button  
                  onClick={() => scrollToSection('services')} 
                  className="text-white hover:text-yellow-400 transition-colors duration-200 text-left" 
                > 
                  Qué Hacemos 
                </button> 
                <button  
                  onClick={() => scrollToSection('products')} 
                  className="text-white hover:text-yellow-400 transition-colors duration-200 text-left" 
                > 
                  Productos 
                </button> 
                <button  
                  onClick={() => scrollToSection('contact')} 
                  className="text-white hover:text-yellow-400 transition-colors duration-200 text-left" 
                > 
                  Contacto 
                </button> 
              </div> 
            </div> 
          )} 
        </nav> 
      </header> 

      {/* Hero Section */} 
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white relative overflow-hidden py-16"> 
        <div className="absolute inset-0 bg-black opacity-20"></div> 
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div> 
         
        <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl"> 
          <div className="mb-10 flex items-center justify-center gap-6"> 
            <div className="w-32 h-32 md:w-40 md:h-40"> 
              <img 
                src="/Diseño sin título (3).png" 
                alt="TextilFin Logo" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">TEXTILFIN</h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto"> 
            Capital para el Hilo de tu 
            <span className="block text-yellow-400">Crecimiento</span> 
          </h1> 
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"> 
            Soluciones de financiamiento especializadas para la industria textil y confección de Colombia. 
          </p> 
          <button  
            onClick={() => scrollToSection('contact')} 
            className="bg-yellow-400 text-emerald-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto" 
          > 
            Solicita tu Análisis de Crédito Personalizado 
            <ArrowRight className="w-5 h-5" /> 
          </button> 
        </div> 

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> 
          <ChevronDown className="w-8 h-8 text-white opacity-70" /> 
        </div> 
      </section> 

      {/* About Section */} 
      <section id="about" className="py-20 bg-gray-50"> 
        <div className="container mx-auto px-6"> 
          <div className="max-w-4xl mx-auto text-center"> 
            <h2 className="text-4xl font-bold text-gray-800 mb-8"> 
              TextilFin: Tu Socio Financiero Especializado 
            </h2> 
            <div className="bg-white p-8 rounded-2xl shadow-lg"> 
              <p className="text-lg text-gray-700 leading-relaxed"> 
                TextilFin es una entidad financiera creada para atender las necesidades únicas del sector textil colombiano.  
                A diferencia de los bancos tradicionales, nuestro equipo fusiona la experiencia financiera con un profundo  
                conocimiento de la cadena productiva textil. Nuestro propósito es brindar el capital flexible que necesitas  
                para asegurar materias primas, modernizar tu infraestructura y lograr un crecimiento sostenible. 
              </p> 
            </div> 
          </div> 
        </div> 
      </section> 

      {/* Services Section */} 
      <section id="services" className="py-20 bg-white"> 
        <div className="container mx-auto px-6"> 
          <div className="text-center mb-16"> 
            <h2 className="text-4xl font-bold text-gray-800 mb-4"> 
              Más allá de la Banca: Dedicados a la Cadena de Valor Textil 
            </h2> 
          </div> 
           
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"> 
            <div className="bg-emerald-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"> 
              <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"> 
                <Target className="w-8 h-8 text-white" /> 
              </div> 
              <h3 className="text-xl font-bold text-gray-800 mb-4">Financiamiento Estratégico</h3> 
              <p className="text-gray-700 leading-relaxed"> 
                Proporcionamos financiamiento que aborda específicamente las brechas de flujo de efectivo y  
                las fluctuaciones estacionales inherentes al negocio textil. 
              </p> 
            </div> 

            <div className="bg-yellow-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"> 
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"> 
                <TrendingUp className="w-8 h-8 text-white" /> 
              </div> 
              <h3 className="text-xl font-bold text-gray-800 mb-4">Análisis Personalizado</h3> 
              <p className="text-gray-700 leading-relaxed"> 
                Nuestra metodología involucra un análisis detallado de tu plan de producción y cadena de suministro,  
                no solo estados financieros genéricos. 
              </p> 
            </div> 

            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"> 
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"> 
                <Shield className="w-8 h-8 text-white" /> 
              </div> 
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ventaja Competitiva</h3> 
              <p className="text-gray-700 leading-relaxed"> 
                Nuestros términos de financiamiento y tasas están diseñados para impulsar la competitividad  
                y productividad de tu empresa. 
              </p> 
            </div> 
          </div> 
        </div> 
      </section> 

      {/* Products Section */} 
      <section id="products" className="py-20 bg-emerald-900 text-white"> 
        <div className="container mx-auto px-6"> 
          <div className="text-center mb-16"> 
            <h2 className="text-4xl font-bold mb-4"> 
              Líneas de Crédito Flexibles para Cada Etapa de Producción 
            </h2> 
          </div> 

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"> 
            {/* Investment Credit */} 
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"> 
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Crédito para Inversión</h3> 
              <div className="mb-6"> 
                <h4 className="font-semibold text-gray-700 mb-2">Objetivo:</h4> 
                <p className="text-gray-600 leading-relaxed mb-4"> 
                  Financiar proyectos de inversión para la modernización y ampliación de la empresa textil. 
                </p> 
                <h4 className="font-semibold text-gray-700 mb-2">Beneficio Clave:</h4> 
                <p className="text-gray-600 leading-relaxed mb-4"> 
                  Mejora de competitividad, aumento de producción y acceso a nuevas tecnologías. 
                </p> 
                <h4 className="font-semibold text-gray-700 mb-2">Duración:</h4> 
                <p className="text-gray-600 leading-relaxed"> 
                  Mediano a largo plazo (3 a 5 años, dependiendo del proyecto). 
                </p> 
              </div> 
            </div> 

            {/* Working Capital */} 
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"> 
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">Crédito de Capital de Trabajo</h3> 
              <div className="mb-6"> 
                <h4 className="font-semibold text-gray-700 mb-2">Objetivo:</h4> 
                <p className="text-gray-600 leading-relaxed mb-4"> 
                  Financiar las operaciones diarias de la empresa textil. 
                </p> 
                <h4 className="font-semibold text-gray-700 mb-2">Beneficio Clave:</h4> 
                <p className="text-gray-600 leading-relaxed mb-4"> 
                  Mejor manejo del flujo de caja y flexibilidad en pagos, proporcionando acceso inmediato a fondos requeridos. 
                </p> 
                <h4 className="font-semibold text-gray-700 mb-2">Duración:</h4> 
                <p className="text-gray-600 leading-relaxed"> 
                  Variable, depende de las necesidades del cliente. Término mínimo de 12 meses. 
                </p> 
              </div> 
            </div> 

            {/* Revolving Credit */} 
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"> 
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Línea de Crédito Rotativo</h3> 
              <div className="mb-6"> 
                <h4 className="font-semibold text-gray-700 mb-2">Objetivo:</h4> 
                <p className="text-gray-600 leading-relaxed mb-4"> 
                  Proporcionar liquidez adicional y flexible al cliente. 
                </p> 
                <h4 className="font-semibold text-gray-700 mb-2">Beneficio Clave:</h4> 
                <p className="text-gray-600 leading-relaxed mb-4"> 
                  Mayor liquidez, capacidad de respuesta rápida a oportunidades de negocio y reducción de costos de transacciones financieras. 
                </p> 
                <h4 className="font-semibold text-gray-700 mb-2">Duración:</h4> 
                <p className="text-gray-600 leading-relaxed"> 
                  Indefinida con revisiones anuales. 
                </p> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 

      {/* Contact Section */} 
      <section id="contact" className="py-20 bg-gray-50"> 
        <div className="container mx-auto px-6"> 
          <div className="text-center mb-16"> 
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contacto</h2> 
            <p className="text-lg text-gray-600 max-w-2xl mx-auto"> 
              Estamos listos para analizar tus necesidades financieras y ofrecer soluciones adaptadas a tu empresa textil. 
            </p> 
          </div> 

          <div className="max-w-4xl mx-auto"> 
            <div className="grid md:grid-cols-2 gap-12"> 
              <div className="space-y-8"> 
                <div className="flex items-center gap-4"> 
                  <div className="bg-emerald-800 p-3 rounded-full"> 
                    <Mail className="w-6 h-6 text-white" /> 
                  </div> 
                  <div> 
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3> 
                    <a href="mailto:TextilFin@gmail.com" className="text-emerald-800 hover:text-emerald-600 transition-colors"> 
                      TextilFin@gmail.com 
                    </a> 
                  </div> 
                </div> 

                <div className="flex items-center gap-4"> 
                  <div className="bg-emerald-800 p-3 rounded-full"> 
                    <MapPin className="w-6 h-6 text-white" /> 
                  </div> 
                  <div> 
                    <h3 className="font-semibold text-gray-800 mb-1">Ubicación</h3> 
                    <p className="text-gray-600">Ciudad, Bogotá, Colombia</p> 
                  </div> 
                </div> 

                <div className="bg-yellow-50 p-6 rounded-lg"> 
                  <h4 className="font-semibold text-gray-800 mb-2">Nota Legal</h4> 
                  <p className="text-sm text-gray-600"> 
                    Servicios enfocados en el financiamiento de empresas legalmente constituidas del sector textil colombiano. 
                  </p> 
                </div> 
              </div> 

              <div className="bg-white p-8 rounded-2xl shadow-lg"> 
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicita Información</h3> 
                <form className="space-y-6"> 
                  <div> 
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"> 
                      Nombre de la Empresa 
                    </label> 
                    <input  
                      type="text"  
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
                      placeholder="Tu empresa textil" 
                    /> 
                  </div> 
                   
                  <div> 
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> 
                      Email de Contacto 
                    </label> 
                    <input  
                      type="email"  
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
                      placeholder="contacto@tuempresa.com" 
                    /> 
                  </div> 
                   
                  <div> 
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> 
                      Mensaje 
                    </label> 
                    <textarea  
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none" 
                      placeholder="Cuéntanos sobre tus necesidades de financiamiento..." 
                    ></textarea> 
                  </div> 
                   
                  <button  
                    type="submit" 
                    className="w-full bg-emerald-800 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center gap-2" 
                  > 
                    Enviar Solicitud 
                    <ArrowRight className="w-5 h-5" /> 
                  </button>  
                </form> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 

      {/* Footer */} 
      <footer className="bg-emerald-900 text-white py-8"> 
        <div className="container mx-auto px-6 text-center"> 
          <div className="flex items-center justify-center gap-3 mb-4"> 
            <img  
              src="/Diseño sin título (3).png"  
              alt="TextilFin Logo"  
              className="w-10 h-10 object-contain" 
            /> 
            <span className="text-2xl font-bold text-white">TextilFin</span>
          </div> 
          <p className="text-emerald-200 max-w-2xl mx-auto"> 
            Especializados en el crecimiento del sector textil colombiano a través de soluciones financieras innovadoras y personalizadas. 
          </p> 
          <div className="mt-6 text-sm text-emerald-300"> 
            © 2025 TextilFin. Todos los derechos reservados. 
          </div> 
        </div> 
      </footer> 
    </div> 
  ); 
} 

export default App;