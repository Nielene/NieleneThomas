import React from 'react';
import { withRouter } from 'react-router-dom';
import arrowUp from '../../assets/double_arrow_up.png'
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
        return <div className={`arrowUpIcon ${classHide}`}><a href='#smallIntro'> <img src={arrowUp} alt=''/></a></div>;
    }
}


// class RightArrowUp extends Component {
//   render() {
//     return (
//
//       <nav className='arrowUpIcon'>
//         <a href='#smallIntro'> <img src={arrowUp} alt=''/> </a>
//       </nav>
//
//     )
//   }
//
// }

export default withRouter(RightArrowUp);
