import React , { Component } from 'react';
import '../../../css/SmallIntro.css';
import do_great_things_unsplash from '../../../assets/do_great_things_unsplash.jpg'

class SmallIntro extends Component {
  render() {
    return (
      <div className='smallIntro_background_image' style={{backgroundImage: "url(" + do_great_things_unsplash + ")"}}>
        <div className='smallIntroDiv'>

          <div className='name'>
            <h1>Nielene Thomas.</h1>
          </div>

          <div className='career'>
            <h1>Full-Stack Web Developer</h1>
          </div>

          <div className='shortTalk'>
            <p>I love good work and good people. </p>
          </div>

        </div>
      </div>

    )
  }

}

export default SmallIntro;
