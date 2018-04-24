import React from 'react'
import PropTypes from 'prop-types'
import {compose, withState, withHandlers} from 'recompose'
import updateTags from '../../services/update-tags'
import {presentTags, parseTags} from '../../../../core/tags'
import Modal from './modal'

const Row = ({
  headers,
  handleOpen,
  handleChangeTags,
  isEditting,
  handleClose,
  item,
  tags
}) => {
  return (
    <tr>
      {headers
        .map(header => header.key)
        .map(key => (
          <td key={key}>{key === 'tags' ? presentTags(tags) : item[key]}</td>
        ))}
      <td>
        <button type="button" className="button" onClick={handleOpen}>
          edit
        </button>
        <Modal
          handleChangeTags={handleChangeTags}
          isActive={isEditting}
          handleClose={handleClose}
          repoName={item.name}
          tags={tags}
        />
      </td>
    </tr>
  )
}

Row.propTypes = {
  headers: PropTypes.array.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleChangeTags: PropTypes.func.isRequired,
  isEditting: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired
}

const enhance = compose(
  withState('tags', 'setTags', ({item}) => item.tags),
  withState('isEditting', 'setEditting', false),
  withHandlers({
    handleOpen: ({setEditting}) => () => setEditting(true),
    handleClose: ({setEditting}) => () => setEditting(false),
    handleChangeTags: ({setEditting, setTags, userId, item}) => values => {
      const tags = parseTags(values)

      updateTags({tags, repositoryId: item.id, userId})
        .then(data => {
          setTags(data)
          setEditting(false)
        })
        .catch(err => console.error(err))
    }
  })
)

export default enhance(Row)
