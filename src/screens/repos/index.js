import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const table = {
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
  ],
  data: [
    {
      name: 'kubernetes',
      description: 'Alguma descrição',
      language: 'Golang',
      tags: ['react', 'elixir'],
      id: 1
    },
    {
      name: 'docker',
      description: 'Alguma descrição',
      language: 'Golang',
      tags: ['react', 'elixir'],
      id: 2
    }
  ]
}

const Repos = ({match}) => (
  <section className="section">
    <h1 className="title">githubstars</h1>
    <Link to="/">home</Link>

    <p className="control has-icons-left">
      <input className="input" type="text" placeholder="search" />
    </p>

    <div>Repos {match.params.userId}</div>

    <table className="table is-fullwidth is-bordered is-striped">
      <thead>
        <tr>
          {table.headers.map(header => <th key={header.key}>{header.text}</th>)}
          <th />
        </tr>
      </thead>
      <tbody>
        {table.data.map(item => (
          <tr key={item.id}>
            {table.headers
              .map(header => header.key)
              .map(key => <td key={key}>{item[key]}</td>)}
            <td>
              <button type="button" className="button">
                edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link" aria-label="Goto page 1">
            1
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">…</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 45">
            45
          </a>
        </li>
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 47">
            47
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">…</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 86">
            86
          </a>
        </li>
      </ul>
    </nav>
  </section>
)

Repos.propTypes = {
  match: PropTypes.shape({
    userId: PropTypes.string.isRequired
  }).isRequired
}

export default Repos
