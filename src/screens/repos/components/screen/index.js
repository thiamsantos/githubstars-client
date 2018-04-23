import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Header from '../header'
import PaginatedTable from '../paginated-table'

const Screen = ({
  store,
  gotoPreviousPage,
  gotoNextPage,
  headers,
  handleSearchClick,
  handleSearchChange
}) => {
  const {
    repos,
    previousUrl,
    isFirstPage,
    isLastPage,
    nextUrl,
    searchTag,
    searchUrl
  } = store.state

  return (
    <section className="section">
      <Header />
      <nav className="field has-addons">
        <p className="control">
          <input
            onChange={handleSearchChange}
            className="input"
            type="text"
            value={searchTag}
            placeholder="search by a tag"
          />
        </p>
        <p className="control">
          <Link to={searchUrl} onClick={handleSearchClick} className="button">
            Search
          </Link>
        </p>
      </nav>
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
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired
}

export default Screen
