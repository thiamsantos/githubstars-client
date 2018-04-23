import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Table from '../table'

const PaginatedTable = ({
  headers,
  repos,
  previousUrl,
  gotoPreviousPage,
  isFirstPage,
  isLastPage,
  gotoNextPage,
  nextUrl
}) => (
  <div>
    <Table headers={headers} repos={repos} />
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <Link
        to={previousUrl}
        onClick={gotoPreviousPage}
        className="pagination-previous"
        disabled={isFirstPage}
      >
        Previous
      </Link>
      <Link
        to={nextUrl}
        onClick={gotoNextPage}
        className="pagination-next"
        disabled={isLastPage}
      >
        Next page
      </Link>
    </nav>
  </div>
)

PaginatedTable.propTypes = {
  headers: PropTypes.array.isRequired,
  repos: PropTypes.array.isRequired,
  previousUrl: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
  isFirstPage: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  gotoPreviousPage: PropTypes.func.isRequired,
  gotoNextPage: PropTypes.func.isRequired
}

export default PaginatedTable
