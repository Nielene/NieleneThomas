import React , { Component } from 'react';
import SmallIntro from './InnerComp/SmallIntro'
import AboutMe from './InnerComp/AboutMe'
import MyProjects from './InnerComp/MyProjects'
import MyOtherProjects from './InnerComp/MyOtherProjects'
import ContactMe from './InnerComp/ContactMe'
import '../../css/Home.css'
import RightArrowUp from '../Navbar/RightArrowUp'
// import $ from 'jquery';


class Home extends Component {

  render() {
    return (
      <div className='Home_and_ArrowUp_Div'>
        <div className='homeDiv'>
          <div id='smallIntro' className='homeComponent' >
            < SmallIntro />
          </div>

          <div id='aboutMe' className='homeComponent' >
            < AboutMe />
          </div>

          <div id='myProjects' className='homeComponent' >
            < MyProjects />
          </div>

          <div id='myOtherProjects' className='homeComponent' >
            < MyOtherProjects />
          </div>

          <div id='contactMe' className='homeComponent' >
            < ContactMe />
          </div>

        </div>

        <div className='ArrowUp_Div_Div'>
          <div className='ArrowUp_Div'>
            <RightArrowUp />
          </div>
        </div>

      </div>
    )
  }

}

export default Home;
