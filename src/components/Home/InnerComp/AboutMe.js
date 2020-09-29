import React , { Component } from 'react';
import '../../../css/AboutMe.css'
import myGithubPicture from '../../../assets/myGithubPicture.jpeg'

class AboutMe extends Component {
  render() {
    return (
      <div className = 'aboutMeDiv'>

        <div className='title_and_line'>

          <div className='line1'>
            <hr />
          </div>

          <div className='compTitle'>
            <h1>ABOUT ME</h1>
          </div>

          <div className='line2'>
            <hr />
          </div>
        </div>

          <div className='belowHeading'>


                <div className="img_p_div">
                  <p>
                    Hi. I&apos;ve been a FullStack Web Developer since 2018. Building my skills on my own and through <a href="https://twitter.com/joinpursuit?lang=en" target='_blank' rel='noopener noreferrer'> Pursuit </a> has been fun! See the progress!
                    Here are the technologies I've been working with:
                  </p>
                  <div className='rightSideImgDiv'>
                    <img src= {myGithubPicture} alt='' />
                  </div>

                </div>

                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript (ES6)   </li>
                  <li>React   </li>
                  <li>Redux   </li>
                  <li>Node.js   </li>
                  <li>SQL   </li>
                  <li>Express   </li>
                  <li>PostgreSql Database   </li>
                  <li>Git</li>
                </ul>


          </div>


      </div>
    )
  }

}

export default AboutMe;
