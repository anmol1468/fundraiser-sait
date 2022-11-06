import React from 'react'
import '../../index.scss'
import Option from '../Option/Option'

function Register() {
  return (
    <div className='register'>
      <h2>Register for the Zumba class</h2>
      <div className="register__options">
        <Option num={"1"} description={"Click on the link below, donate to our event using Eventbrite and then show us the eticket (or the email) to get entry"} link={"https://www.eventbrite.ca/e/zumba-night-tickets-462486628957"} />
        <Option num={"2"} description={"Click the link below to reserve a spot and donate at location when you arrive."} link={"https://www.eventbrite.ca/e/zumba-night-tickets-462488604867"} />
      </div>
    </div>
  )
}

export default Register