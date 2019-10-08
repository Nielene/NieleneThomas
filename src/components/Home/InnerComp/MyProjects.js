import React , { Component } from 'react';
import dashingScreenshot from '../../../assets/Dashing_screenshot.png';
import reredditScreenshot from '../../../assets/re_reddit_screenshot_2.png';
import dashingGif from '../../../assets/ezgif.com-video-to-gif.gif'
import reredditGif from '../../../assets/re_reddit_screenshot_2.png'
import github_icon from '../../../assets/github_icon.png';
import external_link_icon from '../../../assets/www_web_icon.png';
import mainProjects from './MyProjectsData/MainProjects.json';
import '../../../css/MyProjects.css'


const screenshots = {
  1: dashingScreenshot,
  2: reredditScreenshot,
}
const gifs = {
  1: dashingGif,
  2: reredditGif,
}


class MyProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onMouseOver: false,
      onMouseOut: true,
    }
  }

  onMouseOver() {
    this.setState({
      onMouseOver: true,
      onMouseOut: false
    })
  }
  onMouseOut() {
    this.setState({
      onMouseOver: false,
      onMouseOut: true
    })
  }

  handleOnMouseOver = (e) => {
    this.setState ({
      onMouseOver: e.target.onMouseOver,
      [e.target.name]: e.target.value
    })

    return gifs.map( (gif, index) => {
      return (
        <div key={index}>
          <img src={gif[index]} alt=''>
          </img>
        </div>
      )
    })

  }

  handleOnMouseOut = (e) => {
    this.setState ({
      onMouseOut: e.target.onMouseOut
    })

    return screenshots.map((screenshot, index) => {
      return (
        <div key={index}>
          <img src={screenshot[index]} alt=''>
          </img>
        </div>
      )
    })

  }

  projects = () => {
    return mainProjects.map( project => {
      return (
        <div key={project.id} className={project.className}>   {/* {do i need a className in json file?} */ }

          <div className='projectDiv'>

            <div className='projectLeftDiv'>
              <img src={screenshots[project.id]} alt=''></img>
            </div>


            {
              /* {

              <div className='projectLeftDiv'>
              <a href={project.website} onMouseOver={this.handleOnMouseOver()}>
              <img src={screenshots[project.id]} alt=''>
              </img>
              </a>
              </div>

              <div className='projectLeftDiv'
              onMouseOver={this.handleOnMouseOver()}
              onMouseOut={this.handleOnMouseOut()}>
              onMouseOver()
              : <img src={gifs[project.id]} alt='' ></img>
              ? <img src={screenshots[project.id]} alt=''></img>
              } */

                /* {
                <a href ={project.website} id='name'>
                <img
                onMouseOver ="this.src={gifs[project.id]};"
                onMouseOut= "this.src={screenshots[project.id]};"
                src={screenshots[project.id]} alt=''/>
                </a>
                } */

                /*{

                </div>
                }*/
          }

            <div className='projectRightDiv'>

              <div className='projectTitle'>
                <h2><a href={project.webside} target='_blank' rel='noopener noreferrer'>{project.title}</a></h2>
              </div>
s
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
                        <li><b>{language}</b></li>
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
