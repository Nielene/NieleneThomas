import React from 'react';
import { withRouter } from 'react-router-dom';
import arrowup from '../../assets/arrowup.png'
import '../../css/Navbar.css'



class RightArrowUp extends React.Component {
    state = { isHide: false };

    hideBar = () => {
       const { isHide } = this.state

       window.scrollY > this.prev ?
       !isHide && this.setState({ isHide: true })
       :
       isHide && this.setState({ isHide: false });

       this.prev = window.scrollY;
    }

    componentDidMount(){
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount(){
         window.removeEventListener('scroll', this.hideBar);
    }

    render(){
        const classHide = this.state.isHide ? 'hide' : '';
        return <div className={`arrowUpIcon ${classHide}`}><a href='#smallIntro_AnchorTag'> <img src={arrowup} alt=''/></a></div>;
    }
}


export default withRouter(RightArrowUp);
