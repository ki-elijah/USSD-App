const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {

  res.send('This is ussd app for hospital information system')

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

  else if (text == '1*1*2*0') {
    // Business logic for public Mengo hospital services response
    let response = `END Exiting`

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
    let response = `END Mbarara hospital location

    1. Mbarara, Uganda`

    res.send(response)

  } 

  else if (text == '1*2*1*2') {
    // Business logic for public mbarara rrf region response
    let response = `END Mbarara hospital services

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

  else if (text == '1*2*2*1') {
    // Business logic for public Hoima rrf region response
    let response = `END Hoima regional referral hospital location

    . Main Stree, Hoima, Uganda`

    res.send(response)

  } 

  else if (text == '1*2*2*2') {
    // Business logic for public hoima rrf region response
    let response = `END Hoima regional referral hospital services

    . Dental
    . Eye
    . Gynaecology
    . General medicine
    . Paediatrics
    . ENT services
    . ART
    . Diabetic
    . Hypertensive
    . TB`

    res.send(response)

  }

  else if (text == '1*2*2*0') {
    // Business logic for public mbarara rrf region response
    let response = `END Exiting`

    res.send(response)

  }



  //public
  //eastern
  //1/3



  else if (text == '1*3') {
    // Business logic for public eastern region response
    let response = `CON Choose a hospital you want to view

    1. Jinja regional referral hospital
    2. Moroto regional referral hospital
    0. Cancel`

    res.send(response)

  } 

  //Jinja rrfh

   else if (text == '1*3*1') {
    // Business logic for public jinja rrf region response
    let response = `CON Jinja regional referral hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '1*3*1*1') {
    // Business logic for public jinja rrf region response
    let response = `END Jinja regional referral hospital location

    . Center of Jinja, Uganda`

    res.send(response)

  } 

  else if (text == '1*3*1*2') {
    // Business logic for public jinja rrf region response
    let response = `END Jinja regional referral hospital services

    . Emergency / Trauma Medicine
    . General Medicine
    . Intensive Care
    . Obstetrics & Gynaecology
    . General Surgery
    . HIV/AIDs
    . Infectious Diseases
    . Acute – Internal Medicine
    . Paediatrics
    . Public Health
    . Dental
    . Opticians
    . Orthopaedic Surgery
    . Psychiatry`

    res.send(response)

  }

  else if (text == '1*3*1*0') {
    // Business logic for public jinja rrf region response
    let response = `END Exiting`

    res.send(response)

  } 

//Moroto rrh

else if (text == '1*3*2') {
    // Business logic for public Moroto regional referral Hospital response
    let response = `CON Moroto regional referral hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '1*3*2*1') {
    // Business logic for public Moroto regional referral Hospital response
    let response = `END Moroto regional referral hospital location

    . Moroto, Uganda
    . Northeastern Uganda`

    res.send(response)

  } 

  else if (text == '1*3*2*2') {
    // Business logic for public Moroto regional referral hospital response
    let response = `END Moroto regional referral hospital services

    . surgical ward
    . Medical ward
    . Maternity ward
    . Paediatric ward
    . Operating Theatre
    . Private wing
    . Pathology wing
    . Outpatient department`

    res.send(response)

  }

  else if (text == '1*3*2*0') {
    // Business logic for public Moroto regional referral hospital response
    let response = `END Exiting`

    res.send(response)

  }



  //public
  //northern
  //1/4



  else if (text == '1*4') {
    // Business logic for public northern region response
    let response = `CON Choose a hospital you want to view

    1. Arua regional referral hospital
    2. Gulu regional referral hospital
    0. Cancel`

    res.send(response)

  } 

  //Jinja rrfh

   else if (text == '1*4*1') {
    // Business logic for public Arua rrf region response
    let response = `CON Arua regional referral hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '1*4*1*1') {
    // Business logic for public Arua rrf region response
    let response = `END Arua regional referral hospital location

    . City of Arua
    . West Nile sub-region`

    res.send(response)

  } 

  else if (text == '1*4*1*2') {
    // Business logic for public Arua rrf region response
    let response = `END Arua regional referral hospital services

    . Rehabilitative health care
    . Tertiary training
    . Continuing professional Development (CPD).`

    res.send(response)

  }

  else if (text == '1*4*1*0') {
    // Business logic for public Arua rrf region response
    let response = `END Exiting`

    res.send(response)

  } 

//Gulu rrh

else if (text == '1*4*2') {
    // Business logic for public Gulu regional referral Hospital response
    let response = `CON Gulu regional referral hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '1*4*2*1') {
    // Business logic for public Gulu regional referral Hospital response
    let response = `END Gulu regional referral hospital location

    . Northern Ugandan
    . City of Gulu`

    res.send(response)

  } 

  else if (text == '1*4*2*2') {
    // Business logic for public Gulu regional referral hospital response
    let response = `END Gulu regional referral hospital services

    . Obstetrics/Gynaecology
    . Internal medicine
    . Paediatrics
    . Ophthalmology
    . Surgery/Orthopaedics
    . Mother and Child Clinics
    . Community Health
    . ENT
    . Palliative Care
    . Mental Health
    . Physiotherapy`

    res.send(response)

  }

  else if (text == '1*4*2*0') {
    // Business logic for public Gulu regional referral hospital response
    let response = `END Exiting`

    res.send(response)

  }



   //private
  //central
  //2/1

  else if (text == '2*1') {
    // Business logic for private central region response
    let response = `CON Choose a hospital you want to view

    1. Kampala hospital
    2. Nakasero hospital`

    res.send(response)

  } 


  //private
  //central
  //1/1/2
  //Kampala hospital

   else if (text == '2*1*1') {
    // Business logic for private Kampala hospital response
    let response = `CON Kampala hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '2*1*1*1') {
    // Business logic for private Kampala hospital location response
    let response = `END Kampala hospital

    . Kampala, Uganda`

    res.send(response)

  } 

  else if (text == '2*1*1*2') {
    // Business logic for private Kampala hospital services response
    let response = `CON Kampala hospital services

    . Anaesthesiology
    . Haematology
    . Ophthalmology
    . Radiology and Imaging
    . Paediatrics
    . Surgery: General
    . Neural
    . Plastic`

    res.send(response)

  } 

  else if (text == '2*1*1*0') {
    // Business logic for private Kampala hospital services response
    let response = `END Exiting`

    res.send(response)

  } 


  //public
  //central
  //2/2/2
  //Nakasero hospital


  else if (text == '2*1*2') {
    // Business logic for private Nakasero hospital response
    let response = `CON Nakasero hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '2*1*2*1') {
    // Business logic for private Nakasero hospital location response
    let response = `END Nakasero hospital Location

    . Plot 14A Akii Bua Road
    . Nakasero, P.O.Box 25261
    . Kampala, Uganda`

    res.send(response)

  } 

  else if (text == '2*1*2*2') {
    // Business logic for private Nakasero hospital services response
    let response = `END Nakasero hospital services

    . Internal medicine
    . Neurology
    . Surgery
    . Dermatology
    . Ear, nose & throat
    . Haematology
    . Dental
    . Radiology
    . OBS % Gynae
    . Nephrology
    . Ophthalmology
    . Orthopedics`

    res.send(response)

  } 

   else if (text == '2*1*2*0') {
    // Business logic for private Nakasero hospital cancel response
    let response = `END Exiting`

    res.send(response)

  } 



  //private
  //western
  //2/2



  else if (text == '2*2') {
    // Business logic for private western region response
    let response = `CON Choose a hospital you want to view

    1. Whisper’s magical children’s hospital and maternity
    2. Holy innocents children’s hospital
    0. Cancel`

    res.send(response)

  } 

  //Whispers rrfh

   else if (text == '2*2*1') {
    // Business logic for private Whisper’s magical children’s hospital response
    let response = `CON Whisper’s magical children’s hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '2*2*1*1') {
    // Business logic for private Whisper’s magical children’s hospital region response
    let response = `END Whisper’s magical children’s hospital location

    1. Mbarara, Uganda`

    res.send(response)

  } 

  else if (text == '2*2*1*2') {
    // Business logic for private Whisper’s magical children’s hospital region response
    let response = `END Whisper’s magical children’s hospital services

    . Consultations
    . Emergency services
    . Operating theatres
    . Treatment for burns and scalds
    . Sickle cell diagnosis
    . Nutritional ward
    . Blood transfusions
    . Defibrillator`

    res.send(response)

  }

  else if (text == '2*2*1*0') {
    // Business logic for private Whisper’s magical children’s hospital region response
    let response = `END Exiting`

    res.send(response)

  } 

//St. Augustine community health center

else if (text == '2*2*2') {
    // Business logic for private St. Augustine community health center response
    let response = `CON St. Augustine community health center

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '2*2*2*1') {
    // Business logic for private St. Augustine community health centerl response
    let response = `END St. Augustine community health center location

    . Ntare Road
    . Opp. Ntare School
    . Mbarara Municipality
    . P.O. Box 1184
    . Mbarara, Uganda`

    res.send(response)

  } 

  else if (text == '2*2*2*2') {
    // Business logic for private St. Augustine community health center response
    let response = `END St. Augustine community health center services

    . General medical care
    . Post abortion care
    . Family planing
    . HIV/AIDS counseling & testing
    . Antenatal & delivery
    . Ultralsound scan`

    res.send(response)

  }

  else if (text == '2*2*2*0') {
    // Business logic for private St. Augustine community health center response
    let response = `END Exiting`

    res.send(response)

  }





  //private
  //northern
  //2/4



  else if (text == '2*4') {
    // Business logic for private northern region response
    let response = `CON Choose a hospital you want to view

    1. St. Mary’s Hospital Lacor
    2. Gulu regional referral hospital
    0. Cancel`

    res.send(response)

  } 

  //St. Mary’s Hospital Lacor

   else if (text == '2*4*1') {
    // Business logic for private St. Mary’s Hospital Lacor response
    let response = `CON St. Mary’s Hospital Lacor

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '2*4*1*1') {
    // Business logic for private St. Mary’s Hospital Lacor response
    let response = `END St. Mary’s Hospital Lacor location

    . P.O.Box 180
    . Gulu, Uganda`

    res.send(response)

  } 

  else if (text == '2*4*1*2') {
    // Business logic for private St. Mary’s Hospital Lacor response
    let response = `END St. Mary’s Hospital Lacor services

    . Inpatients Departments
    . Outpatients Clinics
    . Private Services
    . Paramedical Services`

    res.send(response)

  }

  else if (text == '2*4*1*0') {
    // Business logic for private St. Mary’s Hospital Lacor response
    let response = `END Exiting`

    res.send(response)

  } 

//Gulu independent hospital

else if (text == '2*4*2') {
    // Business logic for private Gulu independent hospital response
    let response = `CON Gulu independent hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '2*4*2*1') {
    // Business logic for private Gulu independent hospital response
    let response = `END Gulu independent hospital location

    . Northern Ugandan
    . Gulu, Uganda`

    res.send(response)

  } 

  else if (text == '2*4*2*2') {
    // Business logic for private Gulu independent hospital response
    let response = `END Gulu independent hospital services

    . Laundry & dry cleaning
    . Cosmetic surgery
    . IVF & fertility clinic
    . Laparoscopy & endoscopy
    . Arthroscopy & Orthopaedic
    . DNA paternity test
    . Online payment
    . Online bookings
    . 24 hour service`

    res.send(response)

  }

  else if (text == '2*4*2*0') {
    // Business logic for private Gulu independent hospital response
    let response = `END Exiting`

    res.send(response)

  }



  //private
  //eastern
  //1/3



  else if (text == '2*3') {
    // Business logic for private eastern region response
    let response = `CON Choose a hospital you want to view

    1. Nile international hospital
    0. Cancel`

    res.send(response)

  } 

  //Nile international hospital

   else if (text == '2*3*1') {
    // Business logic for private Nile international hospital response
    let response = `CON Nile international hospital

    1. Location
    2. services
    0. Cancel`

    res.send(response)

  } 

  else if (text == '2*3*1*1') {
    // Business logic for private Nile international hospital response
    let response = `END Nile international hospital location

    . Jinja town
    . Jinja Uganda
    . Plot 2-16 Walukuba Jinja-Uganda`

    res.send(response)

  } 

  else if (text == '2*3*1*2') {
    // Business logic for private Nile international hospital response
    let response = `END Nile international hospital services

    . Theater
    . Eye clinic diagnistics
    . Endoscopy
    . CT scan
    . Eye clinic theater
    . Laboratory service
    . Panoramic X-ray
    . ICU
    . Neonatal ICU
    . Antenatal care`

    res.send(response)

  }

  else if (text == '2*3*1*0') {
    // Business logic for private Nile international hospital response
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