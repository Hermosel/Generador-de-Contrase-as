import React, { useState } from 'react';

const AccountForm = ({ onAddAccount }) => {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [accountType, setAccountType] = useState('website'); // Default type

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website && username) {
      onAddAccount({ website, username, type: accountType });
      setWebsite('');
      setUsername('');
      setAccountType('website'); // Reset to default
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Agregar Cuenta para Cambio de Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="accountType">
            Tipo de Cuenta:
          </label>
          <select
            id="accountType"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
          >
            <option value="website">Sitio Web</option>
            <option value="email">Correo Electrónico</option>
            <option value="app">Aplicación</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="website">
            Nombre (Sitio/Email/App):
          </label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="Ej: Facebook, Gmail, Spotify"
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
          Agregar Cuenta
        </button>
      </form>
    </div>
  );
};

export default AccountForm;