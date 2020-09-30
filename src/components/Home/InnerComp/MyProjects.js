import React , { Component } from 'react';
import dashingScreenshot from '../../../assets/Dashing_Screenshot.png';
import reredditScreenshot from '../../../assets/re_reddit_screenshot.png';
import dashingGif from '../../../assets/ezgif.com-crop.gif'
import reredditGif from '../../../assets/re_reddit_screenshot.png'
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
      displayGif: false,
    }
  }


  handleOnMouseOver = (e) => {
    this.setState ({
      displayGif: true
    })
    // console.log('hello');
  }

  handleOnMouseOut = (e) => {
    this.setState ({
      displayGif: false
    })
  }


  projects = () => {
    return mainProjects.map( project => {
      return (
        <div key={project.id} className={project.className}>   {/* {do i need a className in json file?} */ }

            <div className='projectLeftDiv'
              onMouseOver={this.handleOnMouseOver}
              onMouseOut={this.handleOnMouseOut}>

              {this.state.displayGif
                ? <img src={screenshots[project.id]} alt='gif of project'></img>
                : <img src={screenshots[project.id]} alt='screenshot of project'></img> }

            </div>

            <div className='projectRightDiv'>

              <div className='projectTitle'>
                <h2><a href={project.webside} target='_blank' rel='noopener noreferrer'>{project.title}</a></h2>
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={"#multiCollapseExample2" + project.id} aria-expanded="false" aria-controls={"multiCollapseExample2" + project.id}>&hellip;</button>

              </div>

              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id={"multiCollapseExample2" + project.id}>
                    <div className="card card-body">

                      <div className='projectDescription'>
                        {project.description.map ((line, index) => {
                          return (
                            <div key={index} className='eachLine'>
                              <p> {line} </p>
                            </div>
                          )
                        })}
                      </div>

                      <div className='projectIcons'>
                        <a href={project.github} target='_blank' rel='noopener noreferrer' id='img_github'><img src={github_icon} alt=''/></a>
                        <a href={project.website} target='_blank' rel='noopener noreferrer' id='img_external_link'><img src={external_link_icon} alt=''/></a>
                      </div>

                    </div>
                  </div>
                </div>
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


            </div>
        </div>
      )
    })
  }



  render() {
    return (
      <div>

        <div className='title_and_line'>

          <div className='line1'>
            <hr />
          </div>

          <div className='compTitle'>
            <h1>MY PROJECTS</h1>
          </div>

          <div className='line2'>
            <hr />
          </div>


        </div>

        <div className='below_myprojects_heading'>
          <div className='toggle_all_descriptions_div'>
            <button className="btn btn-primary" id='toggle_all_descriptions' type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle projects</button>
          </div>

          <div className='my_projects_div'>
            {this.projects()}
          </div>
        </div>

      </div>
    )
  }

}

export default MyProjects;
