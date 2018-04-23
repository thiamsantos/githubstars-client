import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header'
import PaginatedTable from '../paginated-table'

const Screen = ({store, gotoPreviousPage, gotoNextPage, headers}) => {
  const {repos, previousUrl, isFirstPage, isLastPage, nextUrl} = store.state

  return (
    <section className="section">
      <Header />
      <p className="control has-icons-left">
        <input className="input" type="text" placeholder="search" />
      </p>
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
  headers: PropTypes.array.isRequired
}

export default Screen
