import React , { Component } from 'react';
import MyProject1 from './MyProjects/MyProject1'
import MyProject2 from './MyProjects/MyProject2'
// import dashingScreenshot from '../../../assets/Dashing_screenshot.png'

import '../../../css/MyProjects.css'

class MyProjects extends Component {
  render() {
    return (
      <div>
        <div className='title_and_line'>
          <div className='compTitle'>
            <h1>MY PROJECTS</h1>
          </div>

          <div className='line2'>
            <hr />
          </div>
        </div>

        <div className='MyProjectImportComponent'>
          <MyProject1 />
        </div>

        <div className='MyProjectImportComponent'>
          <MyProject2 />
        </div>

      </div>
    )
  }

}

export default MyProjects;
