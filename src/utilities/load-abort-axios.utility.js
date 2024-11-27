// AbortController permite abortar una o más solicitudes cuando sea necesario
// Se usa para cancelar requests del fetch al servicio que no van a ser usadas
export const loadAbort = () => {
  const controller = new AbortController()
  return controller
}
