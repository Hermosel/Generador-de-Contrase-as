export const generatePassword = ({ length, includeUppercase, includeLowercase, includeNumbers, includeSymbols }) => {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characters = '';
  if (includeUppercase) characters += uppercase;
  if (includeLowercase) characters += lowercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  if (characters.length === 0) {
    return 'Selecciona al menos un tipo de carácter';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
};