import React from 'react';
import dashingScreenshot from '../../../../assets/Dashing_screenshot.png'
import github_icon from '../../../../assets/github_icon.png'
import external_link_icon from '../../../../assets/www_web_icon.png'
import '../../../../css/MyProject1.css'

const MyProject1 = () => {
  return (
    <div className='projectDiv'>
      <div className='projectLeftDiv'>
        <img src={dashingScreenshot} alt=''/>
      </div>
      <div className='projectRightDiv'>
        <div className='projectTitle'>
          <h2><a href='https://aqueous-falls-38921.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Dashing</a></h2>
        </div>

        <div className='projectDescription'>
          <p>Don't want to spend your entire day waiting in a salon? Let Dashing come to you! </p>
          <p>Brought to you by JB INC., Dashing is the online destination for bringing together beauty & wellness professionals and servicing their clients in the comfort of their own homes. Our talented licensed freelance professionals can showcase their work and connect with new & exisiting clients, all while building their business. Our clients can search for providers in their area or by the service they need and book an appointment!</p>
          <p>Explore Dashing today!</p>
        </div>

        <div className='projectLanguages'>
          <ul>
            <li>Redux</li>
            <li>React</li>
            <li>Express</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className='projectIcons'>
          <a href='https://github.com/isaink/dashing/tree/nielene_deployTest' target='_blank' rel='noopener noreferrer' id='img_github'><img src={github_icon} alt=''/></a>
          <a href='https://aqueous-falls-38921.herokuapp.com/' target='_blank' rel='noopener noreferrer' id='img_external_link'><img src={external_link_icon} alt=''/></a>
        </div>

      </div>
    </div>
  )
}

export default MyProject1;


//
