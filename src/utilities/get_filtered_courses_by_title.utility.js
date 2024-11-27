// Filtra los cursos por titulo según el input de búsqueda
export const getFilteredCoursesByTitle = (courses, searchedTitle) => {
  return courses.filter((course) => {
    // Limpia los espacios en blanco del titulo buscado y el titulo del curso y filtra con regex
    const searchedCourseTitle = searchedTitle.trim().replace(/\s+/g, ' ').toLowerCase()
    const courseTitle = course.title.trim().replace(/\s+/g, ' ').toLowerCase()

    // Busca los titulos del curso que hagan match con el curso buscado
    return courseTitle.includes(searchedCourseTitle)
  })
}
