import React from 'react'
import '../styles/footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-wrapper'>
            <div>
                <h3>What We do</h3>
                <ul>
                    <li><a href='/'>Save wildlife and wild places</a></li>
                    <li><a href='/'>Bring people closer to nature</a></li>
                </ul>
            </div>

            <div>
                <h3>Get Involved</h3>
                <ul>
                    <li><a href='/'>Become a member</a></li>
                    <li><a href='/'>Take action for wildlife</a></li>
                    <li><a href='/'>Visit</a></li>
                    <li><a href='/'>Volunteer</a></li>
                </ul>
            </div>

            <div>
                <h3>The Animal Planet</h3>
                <ul>
                    <li><a href='/'>Become a member</a></li>
                    <li><a href='/'>Take action for wildlife</a></li>
                    <li><a href='/'>Visit</a></li>
                    <li><a href='/'>Volunteer</a></li>
                </ul>
            </div>

            <div>
                <img src="./images/animal-planet-logo.jpg" alt="animal-planet-white-logo" width="80" />
            </div>
        </div>

    </div>
  )
}
