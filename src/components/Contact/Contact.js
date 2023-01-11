// import Loader from 'react-loaders'
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const conatctTextArr = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
  const myLocation = [12.526951907300955, 78.19708707547795]
  const form = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

    emailjs
      .sendForm(
        'service_8629api',
        'template_qlh1s84',
        form.current,
        '_ms3L02FPjJmjl2lZ'
      )
      .then(
        () => {
          alert('MESSAGE SENT!!')
          window.location.reload(false)
        },
        () => {
          alert('Message NOT Sent,Please Try Again!!')
          window.location.reload(false)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="contactheading">
            <AnimatedLetters
              lettersClassName={letterClass}
              lettersArray={conatctTextArr}
              lettersIndex={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name.."
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email.."
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject.."
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message..."
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Krishnagiri
          <br />
          Tamil Nadu, 635001
          <br />
          India
          <br />
          <span>Kishore Anand Venkatarajulu</span>
          <span>kishoreanand430@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={myLocation} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={myLocation}>
              <Popup>Kishore Lives Here, and says HI!</Popup>
            </Marker>
          </MapContainer>
        </div>
        {/* <Loader type="pacman" /> */}
      </div>
    </>
  )
}

export default Contact
