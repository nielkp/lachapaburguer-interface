export function formatDate(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  
  // Verifica se a data é válida
  if (isNaN(date.getTime())) {
    return 'Data inválida';
  }
  
  // Formata a data no padrão brasileiro (DD/MM/AAAA HH:mm)
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function formatPrice(price) {
  if (typeof price !== 'number') {
    return 'R$ 0,00';
  }
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
}