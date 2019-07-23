import React , { Component } from 'react';
import '../../../css/SmallIntro.css'

class SmallIntro extends Component {
  render() {
    return (
        <div>

          <div className='greetingHi'>
            <p>Hi! My name is </p>
          </div>

          <div className='name'>
            <h1>Nielene Thomas.</h1>
          </div>

          <div className='career'>
            <h1>I'm a Full-Stack Web Developer.</h1>
          </div>

          <div className='shortTalk'>
            <p>I'm a Full-stack Web Developer from New York, NY who loves creating dynamic websites and applications. </p>
          </div>

        </div>

    )
  }

}

export default SmallIntro;
