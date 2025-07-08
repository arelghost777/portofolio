export function validateEmailJSEnv(): string | null {
  const requiredVars = [
    'EMAILJS_SERVICE_ID',
    'EMAILJS_TEMPLATE_ID', 
    'EMAILJS_PUBLIC_KEY'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    return `Variables manquantes: ${missingVars.join(', ')}`;
  }

  return null;
}