import axios from 'axios'

export default function updateTags({tags, userId, repositoryId}) {
  return axios
    .put(
      process.env.BASE_URL +
        '/v1/users/' +
        userId +
        '/repos/' +
        repositoryId +
        '/tags',
      {tags}
    )
    .then(response => response.data)
    .then(payload => payload.data)
}
