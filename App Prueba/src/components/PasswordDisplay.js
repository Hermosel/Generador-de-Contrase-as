import React, { useState } from 'react';

const PasswordDisplay = ({ password, accountInfo }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const handleDownload = () => {
    let fileContent = `Contraseña Generada:\n${password}\n\n`;
    if (accountInfo && accountInfo.website && accountInfo.username) {
      fileContent += `Sitio Web: ${accountInfo.website}\n`;
      fileContent += `Usuario/Email: ${accountInfo.username}\n`;
    } else {
      fileContent += "No se asoció una cuenta a esta contraseña.\n";
    }

    const element = document.createElement("a");
    const file = new Blob([fileContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "contrasena_generada.txt";
    document.body.appendChild(element); // Required for Firefox
    element.click();
    document.body.removeChild(element); // Clean up
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu Contraseña Generada</h2>
      <div className="relative mb-4">
        <input
          type="text"
          readOnly
          value={password}
          className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 text-lg font-mono pr-12 focus:outline-none"
          placeholder="Haz clic en 'Generar Contraseña'"
        />
        {password && (
          <button
            onClick={handleCopy}
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 hover:text-black transition-colors"
            title="Copiar al portapapeles"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        )}
      </div>
      {copied && <p className="mt-2 text-sm text-green-600 text-center">¡Copiado!</p>}

      {password && (
        <button
          onClick={handleDownload}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-md"
        >
          Descargar Contraseña (.txt)
        </button>
      )}
    </div>
  );
};

export default PasswordDisplay;