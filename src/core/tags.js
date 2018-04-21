export function stringifyTags(tags) {
  return tags.map(tag => '#' + tag).join(' ')
}
