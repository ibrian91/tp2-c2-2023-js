const fs = require('fs'); // import con el type Module
const bcrypt = require('bcrypt');
const PATH_USERJSON = "../data/users.json";

function getUsers(){
    return JSON.parse(fs.readFileSync(PATH_USERJSON,'utf-8'));
}

function getUser(id){
    return getUsers().find(user => user._id == id);
}

function addUser(user){
    user._id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    const users = getUsers();
    user.password = bcrypt.hashSync(user.password, 10);
    //bcrypt.compareSync('password', "password almacenado")
    users.push(user);    
    fs.writeFileSync(PATH_USERJSON, JSON.stringify(users, null, " "));
    return getUser(user._id);
}

function updateUser(user){
    const users = getUsers();
    const index = users.findIndex(userVar => userVar._id == user._id);
    users[index] = user;
    fs.writeFileSync(PATH_USERJSON, JSON.stringify(users, null, " "));
    return getUser(user._id);
}

function deleteUser(id){
    const users = getUsers();
    users.splice( users.findIndex(user => user._id == id) , 1 );
    fs.writeFileSync(PATH_USERJSON, JSON.stringify(users, null, " "));    
}

module.exports = {getUser, getUsers, addUser, updateUser, deleteUser}