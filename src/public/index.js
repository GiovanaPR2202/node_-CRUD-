



async function action(){
    const names = document.getElementById('name').value 
    const email = document.getElementById('email').value
    console.log(names)
    console.log(email)

        await fetch('http://localhost:8000/user',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: names, email: email})
    })

    alert('Usuario inserido com sucesso')
}

