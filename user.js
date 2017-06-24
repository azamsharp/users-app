const users = [
  {username: 'alexis', email: 'alexis@gmail.com'},
  {username: 'landry', email: 'landry@hotmail.com'}
]

function getUser(username) {
  return users.find(function (user) {
    return user.username == username
  });
}

module.exports = {
  find: getUser,
  all: users
  // delete which takes a username
  // and removes from the array 
}
