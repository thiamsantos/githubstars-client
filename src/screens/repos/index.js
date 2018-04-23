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
      const {match, location, store} = this.props
      const userId = match.params.userId

      store.setUserId(userId)

      const queries = queryString.parse(location.search)
      store.getRepos(userId, {page: queries.page || 1})
    }
  }),
  withHandlers({
    gotoNextPage: ({store}) => () => {
      store.getRepos(store.state.userId, {page: store.state.nextPage})
    },
    gotoPreviousPage: ({store}) => () =>
      store.getRepos(store.state.userId, {page: store.state.previousPage}),
    handleSearchChange: ({store}) => event => {
      store.setSearchTag(event.target.value)
    },
    handleSearchClick: ({store}) => () => {
      store.getRepos(store.state.userId, {
        page: 1,
        tag: store.state.searchTag
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
