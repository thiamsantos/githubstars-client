import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Form from './form'

const Modal = ({isActive, tags, handleChangeTags, repoName, handleClose}) => (
  <div className={classnames('modal', {'is-active': isActive})}>
    <div className="modal-background" onClick={handleClose} />
    <div className="modal-content">
      <div className="box">
        <Form
          handleSubmit={handleChangeTags}
          handleReset={handleClose}
          repoName={repoName}
          tags={tags}
        />
      </div>
    </div>
    <button
      type="button"
      onClick={handleClose}
      className="modal-close is-large"
      aria-label="close"
    />
  </div>
)

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  handleChangeTags: PropTypes.func.isRequired,
  repoName: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default Modal
