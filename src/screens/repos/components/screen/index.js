import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header'
import PaginatedTable from '../paginated-table'
import Search from './search'

const Screen = ({
  store,
  gotoPreviousPage,
  gotoNextPage,
  headers,
  handleSearch
}) => {
  const {repos, previousUrl, isFirstPage, isLastPage, nextUrl} = store.state

  return (
    <section className="section">
      <Header />
      <Search handleSearch={handleSearch} />
      <PaginatedTable
        headers={headers}
        repos={repos}
        previousUrl={previousUrl}
        gotoPreviousPage={gotoPreviousPage}
        gotoNextPage={gotoNextPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        nextUrl={nextUrl}
      />
    </section>
  )
}

Screen.propTypes = {
  store: PropTypes.object.isRequired,
  gotoNextPage: PropTypes.func.isRequired,
  gotoPreviousPage: PropTypes.func.isRequired,
  headers: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Screen
