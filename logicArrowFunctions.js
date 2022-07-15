// forms
const form = document.getElementById("userForm");
const formUpdate = document.getElementById("userFormUpdate")
// form user elements
const usersList = document.getElementById("usersList")
const firstName = document.getElementById("nameInput");
const lastName = document.getElementById("lastNameInput")
const email = document.getElementById("emailInput")
// form updating elements
const userIndex = document.getElementById("userSelect");
const userUpdateInput = document.getElementById("userNameUpdate")
const selectUsers = document.getElementById("userSelect")
const modeBtn = document.getElementById("modeBtn");

let currentMode = "light"

let allUsers = []

//mode btn click
modeBtn.onclick = () => {
    if(currentMode == "light"){
        currentMode = "dark"
        modeBtn.innerHTML = `<i class="fa-solid fa-sun" style="font-size: 24px;"></i>`
        document.querySelector("body").style.backgroundColor = "#000"
    }
    else if(currentMode == "dark"){
        currentMode = "light"
        modeBtn.innerHTML = `<i class="fa-solid fa-moon" style="font-size: 24px;"></i>`
        document.querySelector("body").style.backgroundColor = "#fff"
    }
}

// form for addign a new user
form.onsubmit = (event) => {
    event.preventDefault();
    // addNewUser(firstName.value, lastName.value, email.value)
    addNewUserLocalStorage(firstName.value, lastName.value, email.value)
}

// form for updating an existing user
formUpdate.onsubmit = function(event){
    event.preventDefault();
    const index = userIndex.value
    const newName = userUpdateInput.value
    updateUserName(index, newName)
}

// add new user to global list
const addNewUser = (name, lastName, email) => {   
    const newUser = {
        name: name,
        lastName: lastName,
        email: email
    }
    allUsers.push(newUser)
    console.log(allUsers)
    updateUsersList()
    updateSelectOptions()
}

// add new user to localstorage
const addNewUserLocalStorage = (name, lastName, email) => {
    const newUser = {
        name: name,
        lastName: lastName,
        email: email
    }
    allUsers.push(newUser)
    // console.log(allUsers)
    updateUsersList()
    updateSelectOptions()
    localStorage.setItem("allUsers",  JSON.stringify(allUsers))
}

const updateLocalStorage = () => {
    localStorage.setItem("allUsers",  JSON.stringify(allUsers))
}

// adds names to the list of users
const updateUsersList = () => {
    let allUsersLi = ""
    for(let i = 0; i < allUsers.length; i++){
        allUsersLi += `<li>${allUsers[i].name}</li>`
    }
    usersList.innerHTML = allUsersLi
}

// updating the select options
const updateSelectOptions = () => {
    let newOptions = ""
    allUsers.forEach((user, index) => {
        newOptions += `<option  value="${index}">${user.name}</option>`
    })
    selectUsers.innerHTML = newOptions
}

// Updates a user name given the index
const updateUserName = (index, newName) =>{
    allUsers[index].name = newName
    updateUsersList()
    updateSelectOptions()
    updateLocalStorage()
}


if(localStorage.getItem("allUsers") !== null){
    allUsers = JSON.parse(localStorage.getItem("allUsers")) 
    console.log(allUsers)
    updateUsersList()
    updateSelectOptions()
}