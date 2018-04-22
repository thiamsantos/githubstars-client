import arrayUniq from 'array-uniq'

export function stringifyTags(tags) {
  return tags.map(tag => '#' + tag).join(' ')
}

export function parseTags(tags) {
  return arrayUniq(tags.split(',').map(tag => tag.toLowerCase().trim()))
}
