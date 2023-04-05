export const generatePassword = (
  length: number,
  complexity: number,
): string => {
  const chars = [
    'abcdefghijklmnopqrstuvwxyz',
    '0123456789',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '!@#$%^&*()',
  ];
  let password = '';

  for (let i = 0; i < length; i++) {
    const caseType = chars[Math.floor(Math.random() * (complexity + 1))];
    password += caseType[Math.floor(Math.random() * caseType.length)];
  }

  return password;
};
