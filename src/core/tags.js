import arrayUniq from 'array-uniq'

export function presentTags(tags) {
  return tags.map(tag => '#' + tag).join(' ')
}

export function stringifyTags(tags) {
  return tags.join(', ')
}

export function parseTags(tags) {
  return arrayUniq(tags.split(',').map(tag => tag.toLowerCase().trim()))
}
