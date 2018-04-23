import axios from 'axios'
import queryString from 'query-string'

export default function listRepos(userId, {page = 1, tag = ''}) {
  const params = queryString.stringify({page, tag})

  return axios
    .get(process.env.BASE_URL + '/v1/users/' + userId + '/repos?' + params)
    .then(response => response.data)
    .then(payload => {
      const currentPage = payload._meta.page_number
      const totalPages = payload._meta.total_pages
      const isFirstPage = payload._meta.page_number === 1
      const isLastPage = currentPage === totalPages - 1
      const nextPage = isLastPage ? '' : currentPage + 1
      const previousPage = isFirstPage ? '' : currentPage - 1

      return {
        repos: payload.data,
        currentPage,
        totalPages,
        isFirstPage,
        isLastPage,
        nextPage,
        previousPage
      }
    })
    .catch(err => console.error(err))
}
