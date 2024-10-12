const button = document.querySelector(".btn")
const pass = document.querySelector(".password")

const generatepassword = (iteration) =>{
    const chars = "0123456789abcdegfhijklmnopqrstuvwxyz!@#$%^&*??/\|."
    let password = " "

    for(let i=1; i<=iteration; i++){
       const index = Math.floor(Math.random() * chars.length)
     password += chars[index]
    }

    return password
}



button.addEventListener("click", (event) =>{
    event.preventDefault()

    const length = Number(document.querySelector(".length").value)
    pass.innerText = generatepassword(5)

    if(length <=0 ){
        alert("you have to put a positive number")
    } else{
        pass.innerText = generatepassword(length)
    }
});