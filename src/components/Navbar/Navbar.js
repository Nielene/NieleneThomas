import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/Navbar.css'


// <nav className='nav'>
//
//   <div className='nav_nameDiv'>
//     <div>
//       <h2> <a href='#smallIntro_AnchorTag'> NieleneThomas </a></h2>
//     </div>
//   </div>
//
//   <div className='nav_liListDiv'>
//
//     <div>
//       <li>
//         <p><a href='#aboutMe_AnchorTag'> About Me </a></p>
//       </li>
//     </div>
//
//     <div>
//       <li>
//         <p><a href='#myProjects'> Projects </a></p>
//       </li>
//     </div>
//
//     <div>
//       <li>
//         <p><a href='#contactMe'> Contact Me </a></p>
//       </li>
//     </div>
//
//     <div>
//       <li>
//         <p><a href='https://resume.creddle.io/resume/8agulr0be45' target='_blank' rel='noopener noreferrer'> Resume </a></p>
//       </li>
//     </div>
//
//   </div>
// </nav>


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">

          <a className="navbar-brand" href="#smallIntro_AnchorTag" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">NieleneThomas</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">

              <li className="nav-item active">
                <a className="nav-link" href="#aboutMe_AnchorTag">About Me <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#myProjects_AnchorTag">Projects</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#myOtherProjects_AnchorTag">My Other Projects</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contactMe_AnchorTag">ContactMe</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href='https://resume.creddle.io/resume/8agulr0be45' target='_blank' rel='noopener noreferrer'> Resume </a>
              </li>

            </ul>
          </div>
        </nav>


      </div>

    )
  }

}

export default withRouter(Navbar);
