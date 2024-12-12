import UserView from './UserView';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ handleLogout }) => {
    return (
        <div className="h-screen w-64 bg-gray-900 text-gray-300 flex flex-col">
          <div className="flex items-center h-16 px-4 border-b border-gray-800">
            <h1 className="text-lg font-semibold">UDC TALENTO</h1>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-800 flex items-center">
                <span className="material-icons">Mi perfil</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 flex items-center">
                <span className="material-icons">Trabajos</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 flex items-center">
                <span className="material-icons">Notificaciones</span>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
              <div className="ml-4">
                <p className="text-sm font-medium">Nombre</p>
                <p className="text-xs text-gray-500">Usuario</p>
              </div>
            </div>
            <a
              href="/"
              onClick={handleLogout}
              className="block text-lg text-red-500 hover:text-red-400 mt-4 transition-colors">
              Cerrar sesión
            </a>
          </div>
        </div>
      );
    };

const Content = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-white rounded-lg shadow-lg">
      <header className="bg-white shadow mb-4">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <h1 className="text-lg font-semibold text-gray-800">Empleos</h1>
        </div>
      </header>
      <main>
        <div className="mt-8">
          <UserView />
          {/* Aquí irán los componentes dinámicos */}
        </div>
      </main>
    </div>
  );
};

const dashboarduser = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate.push('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar handleLogout={handleLogout} />
      <Content />
    </div>
  );
};

export default dashboarduser;
