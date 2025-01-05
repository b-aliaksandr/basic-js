/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const position = email.lastIndexOf('@') + 1;
  return email.substring(position);
}

module.exports = {
  getEmailDomain
};
