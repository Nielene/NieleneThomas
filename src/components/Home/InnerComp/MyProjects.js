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
      imageDiv: '',
      displayGif: false,
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
      displayGif: true
      // onMouseOver: e.target.onMouseOver,
      // [e.target.name]: e.target.value
    })
    console.log('hello');

    // return gifs.map( (gif, index) => {
    //   return (
    //     <div key={index}>
    //       <img src={gif[index]} alt=''>
    //       </img>
    //     </div>
    //   )
    // })

  }

  handleOnMouseOut = (e) => {
    this.setState ({
      displayGif: false
      // onMouseOut: e.target.onMouseOut
    })

    // return screenshots.map((screenshot, index) => {
    //   return (
    //     <div key={index}>
    //       <img src={screenshot[index]} alt=''>
    //       </img>
    //     </div>
    //   )
    // })

  }

  screenshot_GifToggle = () => {
    this.setState ({
      displayGif: true
    })
    if (this.state.displayGif) {
      return gifs.map((gif, index) => {
        console.log('GIFS.MAP', gifs, gif, index);
        return (
          <div className='projectLeftDiv'>
            <img src={gifs[index]} alt=''></img>
          </div>
        )
      })
    }
     else {
      return screenshots.map((screenshot, index) => {
        console.log('screenshots.map', screenshots, screenshot, index);
        return (
          <div className='projectLeftDiv'>
            <img src={screenshots[index]} alt=''></img>
          </div>
        )
      })
    }
  }

  gif_ScreenshotToggle = () => {
    this.setState ({
      displayGif: false
    })
    if (!this.state.displayGif) {
      return screenshots.map((screenshot, index) => {
        return (
          <div className='projectLeftDiv'>
            <img src={screenshots[index]} alt=''></img>
          </div>
        )
      })
    }
    else {
      return gifs.map((gif, index) => {
        // console.log("gifs", gifs, gifs[index]);
        return (
          <div className='projectLeftDiv'>
            <img src={gifs[index]} alt=''></img>
          </div>
        )
      })
    }
  }

  // displayGifHere = () => {
  //   return mainProjects.map((project, index) => {
  //
  //     return (
  //       <div className='projectLeftDiv'>
  //         <h1>Put Gif Here</h1>
  //       </div>
  //     )
  //   })
  // }

  projects = () => {
    return mainProjects.map( project => {
      return (
        <div key={project.id} className={project.className}>   {/* {do i need a className in json file?} */ }

          <div className='projectDiv'
            >

            <div className='projectLeftDiv'
              onMouseOver={this.handleOnMouseOver}
              onMouseOut={this.handleOnMouseOut}>

              {!this.state.displayGif
                ? <img src={gifs[project.id]} alt=''></img>
                : <img src={screenshots[project.id]} alt=''></img> }


            </div>




            {
              /* {



              <img src={screenshots[project.id]} alt=''
              onMouseOver={this.displayGifHere}>
              </img>


              <img src={screenshots[project.id]} alt=''
              onMouseOver={this.screenshot_GifToggle}
              onMouseOut={this.gif_ScreenshotToggle}>
              </img>

              <div className='projectLeftDiv'>
              <img src={screenshots[project.id]} alt=''
              onMouseOver={this.screenshot_GifToggle}
              onMouseOut={this.gif_ScreenshotToggle}>
              </img>

              {this.screenshot_GifToggle}
              </div>


              <div className='projectLeftDiv'>
                {this.screenshot_GifToggle}
              </div>

              <img src={screenshots[project.id]} alt=''></img>

              <div className='projectLeftDiv'
              onMouseOver={this.handleOnMouseOver}
              name='imageDiv'
              value={this.state.imageDiv}>
              <img src={screenshots[project.id]} alt=''></img>
              </div>

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
