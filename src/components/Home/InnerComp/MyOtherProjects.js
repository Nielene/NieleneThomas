import React , { Component } from 'react';
import github_icon from '../../../assets/github_icon.png';
import external_link_icon from '../../../assets/www_web_icon.png';
import otherProjects from './MyProjectsData/OtherProjects.json';
import '../../../css/MyOtherProjects.css';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';


class MyOtherProjects extends Component {
  constructor() {
    super()
    this.state = {
      buttonValue: 'showMore',
    }

  }

  onSubmit = (e) => {
    e.preventDefault();
    let displayAfter = $('.displayAfter');
    let reDisplayNow = $('.reDisplayNow');

    if (this.state.buttonValue === 'showMore') {
      displayAfter.removeClass("displayAfter").addClass("reDisplayNow");

      this.setState({
        buttonValue: 'showLess',
      })

      // setTimeout( () => {
      //   displayAfter.css("display", "none")
      // }, 500);

    } else {
      reDisplayNow.removeClass("reDisplayNow").addClass("displayAfter")

      this.setState({
        buttonValue: 'showMore',
      })
    }

    // this.setState ({
    //   buttonValue : 'showLess',
    // })
  }

  projects = () => {
    return otherProjects.map( project => {
      return (
        <div key={project.id} className={project.className}>
          <div className='linkIcons'>
            <a href={project.github} target='_blank' rel='noopener noreferrer'><img src={github_icon} alt=''/></a>
            <a href={project.website} target='_blank' rel='noopener noreferrer'><img src={external_link_icon} alt=''/></a>
          </div>
          <div className='otherPro_title'>{project.title}</div>
          <div className ='otherPro_description'>{project.description}</div>
          <div className='languagesArray'>{project.languages.map((language, index) => {
            return (
              <div key={index} className='eachLanguage'>
                <p> {language} </p>
              </div>
            )
          })}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div className='title_and_line'>
          <div className='compTitle'>
            <h1>My Other Projects</h1>
          </div>

          <div className='line3'>
            <hr />
          </div>
        </div>



        <div>
          <form onSubmit={this.onSubmit} className='form'>
            <div className='mappedJsonProjects'>
              { this.projects() }
            </div>

            <div className='inputButtonDiv'>
              <a href='#myOtherProjects' >
                <input
                type='submit'
                value={this.state.buttonValue === 'showLess' ? 'Show less' : 'Show more' }
                className='inputButton'/>
              </a>
            </div>
          </form>
        </div>

      </div>
    )

  }

}


export default withRouter(MyOtherProjects);
