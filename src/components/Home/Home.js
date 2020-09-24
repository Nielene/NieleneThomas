import React , { Component } from 'react';
import SmallIntro from './InnerComp/SmallIntro'
import AboutMe from './InnerComp/AboutMe'
import MyProjects from './InnerComp/MyProjects'
import MyOtherProjects from './InnerComp/MyOtherProjects'
import ContactMe from './InnerComp/ContactMe'
import '../../css/Home.css'
import RightArrowUp from '../Navbar/RightArrowUp'
import do_great_things_unsplash from '../../assets/jantine-doornbos-xt9tb6oa42o-unsplash.jpg'


class Home extends Component {

  render() {
    return (
      <div className='Home_and_ArrowUp_Div'>
        <div className='homeDiv'>

          <div id='smallIntro_AnchorTag' className='homeComponent'>
          </div>

          <div className='smallIntro_background_image' id='smallIntro_background_image' style={{backgroundImage: "url(" + do_great_things_unsplash + ")"}}>
            <div id='smallIntro' className='homeComponent' >
              < SmallIntro />
            </div>
          </div>

          <div id='aboutMe_AnchorTag' className='homeComponent' >
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
