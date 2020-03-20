const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {

  res.send('This is tutorial App on creating your first USSD app in 5 minutes or less by Ajala Abdulsamii <kgasta@gmail.com>')

})

app.post('*', (req, res) => {

  let {sessionId, serviceCode, phoneNumber, text} = req.body



//this is the begining



  if (text == '') {
    // This is the first request. letting the user pick a region where the hospital they want is located
    let response = `CON Please select the type of hospital

    1. Public
    2. Private
    0. Cancel`

    res.send(response)

  } 


  //public section
  //1


  else if (text == '1') {
    // Business logic for public response
    let response = `CON Choose a hospital you want to view

    1. Central
    2. Western
    3. Eastern
    4. Northern
    0. Cancel`

    res.send(response)

  } 

  else if (text == '2') {
    // Business logic for private response
    let response = `CON Choose a hospital you want to view

    1. Central
    2. Western
    3. Eastern
    4. Northern
    0. Cancel`

    res.send(response)

  } 

  else if (text == '0') {
    // Business logic for cancel response
    let response = `END Exiting`

    res.send(response)

  }


  //Public
  //central
  //1/1

  else if (text == '1*1') {
    // Business logic for public western region response
    let response = `CON Choose a hospital you want to view

    1. Mulago hospital
    2. Mengo hospital`

    res.send(response)

  } 


  //public
  //central
  //1/1/2
  //mengo hospital

   else if (text == '1*1*2') {
    // Business logic for public Mengo hospital response
    let response = `CON Mengo hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '1*1*2*1') {
    // Business logic for Mengo hospital location response
    let response = `END Mengo hospital Location

    Kampala Uganda`

    res.send(response)

  } 

  else if (text == '1*1*2*2') {
    // Business logic for public Mengo hospital services response
    let response = `CON Mengo hospital services
    .  Surgery
    .  Pharmacy
    .  Laboratory
    .  Private out patient
    .  Generaloutpatient
    .  Nursing department.
    .  Corporate Social responsibility
    1. Specialised
    2. Medicine`

    res.send(response)

  } 

  else if (text == '1*1*2*2*1'){
// Business logic for public Mengo hospital specialised services response
    let response = `END Mengo hospital specialised services

    . Eye clinic
    . Dental clinic
    . Counseling and homecare
    . Orthopedics
    . Obstetrics  and gynaecology
    . Physiotherapy
    . Mental health`

    res.send(response)

  }

  else if (text == '1*1*2*2*2'){
// Business logic for public Mengo hospital medicine services response
    let response = `END Mengo hospital medicine services

    1. Wards`

    res.send(response)

  }


  //public
  //central
  //1/1/2
  //mulago hospital


  else if (text == '1*1*1') {
    // Business logic for public mulago hospital response
    let response = `CON Mulago hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '1*1*1*1') {
    // Business logic for mulago hospital location response
    let response = `END Mulago hospital Location

    Mulago, Kampala, Uganda`

    res.send(response)

  } 

  else if (text == '1*1*1*2') {
    // Business logic for public mulago hospitalservices response
    let response = `END Mulago hospital services

    . sychiatry
    . Ear
    . Nose
    . Throat (ENT)
    . Radiology
    . Pathology
    . Ophthalmology`

    res.send(response)

  } 

   else if (text == '1*1*1*0') {
    // Business logic for public mulago hospital cancel response
    let response = `END Exiting`

    res.send(response)

  } 


  //public
  //western
  //1/2



  else if (text == '1*2') {
    // Business logic for public western region response
    let response = `CON Choose a hospital you want to view

    1. Mbarara regional referral hospital
    2. Hoima regional referral hospital
    0. Cancel`

    res.send(response)

  } 

  //Mbarara rrfh

   else if (text == '1*2*1') {
    // Business logic for public mbarara rrf region response
    let response = `CON Mbarara hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '1*2*1*1') {
    // Business logic for public mbarara rrf region response
    let response = `CON Mbarara hospital location

    1. Mbarara, Uganda`

    res.send(response)

  } 

  else if (text == '1*2*1*2') {
    // Business logic for public mbarara rrf region response
    let response = `CON Mbarara hospital services

    . HIV Clinic
    . Maternal and Child Health Unit
    . General OPD
    . Eye clinic
    . Psychiatry Wing
    . Physiotherapy unit`

    res.send(response)

  }

  else if (text == '1*2*1*0') {
    // Business logic for public mbarara rrf region response
    let response = `END Exiting`

    res.send(response)

  } 

//Hoima rrfh

else if (text == '1*2*2') {
    // Business logic for public Hoima rrf region response
    let response = `CON Hoima regional referral hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '1*2*1*1') {
    // Business logic for public Hoima rrf region response
    let response = `CON Hoima regional referral hospital location

    1. Hoima, Uganda`

    res.send(response)

  } 

  else if (text == '1*2*1*2') {
    // Business logic for public hoima rrf region response
    let response = `CON Mbarara regional referral hospital services

    . HIV Clinic
    . Maternal and Child Health Unit
    . General OPD
    . Eye clinic
    . Psychiatry Wing
    . Physiotherapy unit`

    res.send(response)

  }

  else if (text == '1*2*1*0') {
    // Business logic for public mbarara rrf region response
    let response = `END Exiting`

    res.send(response)

  }




  else if (text == '1*2*2') {
    // Business logic for public Hoima rrf region response
    let response = `CON Choose a hospital you want to view

    1. Apac hospital`

    res.send(response)

  } 

  else if (text == '1*2*0') {
    // Business logic for public exit response
    let response = `CON END`

    res.send(response)

  } 






  else if (text == '2*1') {
    // Business logic for private central region response
    let response = `CON Choose a hospital you want to view

    1. CoRSU hospital
    2. Mildmay health center`

    res.send(response)

  } 

  else if (text == '2*2') {
    // Business logic for private western region response
    let response = `CON Choose a hospital you want to view

    1. CoRSU hospital
    2. Mildmay health center`

    res.send(response)

  } 

  else if (text == '2*3') {
    // Business logic for private eastern region response
    let response = `CON Choose a hospital you want to view

    1. CoRSU hospital
    2. Mildmay health center`

    res.send(response)

  } 

  else if (text == '2*4') {
    // Business logic for private northern region response
    let response = `CON Choose a hospital you want to view

    1. CoRSU hospital
    2. Mildmay health center`

    res.send(response)

  } 

  else if (text == '2*6') {
    // Business logic for private exit response
    let response = `END Exiting`

    res.send(response)

  } 

  else {

    res.status(400).send('Bad request!')

  }

})

app.listen(port, () => {

  console.log(`Server running on port ${port}`)

})