import React, { useState } from 'react';
import PasswordGeneratorForm from './components/PasswordGeneratorForm';
import PasswordDisplay from './components/PasswordDisplay';
import AccountForm from './components/AccountForm'; // Usamos el nuevo formulario
import AccountList from './components/AccountList';
import { generatePassword } from './utils/passwordGenerator';

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [accountsToChange, setAccountsToChange] = useState([]);
  const [lastGeneratedAccount, setLastGeneratedAccount] = useState(null); // Para asociar la cuenta a la última contraseña generada

  const handleGeneratePassword = (options) => {
    const newPassword = generatePassword(options);
    setGeneratedPassword(newPassword);
    // Aquí podrías asociar la última cuenta guardada si es relevante,
    // o dejarlo null si la generación es independiente de la lista.
    // Por ahora, lo dejamos null para que el usuario asocie manualmente si quiere.
    setLastGeneratedAccount(null);
  };

  const handleAddAccount = (account) => {
    setAccountsToChange([...accountsToChange, account]);
    // Opcional: asociar la cuenta recién guardada a la contraseña generada si existe
    // if (generatedPassword) {
    //   setLastGeneratedAccount(account);
    // }
  };

  const handleDeleteAccount = (indexToDelete) => {
    setAccountsToChange(accountsToChange.filter((_, index) => index !== indexToDelete));
  };

  const handleCreateReminder = () => {
    const eventTitle = encodeURIComponent('Recordatorio: Cambiar contraseñas');
    let eventDetails = 'Revisa tu lista de cuentas pendientes para cambiar contraseña.';

    if (accountsToChange.length > 0) {
        eventDetails += '\n\nCuentas pendientes:\n';
        accountsToChange.forEach(account => {
            eventDetails += `- ${account.website} (${account.type}): ${account.username}\n`;
        });
    }

    const eventLocation = ''; // Puedes dejarlo vacío o añadir una URL si tienes una página de lista
    const eventStartDate = new Date();
    const eventEndDate = new Date();
    eventEndDate.setHours(eventStartDate.getHours() + 1); // Recordatorio de 1 hora

    const startDateFormatted = eventStartDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDateFormatted = eventEndDate.toISOString().replace(/-|:|\.\d+/g, '');

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDateFormatted}/${endDateFormatted}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Generador de Contraseñas
        </h1>

        {/* Botón para ir a la Agenda de Gmail */}
        <button
          onClick={() => window.open('https://calendar.google.com/', '_blank')}
          className="w-full mb-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg shadow-md"
        >
          Ir a la Agenda de Gmail
        </button>

        <PasswordGeneratorForm onGenerate={handleGeneratePassword} />
        {/* Pasamos accountInfo a PasswordDisplay */}
        <PasswordDisplay password={generatedPassword} accountInfo={lastGeneratedAccount} />

        <AccountForm onAddAccount={handleAddAccount} /> {/* Usamos el nuevo formulario */}
        <AccountList accounts={accountsToChange} onDeleteAccount={handleDeleteAccount} />

        {accountsToChange.length > 0 && (
          <button
            onClick={handleCreateReminder}
            className="w-full mt-8 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg shadow-md"
          >
            Crear Recordatorio en Google Calendar
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

// DONE