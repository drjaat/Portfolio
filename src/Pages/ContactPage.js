import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone.svg'
import email from '../img/emailme.svg'
import Tittle from '../Components/Tittle'

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={'Contact Me'} span={'Contact Me'} />
      </div>
      <div className="ContactPage">
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={'+91 7009430268'}
            text2={'+91 9897633716'}
            title={'Phone'}
          />
          <ContactItem
            icon={email}
            text1={'ranadhruvrana@gmail.com'}
            text2={''}
            title={'Email'}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
