import React from 'react'
import Header from '../header'
import PaginatedTable from '../paginated-table'

const Screen = ({...props}) => (
  <section className="section">
    <Header />
    <p className="control has-icons-left">
      <input className="input" type="text" placeholder="search" />
    </p>
    <PaginatedTable {...props} />
  </section>
)

export default Screen
