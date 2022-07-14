window.onload = function(){
    // forms
    const form = document.getElementById("userForm");
    const formUpdate = document.getElementById("userFormUpdate")
    // form user elements
    const usersList = document.getElementById("usersList")
    const name = document.getElementById("nameInput");
    const lastName = document.getElementById("lastNameInput")
    const email = document.getElementById("emailInput")
    // form updating elements
    const userIndex = document.getElementById("userSelect");
    const userUpdateInput = document.getElementById("userNameUpdate")
    const selectUsers = document.getElementById("userSelect")
    let allUsers = []

    form.onsubmit = function(event){
        event.preventDefault();
        addNewUser(name.value, lastName.value, email.value)
    }

    formUpdate.onsubmit = function(event){
        event.preventDefault();
        const index = userIndex.value
        const newName = userUpdateInput.value
        updateUserName(index, newName)
    }

    function addNewUser(name, lastName, email){   
        const newUser = {
            name: name,
            lastName: lastName,
            email: email
        }
        allUsers.push(newUser)
        updateUsersList()
        updateSelectOptions()
    }
    // adds names to the list of users
    function updateUsersList(){
        let allUsersLi = ""
        for(let i = 0; i < allUsers.length; i++){
            allUsersLi += `<li>${allUsers[i].name}</li>`
        }
        usersList.innerHTML = allUsersLi
    }

    // Updates a user name given the index
    function updateUserName(index, newName){
        allUsers[index].name = newName
        updateUsersList()
        updateSelectOptions()
    }

    // updating the select options
    function updateSelectOptions(){
        let newOptions = ""
        allUsers.forEach((user, index) => {
            newOptions += `<option  value="${index}">${user.name}</option>`
        })
        selectUsers.innerHTML = newOptions
    }
}

