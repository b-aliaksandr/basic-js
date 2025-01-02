/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || !members.length) return false;

  const teamName = [];

  for (let member of members) {
    if (typeof member === 'string' && member !== '') {
      const firstLetter = member.trimStart().charAt(0).toUpperCase()
      teamName.push(firstLetter);
    }
  }
  
  if (!teamName.length) return false;
  return teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};
