import {Container} from 'unstated'
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
    searchUrl: ''
  }

  // eslint-disable-next-line no-undef
  setUserId = userId => {
    this.setState({userId})
  }

  // eslint-disable-next-line no-undef
  setSearchTag = value => {
    this.setState(state => ({
      ...state,
      searchTag: value,
      searchUrl: `/users/${state.userId}/repos?page=${
        state.currentPage
      }&tag=${value}`
    }))
  }

  // eslint-disable-next-line no-undef
  getRepos = (history, userId, {page, tag}) => {
    listRepos(userId, {page, tag})
      .then(data => {
        this.setState(state => ({
          ...state,
          ...data,
          nextUrl: `/users/${userId}/repos?page=${data.nextPage}`,
          previousUrl: `/users/${userId}/repos?page=${data.previousPage}`,
          searchUrl: `/users/${userId}/repos?page=${state.currentPage}`
        }))
      })
      .catch(err => {
        if (err.response && err.response.status === 404) {
          history.push('/404')
          return
        }

        console.error(err)
      })
  }
}

export default Repos
