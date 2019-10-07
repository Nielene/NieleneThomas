import React from 'react';
import reredditScreenshot from '../../../../assets/re_reddit_screenshot_2.png'
import github_icon from '../../../../assets/github_icon.png'
import external_link_icon from '../../../../assets/www_web_icon.png'
import '../../../../css/MyProject1.css'

const MyProject2 = () => {
  return (
    <div className='projectDiv'>
      <div className='projectLeftDiv'>

        <img src={reredditScreenshot} alt=''/>




      </div>


      <div className='projectRightDiv'>

        <div className='projectTitle'>
          <h2><a href='' target='_blank' rel='noopener noreferrer'>ReReddit</a></h2>
        </div>

        <div className='projectDescription'>
          <p><b>ReReddit</b> &nbsp; is my version of the popular Reddit site!</p>
          <p>It uses an express backend and redux frontend, along with basic React/JavaScript.</p>
          <p>Login and explore some posts - or add some! Also, comment on a post, or delete your comment; subscribe to a subreddit. See your list of subscribed subreddits in a dropdown list. </p>
          <p>See for yourself.</p>
          <p>Visit my webapp!</p>
        </div>

        <div className='projectLanguages'>
          <ul>
            <li>Redux</li>
            <li>React</li>
            <li>Express</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className='projectIcons'>
          <a href='https://github.com/Nielene/ReReddit' target='_blank' rel='noopener noreferrer'><img src={github_icon} alt=''/></a>
          <a href='' target='_blank' rel='noopener noreferrer'><img src={external_link_icon} alt=''/></a>
        </div>


      </div>

    </div>
  )
}

export default MyProject2;


//
