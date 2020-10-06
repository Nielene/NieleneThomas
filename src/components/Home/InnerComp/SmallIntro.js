import React , { Component } from 'react';
import '../../../css/SmallIntro.css';

class SmallIntro extends Component {
  render() {
    return (
        <div className='smallIntro'>

          <div className='smallIntro_text'>
            <div className='name'>
              <h1>Nielene E. Thomas</h1>
            </div>

            <div className='career'>
              <h1>Full-Stack Web Developer</h1>
            </div>

            <div className='shortTalk'>
              <p>
                <span className='shortTalk_1'>I love good work and good </span>
                <span className='shortTalk_2'>people.</span>
              </p>
            </div>
          </div>


        </div>

    )
  }

}

export default SmallIntro;
