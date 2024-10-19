const driverFormEl = document.getElementById('driverForm')
const nameEl=document.getElementById('name')
const age=document.getElementById('age')
const gender=document.getElementById('gender')
const nameOutput = document.getElementById('nameOutput')
const ageOutput= document.getElementById('ageOutput')
const genderOutput=document.getElementById('genderOutput')

driverFormEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    nameOutput.innerText=`Name: ${nameEl.value}`
    ageOutput.innerText=`Age: ${age.value}`
    genderOutput.innerText=`Gender: ${gender.value}`
})