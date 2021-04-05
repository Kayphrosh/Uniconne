import React, {Component} from 'react'
import './App.css'

class Carousel extends Component {
    constructor() {
        super();
        this.h = React.createRef()
        this.slide = React.createRef()
    }

    // color = () => {
    //     this.h.current.style.color = "blue"
    //     this.slide.current.style.background = "orange"
    //     this.slide.current.innerHTML = "blue"

    // }

    // componentDidMount(){
    //     this.color()
    // }
    render() {
        
        return(
            <div className="body noSelect">
                <div class="slider-container">
                    <div className="slide active" >
                        
                    </div>
                    <div className="slide">
                        
                    </div>
                    <div className="slide">
                        
                    </div>
                
                    <div className="slide">
                        
                    </div>
                    <div className="slides-content">
                        <div className="logo">
                            <img src={require('./images/logo.svg')}/>niconne<span class="iconify" data-icon="mdi:food-apple" data-inline="false"></span>
                        </div>
                        <h2> 
                        Welcome <a className="2">2</a> OAU Students Connect.
                        </h2>
                        <p> A social media app that connect students with educational contents, social meetups and lots more... </p>
                    </div>

                    <div className="light-mode">
                        <a href="#"><span class="iconify" data-icon="emojione-monotone:bright-button" data-inline="false"></span></a>
                    </div>
                    <div className="progress-steps">
                        <span className="initial">0%</span>
                        <div className="progress" id="progress"></div>
                        <div className="circle active-step"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <span className="final">100%</span>
                    </div> 
                </div>
                <div className="container-2">
                    <div className="container-2-header">
                        <h2>Let's Get Started!</h2>
                        <p>you do not have an account? <a href="#" className="sign-up-link">sign Up</a></p>
                    </div>
                    <div className="login-form">
                        <form id="login">
                            <span>
                                <h4>Email</h4>
                                <input type="text" id="search" autocomplete="off" placeholder="enter your email"></input>
                            </span>
                            <span>
                                <h4>Password</h4>
                                <input type="password" id="search" autocomplete="off" placeholder="password"></input>
                                <span class="iconify" data-icon="akar-icons:eye-open" data-inline="false"></span>
                            </span>
                            <p>
                                forgot your password? <a href="#">click here</a>
                            </p>
                            {/* <span>
                                <h4>Reg No.</h4>
                                <input type="text" id="search" placeholder="enter your email"></input>
                            </span> */}
                            <button id="sign-in-btn">Sign In</button>
                        </form>
                    </div>
                    <div className="sign-in-google">
                        <div className="sign-in-gooogle-header">
                            <div className="line-border"></div>
                            <h3> OR</h3>
                            <div className="line-border"></div>
                        </div>
                        <a href="#"><span class="iconify" data-icon="flat-color-icons:google" data-inline="false"></span></a>
                    </div>
                    <div className="policy">
                        <div className="privacy-policy-link">
                        <p>have you read our privacy policy &#38; FAQ yet?</p>
                        <a href=""><span class="iconify" data-icon="akar-icons:link-out" data-inline="false"></span></a>
                        </div> 
                        <p> &copy; copyright 2021</p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Carousel