



  //public
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
