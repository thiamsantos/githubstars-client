import React from 'react'
import PropTypes from 'prop-types'
import {withFormik} from 'formik'
import classnames from 'classnames'
import {withRouter} from 'react-router'
import handleSubmit from './handle-submit'

const GetRepositories = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    {errors.requestFailed &&
      <article className="message is-danger">
        <div className="message-body">{errors.requestFailed}</div>
      </article>}
    <div className="field has-addons">
      <p className="control">
        <button type="button" className="button is-static">
          https://github.com/
        </button>
      </p>
      <p className="control is-expanded">
        <input
          className={classnames('input', {
            'is-danger': touched.name && errors.name
          })}
          type="text"
          placeholder="username"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
      </p>
    </div>
    <button
      type="submit"
      className={classnames('button is-link', {
        'is-loading': isSubmitting
      })}
      disabled={isSubmitting}
    >
      Get repositories
    </button>
  </form>
)

GetRepositories.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    requestFailed: PropTypes.string
  }),
  touched: PropTypes.shape({
    name: PropTypes.bool
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

GetRepositories.defaultProps = {
  touched: {
    name: false
  },
  errors: {
    name: null,
    requestFailed: null
  }
}

export default withRouter(
  withFormik({
    mapPropsToValues: () => ({name: ''}),
    validate: values => {
      const errors = {}
      if (!values.name) {
        errors.name = 'Name is required'
      }

      return errors
    },
    handleSubmit
  })(GetRepositories)
)
