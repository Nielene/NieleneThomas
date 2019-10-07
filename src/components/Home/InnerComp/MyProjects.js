import React , { Component } from 'react';
import dashingScreenshot from '../../../assets/Dashing_screenshot.png';
import reredditScreenshot from '../../../assets/re_reddit_screenshot_2.png';
import github_icon from '../../../assets/github_icon.png';
import external_link_icon from '../../../assets/www_web_icon.png';
import mainProjects from './MyProjectsData/MainProjects.json';
import '../../../css/MyProjects.css'


const screenshots = {
  1: dashingScreenshot,
  2: reredditScreenshot,
}


class MyProjects extends Component {

  projects = () => {
    return mainProjects.map( project => {
      return (
        <div key={project.id} className={project.className}>

          <div className='projectDiv'>

            <div className='projectLeftDiv'>
              <img src={screenshots[project.id]} alt=''/>
            </div>

            <div className='projectRightDiv'>

              <div className='projectTitle'>
                <h2><a href={project.webside} target='_blank' rel='noopener noreferrer'>{project.title}</a></h2>
              </div>

              <div className='projectDescription'>
                {project.description.map ((line, index) => {
                  return (
                    <div key={index} className='eachLine'>
                      <p> {line} </p>
                    </div>
                  )
                })}
              </div>

              <div className='projectLanguages'>
                <ul>
                  {project.languages.map( (language, index) => {
                    return (
                      <div key={index} className='eachLanguage'>
                        <li>{language}</li>
                      </div>
                    )
                  })}
                </ul>
              </div>

              <div className='projectIcons'>
                <a href={project.github} target='_blank' rel='noopener noreferrer' id='img_github'><img src={github_icon} alt=''/></a>
                <a href={project.website} target='_blank' rel='noopener noreferrer' id='img_external_link'><img src={external_link_icon} alt=''/></a>
              </div>

            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>

        <div className='title_and_line'>

          <div className='compTitle'>
            <h1>MY PROJECTS</h1>
          </div>

          <div className='line1'>
            <hr />
          </div>

        </div>

        {this.projects()}

      </div>
    )
  }

}

export default MyProjects;
