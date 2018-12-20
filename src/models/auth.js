const bcrypt = require('bcrypt');


function login(username, password){
  let user;
  return (
      db('users')
      .where({ username})
      .first()
  )
  .then(function(data){
    if(!data) throw { status: 400, message: "Bad Request"}
    user = data
    return bcrypt.compare(password, data.password)
  })
  .then(function(status){
    if(!status) throw { status: 401, message: "Unauthorized Login"}
    delete user.password
    return user
  })
}

module.exports = {
  login
}