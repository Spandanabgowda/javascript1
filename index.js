const driverFormEl = document.getElementById('driverForm')
const nameEl=document.getElementById('name')
const age=document.getElementById('age')
const gender=document.getElementById('gender')
const nameOutput = document.getElementById('nameOutput')
const ageOutput= document.getElementById('ageOutput')
const genderOutput=document.getElementById('genderOutput')
const eligible=document.getElementById('eligible')

driverFormEl.addEventListener("submit",(event)=>{
    event.preventDefault() //stop the reload of page
    let userAge=calculateAge(age.value)
    let eligibleToDrive = isEligibleToDrive(userAge)
    nameOutput.innerText=`Name: ${nameEl.value}`
    ageOutput.innerText=`Age: ${userAge}`
    genderOutput.innerText=`Gender: ${gender.value}`
    eligible.innerText=`Is Eligible to Drive: ${eligibleToDrive}`
    console.log(eligibleToDrive)
})

function calculateAge(dob){
    let today = new Date()
    let dateofBirth = new Date(dob)
    let age = today.getFullYear() - dateofBirth.getFullYear()
    return age
    

}
function isEligibleToDrive(age){
    if(age>=18){
        console.log('eligible')
        return true
    }
    else{
        console.log('not eligible')
        return false
    }
}