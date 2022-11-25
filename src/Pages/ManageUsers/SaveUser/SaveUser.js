const saveUser = (name, email, userRole) => {
    const user = {
        name,
        email,
        userRole
    }
    fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

}

export default saveUser;