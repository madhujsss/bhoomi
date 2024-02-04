import React from 'react'
import '../Style/Style.css'
import logo from '../Constants/logo.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div>
      <img className='logo' width={150} height={100} alt='logo' src={logo} />
      </div>
      <div className='home'>
      <h1 >BHOOMI IAS & KAS STUDY CIRCLE - KOPPAL</h1>
      <h4>Address : Near Ashok Circle, besides sahitya bhavana, opposite to SFI office Kinnal road Koppal</h4>
      </div>
      <div className='contact'>
        <h2>Contact Numbers</h2>
        <ul className='number'>
            <li>6364147206</li>
            <li>9902612206</li>
            <li>9902612766</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
