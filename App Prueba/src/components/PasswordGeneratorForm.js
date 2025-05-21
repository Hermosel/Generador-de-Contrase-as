import React, { useState } from 'react';

const PasswordGeneratorForm = ({ onGenerate }) => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleGenerate = () => {
    onGenerate({ length, includeUppercase, includeLowercase, includeNumbers, includeSymbols });
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Configura tu Contraseña</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="length">
          Longitud: {length}
        </label>
        <input
          type="range"
          id="length"
          min="8"
          max="32"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center text-gray-700 text-sm font-semibold">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="mr-2 h-4 w-4 text-black rounded focus:ring-black"
          />
          Incluir Mayúsculas (A-Z)
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center text-gray-700 text-sm font-semibold">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
            className="mr-2 h-4 w-4 text-black rounded focus:ring-black"
          />
          Incluir Minúsculas (a-z)
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center text-gray-700 text-sm font-semibold">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="mr-2 h-4 w-4 text-black rounded focus:ring-black"
          />
          Incluir Números (0-9)
        </label>
      </div>
      <div className="mb-6">
        <label className="flex items-center text-gray-700 text-sm font-semibold">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="mr-2 h-4 w-4 text-black rounded focus:ring-black"
          />
          Incluir Símbolos (!@#$...)
        </label>
      </div>
      <button
        onClick={handleGenerate}
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg shadow-md"
      >
        Generar Contraseña
      </button>
    </div>
  );
};

export default PasswordGeneratorForm;