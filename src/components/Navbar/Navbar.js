import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import arrowUp from '../../assets/double_arrow_up.png'
import '../../css/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className='nav'>

        <div className='nav_nameDiv'>
          <div>
            <h2> <a href='#smallIntro'> NieleneThomas </a></h2>
          </div>
        </div>

        <div className='nav_liListDiv'>

          <div>
            <li>
              <p><a href='#aboutMe'> About Me </a></p>
            </li>
          </div>

          <div>
            <li>
              <p><a href='#myProjects'> Projects </a></p>
            </li>
          </div>

          <div>
            <li>
              <p><a href='#contactMe'> Contact Me </a></p>
            </li>
          </div>

          <div>
            <li>
              <p><a href='https://resume.creddle.io/resume/8agulr0be45' target='_blank' rel='noopener noreferrer'> Resume </a></p>
            </li>
          </div>

        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar);
