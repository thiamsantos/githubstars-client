import React from 'react'
import {Subscribe} from 'unstated'
import {lifecycle, compose, withHandlers, withProps} from 'recompose'
import {withRouter} from 'react-router'
import queryString from 'query-string'
import Screen from './components/screen'
import ReposContainer from './containers/repos'

const enhance = compose(
  withRouter,
  lifecycle({
    componentDidMount() {
      const {match, location, store, history} = this.props
      const userId = match.params.userId
      const queries = queryString.parse(location.search.replace(/^\?/, ''))

      store.getRepos(history, userId, {
        page: queries.page || 1,
        tag: queries.tag
      })
    }
  }),
  withHandlers({
    gotoNextPage: ({history, store}) => () => {
      store.getRepos(history, store.state.userId, {
        page: store.state.nextPage
      })
    },
    gotoPreviousPage: ({history, store}) => () =>
      store.getRepos(history, store.state.userId, {
        page: store.state.previousPage
      }),
    handleSearch: ({history, store}) => searchTag => {
      store.getRepos(history, store.state.userId, {
        page: 1,
        tag: searchTag
      })
    }
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

const Wrapper = enhance(Screen)

export default () => (
  <Subscribe to={[ReposContainer]}>
    {store => <Wrapper store={store} />}
  </Subscribe>
)
