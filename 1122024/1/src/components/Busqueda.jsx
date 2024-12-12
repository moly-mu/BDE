import { useEffect } from 'react';
import { gsap } from 'gsap';

const Busqueda = () => {
    useEffect(() => {
        gsap.from('.fade-in', {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
           
            <nav className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="flex items-center">
                    <img
                        src="/src/assets/Captura de pantalla 2024-11-18 045933.png"
                        alt="Logo"
                        className="h-8"
                    />
                </div>
                <div className="flex space-x-4">
                    <button className="text-sm text-blue-700 font-semibold hover:underline">
                        Crear hoja de vida
                    </button>
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        Iniciar sesión
                    </button>
                </div>
            </nav>

            
            <main className="flex flex-col items-center py-12 px-4 bg-gray-50">
                
                <div className="fade-in text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Filtra tus búsquedas para un mejor resultado
                    </h2>
                    <img
                        src="/src/assets/filter-image.png"
                        alt="Filtro"
                        className="mt-4 w-64 mx-auto"
                    />
                </div>

                {/* Search bar */}
                <div className="w-full max-w-md mb-8">
                    <input
                        type="text"
                        placeholder="Buscar ofertas laborales..."
                        className="w-full border rounded-lg px-4 py-2 shadow-md"
                    />
                </div>

                
                <div className="flex flex-wrap gap-8 justify-center w-full max-w-7xl">
                   
                    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                            Categorías
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <input
                                    type="checkbox"
                                    id="tech"
                                    className="mr-2"
                                />
                                <label htmlFor="tech">
                                    Tecnología de la información
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="design"
                                    className="mr-2"
                                />
                                <label htmlFor="design">
                                    Diseño y Creatividad
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="marketing"
                                    className="mr-2"
                                />
                                <label htmlFor="marketing">
                                    Marketing y Ventas
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="tech"
                                    className="mr-2"
                                />
                                <label htmlFor="tech">
                                    Administración y Finanzas
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="tech"
                                    className="mr-2"
                                />
                                <label htmlFor="tech">
                                   Ciencia
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="tech"
                                    className="mr-2"
                                />
                                <label htmlFor="tech">
                                    Atención al cliente
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="tech"
                                    className="mr-2"
                                />
                                <label htmlFor="tech">
                                    Educación y Capacitación 
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="tech"
                                    className="mr-2"
                                />
                                <label htmlFor="tech">
                                    Salud y Bienestar 
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="tech"
                                    className="mr-2"
                                />
                                <label htmlFor="tech">
                                    Logística y Operaciones
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="tech"
                                    className="mr-2"
                                />
                                <label htmlFor="tech">
                                    Construcción y manufactura
                                </label>
                            </li>

                        </ul>
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">
                            Modalidad del trabajo
                        </h3>
                        <select className="w-full border rounded-lg px-4 py-2">
                            <option>Todas</option>
                            <option>Remoto</option>
                            <option>Presencial</option>
                        </select>
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">
                            Fecha de publicación
                        </h3>
                        <select className="w-full border rounded-lg px-4 py-2">
                            <option>En cualquier momento</option>
                            <option>Últimas 24 horas</option>
                        </select>
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">
                            Ubicación del cliente
                        </h3>
                        <select className="w-full border rounded-lg px-4 py-2">
                            <option>Todas las regiones</option>
                            <option>Región 1</option>
                            <option>Región 2</option>
                        </select>
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">
                            Idioma
                        </h3>
                        <div className="flex space-x-4 mt-2">
                            <button className="px-4 py-2 border rounded-lg">
                                Español
                            </button>
                            <button className="px-4 py-2 border rounded-lg">
                                Inglés
                            </button>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="flex-1 space-y-4">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div
                                key={item}
                                className="bg-white p-4 rounded-lg shadow-md fade-in"
                            >
                                <p>Oferta laboral {item}</p>
                            </div>
                        ))}

                        {/* Pagination */}
                        <div className="flex justify-center mt-4">
                            <nav className="flex space-x-2">
                                {[...Array(10)].map((_, i) => (
                                    <button
                                        key={i}
                                        className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-200"
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 text-center py-6">
                <div className="text-sm text-gray-600 mb-2">
                    2024 | UDT - Todos los derechos reservados
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-blue-700">
                        Facebook
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-700">
                        Twitter
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-700">
                        Instagram
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Busqueda;
