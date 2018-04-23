import {Container} from 'unstated'
import listRepos from '../../services/list-repos'

class Repos extends Container {
  // eslint-disable-next-line no-undef
  state = {
    repos: [],
    currentPage: null,
    totalPages: null,
    isFirstPage: false,
    isLastPage: false,
    nextPage: null,
    previousUrl: '',
    nextUrl: '',
    userId: null
  }

  // eslint-disable-next-line no-undef
  setUserId = userId => {
    this.setState({userId})
  }

  // eslint-disable-next-line no-undef
  getRepos = (userId, page) => {
    listRepos(userId, {page})
      .then(data => {
        this.setState({
          ...data,
          nextUrl: `/users/${userId}/repos?page=${data.nextPage}`,
          previousUrl: `/users/${userId}/repos?page=${data.previousPage}`
        })
      })
      .catch(err => console.error(err))
  }
}

export default Repos
