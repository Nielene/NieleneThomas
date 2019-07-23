import React , { Component } from 'react';
import '../../../css/AboutMe.css'
import myGithubPicture from '../../../assets/myGithubPicture.jpeg'

class AboutMe extends Component {
  render() {
    return (
      <div>

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
                  Hi. I've been a FullStack Web Developer since 2018. Building my skills on my own and through <a href='https://twitter.com/joinpursuit?lang=en' target='_blank' rel='noopener noreferrer'> @joinpursuit </a> has been fun! See the progress!
                </p>
                <p>
                  Here are the technologies I've been working with:
                </p>
              </div>

              <div className='ulListsDiv'>
                <ul>
                  <li>JavaScript (ES6)</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>SQL</li>
                </ul>
                <ul>
                  <li>HTML5 & CSS3</li>
                  <li>Express</li>
                  <li>PostgreSql Database</li>
                  <li>Git</li>
                </ul>
              </div>

            </div>

            <div className='rightSide rightSideImgDiv'>
              <img src= {myGithubPicture} alt='' />
            </div>

          </div>


      </div>
    )
  }

}

export default AboutMe;
