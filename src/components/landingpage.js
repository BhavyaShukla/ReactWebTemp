import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl'
import Typing,{Cursor} from 'react-typing-animation';

class Landing extends Component{
  render(){
    return(



      <div style={{width:'100%',margin:'auto'}}>
        <Grid className="landing-grid">
            <Cell col='12'>
                <img
                src="https://i1.wp.com/www.neuroequilibrium.in/wp-content/uploads/2015/12/Male-avatar.png?fit=512%2C512&ssl=1"
                alt="avatar"
                className="avatar-img"
                    />

            </Cell>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
                <hr/>
                const AnimatedTypingComponent = () => (
                   <Typing>
                   <Typing.Delay ms={500} />
                   <Typing.Speed ms={90} />


              <p>HTML/CSS | Bootstrap | CSSGRID | CSS3 | JavaScript | React | Polymer | Cordova </p>

                 </Typing>
                 );
              <div className="social-links">
              {/*LinkedIN*/}
                <a href="http://www.google.com" target="_blank">
                  <i className="fa fa-linkedin-square"rel="noopener noreferrer" aria-hidden="true"/>
                </a>

                {/*Facebook*/}
                <a href="http://www.google.com" target="_blank">
                  <i className="fa fa-facebook-square"rel="noopener noreferrer" aria-hidden="true"/>
                </a>
                {/*Twitter*/}
                <a href="http://www.google.com" target="_blank">
                  <i className="fa fa-twitter-square"rel="noopener noreferrer" aria-hidden="true"/>
                </a>
                {/*Github*/}
                <a href="http://www.google.com" target="_blank">
                  <i className="fa fa-github-square"rel="noopener noreferrer" aria-hidden="true"/>
                </a>
              </div>



            </div>
        </Grid>
      </div>

    )
  }
}
export default Landing;
