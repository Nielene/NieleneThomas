import React , { Component } from 'react';
import linkedin_3_512 from '../../../assets/linkedin_3_512.png'
import github_icon from '../../../assets/github_icon.png'
import email_logo_kindpng from '../../../assets/email_logo_kindpng.png'
import '../../../css/ContactMe.css';

class ContactMe extends Component {
  state = {
    email: 'NieleneThomas@pursuit.org'
  }

  render() {
    return (
      <div>

        <div className='title_and_line'>

          <div className='compTitle'>
            <h1>CONTACT ME</h1>
          </div>

          <div className='line1'>
            <hr />
          </div>

        </div>

        <div className='quote'>
        <p>"Projects can always be improved as you improve. They are each a measure of your growth. Our lives are the biggest projects that are always in progress."</p>
        </div>


        <span className='contactMe'>
          <a href='https://github.com/Nielene' target='_blank' rel='noopener noreferrer'> <img src={github_icon} alt=''/> </a>
          <a className='contactMeByMail' href={"mailto:" + this.state.email}><img src={email_logo_kindpng} alt='' /> </a>
          <a href='https://www.linkedin.com/in/nielene/' target='_blank' rel='noopener noreferrer'> <img src={linkedin_3_512} alt=''/> </a>
        </span>


      </div>
    )
  }

}

export default ContactMe;
