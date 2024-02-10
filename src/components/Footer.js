import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
<section className='footer-container'>
    <p>All Rights Reversed 2024 &copy; </p>
    <section className='footer-icons'>
    <a href='#'><FaInstagramSquare/></a>
    <a href='#'><FaGithub/></a>
    <a href='#'><FaFacebook/></a>
    <a href='#'><FaTwitter/></a>
    </section>
    
</section>

    </footer>
  )
}

export default Footer