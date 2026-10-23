function fetchFromServer(userid){
     const xhr = new XMLHttpRequest()

//  https://mimic-server-api.vercel.app/users/2

xhr.open('GET', 'https://mimic-server-api.vercel.app/users/'+ userid)
xhr.onload = ()=>{
    if (xhr.status == 200){
  
    const data =  JSON.parse(xhr.response)
    
     
    // UI display
    document.querySelector('#container').classList.remove('hidden')
     document.querySelector('#full-name').innerText = data.name
     
     document.querySelector('#email').textContent = data.email
    }
    else{
     console.error(' XHR Error', xhr.status)
    }
   
    
}

xhr.onerror = ()=>{
    console.error('Request failed!')
}
 
xhr.send()

}
function loadUser(){
const userid = prompt("what id do you want to fetch ?")

if(userid){
// fetch user from server

fetchFromServer(userid)
}



}
