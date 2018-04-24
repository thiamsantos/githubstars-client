import React from 'react'
import PropTypes from 'prop-types'
import {withFormik} from 'formik'
import {stringifyTags, parseTags} from '../../../../core/tags'

const InnerForm = ({
  values,
  handleChange,
  handleSubmit,
  isSubmitting,
  handleReset
}) => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">edit tags for {values.repoName}</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="tags"
          name="tags"
          value={values.tags}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="field is-grouped">
      <div className="control">
        <button className="button" type="submit" disabled={isSubmitting}>
          Save
        </button>
      </div>
      <div className="control">
        <button
          className="button"
          type="button"
          onClick={handleReset}
          disabled={isSubmitting}
        >
          Cancel
        </button>
      </div>
    </div>
  </form>
)

InnerForm.propTypes = {
  values: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    repoName: PropTypes.string.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleReset: PropTypes.func.isRequired
}

const Form = withFormik({
  mapPropsToValues: ({tags, repoName}) => ({
    tags: stringifyTags(tags),
    repoName
  }),
  handleSubmit: ({tags}, {props, setSubmitting, setValues}) => {
    const {handleSubmit} = props
    setSubmitting(false)
    setValues({tags: stringifyTags(parseTags(tags))})
    handleSubmit(tags)
  },
  handleReset: (values, {props}) => {
    const {handleReset} = props
    handleReset()
  }
})(InnerForm)

export default Form
