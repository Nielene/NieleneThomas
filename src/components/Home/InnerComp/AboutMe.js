import React , { Component } from 'react';
import '../../../css/AboutMe.css'
import myGithubPicture from '../../../assets/myGithubPicture.jpeg'

class AboutMe extends Component {
  render() {
    return (
      <div className = 'aboutMeDiv'>

        <div className='title_and_line'>
          <div className='compTitle'>
            <h1>ABOUT ME</h1>
          </div>

          <div className='line1'>
            <hr />
          </div>
        </div>

          <div className='belowHeading'>

            <div className='leftSide'>
              <div className='paragraphs'>
                <p>
                  Hi. I&apos;ve been a FullStack Web Developer since 2018. Building my skills on my own and through <a href="https://twitter.com/joinpursuit?lang=en" target='_blank' rel='noopener noreferrer'> Pursuit </a> has been fun! See the progress!
                </p>
                <p>
                  Here are the technologies I've been working with:
                </p>
              </div>

              <div className='ulListsDiv'>
                <ul>
                  <li>HTML5 & CSS3 &nbsp;&nbsp;&nbsp;</li>
                  <li>JavaScript (ES6)    &nbsp;&nbsp;&nbsp;</li>
                  <li>React    &nbsp;&nbsp;&nbsp;</li>
                  <li>Redux    &nbsp;&nbsp;&nbsp;</li>
                  <li>Node.js    &nbsp;&nbsp;&nbsp;</li>
                  <li>SQL    &nbsp;&nbsp;&nbsp;</li>
                  <li>Express    &nbsp;&nbsp;&nbsp;</li>
                  <li>PostgreSql Database    &nbsp;&nbsp;&nbsp;</li>
                  <li>Git</li>
                </ul>
              </div>

            </div>

            <div className='rightSide'>
              <div className='rightSideImgDiv'>
                <img src= {myGithubPicture} alt='' />
              </div>
            </div>

          </div>


      </div>
    )
  }

}

export default AboutMe;
