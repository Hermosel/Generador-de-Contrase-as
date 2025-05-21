import React, { useState } from 'react';

const PasswordChangeForm = ({ onSaveAccount }) => {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website && username) {
      onSaveAccount({ website, username });
      setWebsite('');
      setUsername('');
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Registra Cuentas para Cambiar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="website">
            Sitio Web:
          </label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="Ej: Facebook, Banco XYZ"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
            Usuario/Email:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="Ej: tu_usuario@email.com"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg shadow-md"
        >
          Guardar Cuenta
        </button>
      </form>
    </div>
  );
};

export default PasswordChangeForm;