const db = require('../../db');
const bcrypt = require('bcrypt');

function getUser(userId){
    return db('users')
    .where({id: userId})
    .then(function([result]) {
      if(result){
        delete result.password
        return result
      }
      else {
        throw {status:400, message: 'User Not Found'}
      }
    })
  }

  function createUser(username, password, fname, lname){  
      return db('users')
      .where({user_name: username})
      .first()
      .then(function(data){
          if(data) throw {status: 400, message: 'User already exists'}
          return bcrypt.hash(password, 10)
      })
      .then(function(hashedPassword){
      return (db('users')
      .insert({user_name: username, password: hashedPassword, first_name: fname, last_name: lname}) 
      .returning('*')
      )
    })
    .then(function([ data ]){
      delete data.password
      return data
    })
  }

  module.exports = {
      getUser,
      createUser
  }