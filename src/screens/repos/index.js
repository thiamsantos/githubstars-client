import {lifecycle, compose, withHandlers, withProps} from 'recompose'
import {withRouter} from 'react-router'
import queryString from 'query-string'
import mitt from 'mitt'
import Screen from './components/screen'
import listRepos from './services/list-repos'

const emitter = mitt()

const enhance = compose(
  withRouter,
  lifecycle({
    state: {
      repos: [],
      currentPage: null,
      totalPages: null,
      isFirstPage: false,
      isLastPage: false,
      nextPage: null,
      previousUrl: '',
      nextUrl: '',
      userId: null
    },
    componentDidMount() {
      emitter.on('GET:REPOS', ({userId, page}) => {
        listRepos(userId, {page})
          .then(data => {
            this.setState({
              ...data,
              nextUrl: `/users/${userId}/repos?page=${data.nextPage}`,
              previousUrl: `/users/${userId}/repos?page=${data.previousPage}`
            })
          })
          .catch(err => console.error(err))
      })

      const {match, location} = this.props
      const userId = match.params.userId

      this.setState({userId})

      const queries = queryString.parse(location.search)
      emitter.emit('GET:REPOS', {userId, page: queries.page || 1})
    }
  }),
  withHandlers({
    gotoNextPage: ({nextPage, userId}) => () => {
      emitter.emit('GET:REPOS', {userId, page: nextPage})
    },
    gotoPreviousPage: ({previousPage, userId}) => () =>
      emitter.emit('GET:REPOS', {userId, page: previousPage})
  }),
  withProps({
    headers: [
      {
        key: 'name',
        text: 'Repository'
      },
      {
        key: 'description',
        text: 'Description'
      },
      {
        key: 'language',
        text: 'Language'
      },
      {
        key: 'tags',
        text: 'Tags'
      }
    ]
  })
)

export default enhance(Screen)
