import React from 'react'
import PropTypes from 'prop-types'
import {Subscribe} from 'unstated'
import ReposContainer from '../../containers/repos'
import Row from './row'

const Table = ({headers, repos}) => (
  <table className="table is-fullwidth is-bordered is-striped">
    <thead>
      <tr>
        {headers.map(header => <th key={header.key}>{header.text}</th>)}
        <th />
      </tr>
    </thead>
    <tbody>
      {repos.map(item => (
        <Subscribe key={item.id} to={[ReposContainer]}>
          {store => (
            <Row userId={store.state.userId} item={item} headers={headers} />
          )}
        </Subscribe>
      ))}
    </tbody>
  </table>
)

Table.propTypes = {
  repos: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
}

export default Table
