// Función para verificar si un texto contiene etiquetas HTML
// https://stackoverflow.com/questions/15458876/check-if-a-string-is-html-or-not
export const containsHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str)
