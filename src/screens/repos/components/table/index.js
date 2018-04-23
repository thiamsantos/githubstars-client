import React from 'react'
import PropTypes from 'prop-types'
import {presentTags} from '../../../../core/tags'

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
        <tr key={item.id}>
          {headers.map(header => header.key).map(key => (
            <td key={key}>
              {key === 'tags' ? presentTags(item[key]) : item[key]}
            </td>
          ))}
          <td>
            <button type="button" className="button">
              edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

Table.propTypes = {
  repos: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
}

export default Table
