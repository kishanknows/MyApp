export const generatePassword = (
  length: number,
  complexity: 'weak' | 'fair' | 'strong' | 'very strong',
): string => {
  const chars = [
    'abcdefghijklmnopqrstuvwxyz',
    '0123456789',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '!@#$%^&*()',
  ];
  const map = {
    weak: 1,
    fair: 2,
    strong: 3,
    'very strong': 4,
  };
  let password = '';
  for (let i = 0; i < length; i++) {
    const caseType = chars[Math.floor(Math.random() * map[complexity])];
    password += caseType[Math.floor(Math.random() * caseType.length)];
  }
  return password;
};
