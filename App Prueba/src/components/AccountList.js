import React from 'react';

const AccountList = ({ accounts, onDeleteAccount }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cuentas Pendientes de Cambio</h2>
      {accounts.length === 0 ? (
        <p className="text-gray-600">Aún no has agregado cuentas para cambiar contraseña.</p>
      ) : (
        <ul>
          {accounts.map((account, index) => (
            <li key={index} className="flex justify-between items-center border-b border-gray-200 py-3 last:border-b-0">
              <div>
                <p className="font-semibold text-gray-800">{account.website} <span className="text-sm text-gray-500">({account.type})</span></p>
                <p className="text-sm text-gray-600">{account.username}</p>
              </div>
              <button
                onClick={() => onDeleteAccount(index)}
                className="text-red-600 hover:text-red-800 transition-colors"
                title="Eliminar cuenta"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccountList;