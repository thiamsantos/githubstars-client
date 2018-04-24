import {Container} from 'unstated'
import querystring from 'query-string'
import listRepos from '../../services/list-repos'

class Repos extends Container {
  // eslint-disable-next-line no-undef
  state = {
    repos: [],
    currentPage: 1,
    totalPages: null,
    isFirstPage: false,
    isLastPage: false,
    nextPage: null,
    previousUrl: '',
    nextUrl: '',
    userId: null,
    searchTag: '',
    searchUrl: '',
    loading: true
  }

  // eslint-disable-next-line no-undef
  getRepos = (history, userId, {page = 1, tag = ''}) => {
    this.setState({loading: true})
    listRepos(userId, {page, tag})
      .then(data => {
        this.setState({loading: false})

        history.push({search: querystring.stringify({tag, page})})
        this.setState(state => ({
          ...state,
          ...data,
          userId,
          tag,
          nextUrl: `/users/${userId}/repos?page=${data.nextPage}`,
          previousUrl: `/users/${userId}/repos?page=${data.previousPage}`,
          searchUrl: `/users/${userId}/repos?page=${state.currentPage}`
        }))
      })
      .catch(err => {
        this.setState({loading: false})
        if (err.response && err.response.status === 404) {
          history.push('/404')
          return
        }

        console.error(err)
      })
  }
}

export default Repos
