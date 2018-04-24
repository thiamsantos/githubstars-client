import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import {withFormik} from 'formik'
import {withRouter} from 'react-router'
import queryString from 'query-string'

const InnerForm = ({values, handleChange, handleSubmit, isSubmitting}) => (
  <form onSubmit={handleSubmit}>
    <div className="field has-addons">
      <p className="control">
        <input
          onChange={handleChange}
          className="input"
          name="search"
          type="text"
          value={values.search}
          placeholder="search by a tag"
        />
      </p>
      <p className="control">
        <button type="submit" className="button" disabled={isSubmitting}>
          Search
        </button>
      </p>
    </div>
  </form>
)

InnerForm.propTypes = {
  values: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const enhance = compose(
  withRouter,
  withFormik({
    // Transform outer props into form values
    mapPropsToValues: ({location}) => {
      return {search: queryString.parse(location.search).tag || ''}
    },
    // Submission handler
    handleSubmit: (values, {props, setSubmitting}) => {
      const {handleSearch} = props
      setSubmitting(false)
      handleSearch(values.search)
    }
  })
)

export default enhance(InnerForm)
