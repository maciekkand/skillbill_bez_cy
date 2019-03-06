import { LITERALS, NUMBERS } from './constants'

export const fetch = (context, selectedSkills = {}) => {
  if (selectedSkills.paginationLimit) {
    if (selectedSkills.paginationLimit > NUMBERS.PAGINATION_LIMIT) {
      const limit = Number(String(selectedSkills.paginationLimit).slice(1)) || NUMBERS.PAGINATION_LIMIT
      const skip = Number(selectedSkills.paginationLimit) - limit
      return LITERALS.PREFIX + `?s={id:1}&sk=${skip}&l=${limit}` + LITERALS.SUFFIX
    }
    return LITERALS.PREFIX + '?s={id:1}&l=' + NUMBERS.DOWNLOAD_LIMIT + LITERALS.SUFFIX
  }

  let query = ''
  const skill_1 = selectedSkills.skill_1
  const rank_1 = selectedSkills.rank_1 || 1
  const skill_2 = selectedSkills.skill_2
  const rank_2 = selectedSkills.rank_2 || 1
  const skill_3 = selectedSkills.skill_3
  const rank_3 = selectedSkills.rank_3 || 1

  if (skill_1 && rank_1 && skill_2 && rank_2 && skill_3 && rank_3) {
    query = '?s={id:1}&q={"skill_1":"' + skill_1 + '",$and:[{"rank_1":{$gte:' + rank_1 + '}}, \
      {$and:[{"skill_2":"' + skill_2 + '"},{$and:[{"rank_2":{$gte:' + rank_2 + '}}, \
      {$and:[{"skill_3":"' + skill_3 + '"},{$and:[{"rank_3":{$gte:' + rank_3 + '}}]}]}]}]}]}'
  }
  else if (skill_1 && rank_1 && skill_2 && rank_2) {
    query = '?s={id:1}&q={"skill_1":"' + skill_1 + '",$and:[{"rank_1":{$gte:' + rank_1 + '}}, \
      {$and:[{"skill_2":"' + skill_2 + '"},{$and:[{"rank_2":{$gte:' + rank_2 + '}}]}]}]}'
  }
  else if (skill_1 && rank_1) {

    query = '?s={rank_1:-1}&q={"skill_1":"' + skill_1 + '",$and:[{"rank_1":{$gte:' + rank_1 + '}}]}'
  }
  else {
    query = '?s={id:1}&l=' + NUMBERS.DOWNLOAD_LIMIT
  }

  const urlString = LITERALS.PREFIX + query + LITERALS.SUFFIX

  return urlString
}

export const findText = text => {

  const query = `?q={$or:[{"first":{"$regex":".*${text}.*",$options:"i"}},{"last":{"$regex":".*${text}.*",$options:"i"}}]}`
  const urlString = LITERALS.PREFIX + query + LITERALS.SUFFIX


  return urlString
}
