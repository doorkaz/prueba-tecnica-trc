export function formatTimestampToDate (timestamp) {
  const date = new Date(timestamp * 1000) // Convierte el timestamp de segundos a milisegundos

  // Comprueba si es una fecha valida, si es entonces se formatea a DD/MM/YYYY retornando texto
  return isNaN(date) ? 'DD/MM/YYYY' : date.toLocaleDateString('es-ES')
}
