import React from 'react'
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <footer>
        <div className='fot check'>
            <h1><a className='light' href="https://afobajedev.netlify.app">Afobaje</a></h1>
        </div>
        <div className='fot'>
            <h3>Follow me on all social handles</h3>
            <ul className='super'>
                <li><a className='light' href="https://github.com/afobaje" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a className='light' href="https://linkedin.com/in/ikukoyi-david" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a className='light' href="https://twitter.com/davidblaqq" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a className='light' href="https://afobaje.hashnode.dev" target="_blank" rel="noopener noreferrer">Afobaje's blog</a></li>
            </ul>
        </div>
        <div className='fot'>
            <h3>
                Contact Us
            </h3>
            <ul className='super'>
                <li><a className='light' href="mailto:ikukoyidave@gmail.com">Mail</a></li>
                <li><a className='light' href="tel:+2348132735880">Call me</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer