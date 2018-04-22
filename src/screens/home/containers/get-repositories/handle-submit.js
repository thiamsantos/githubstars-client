import axios from 'axios'

export default function handleSubmit(
  values,
  {props, setSubmitting, setErrors}
) {
  axios
    .post(process.env.BASE_URL + '/v1/users', values)
    .then(response => {
      const {history} = props
      setSubmitting(false)
      history.push(`/users/${response.data.data.id}/repos`)
    })
    .catch(err => {
      setSubmitting(false)

      if (err.response.status === 404) {
        setErrors({requestFailed: 'Username not found on GitHub'})
        return
      }

      if (err.response.status === 422) {
        setErrors({requestFailed: 'Invalid username'})

        return
      }

      setErrors({requestFailed: 'Something went wrong'})
    })
}
