import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
import { CSSTransitionGroup } from 'react-transition-group'
class Resume extends Component{
  render(){
    return(
      <CSSTransitionGroup
            component="div"
            transitionName="resume"
            transitionAppear={true}
            transitionEnterTimeout={600}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={400}
            >
    <div>
      <Grid>
       <Cell className="resume-left-col"col={4}>
          <img
            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
            alt="avatar"
          
            style={{height: '200px'}}
          />
          <h2>Bhavya Shukla</h2>
          <h4>Developer|Photographer</h4>
          <hr/>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
          <hr/>
          <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr/>

       </Cell>
       <Cell className="resume-right-col" col={8}>

        <h2> Education</h2>

                  <Education
                  startYear={2014}
                  endYear={2018}
                  schoolName="Mumbai University"
                  schoolDescription="The University of Mumbai, informally known as Mumbai University (MU), is one of the earliest state universities in India and the oldest in Maharashtra."
                  />


                  <Education
                  startYear={2014}
                  endYear={2018}
                  schoolName="Mumbai University"
                  schoolDescription="The University of Mumbai, informally known as Mumbai University (MU), is one of the earliest state universities in India and the oldest in Maharashtra."
                  />
                  <hr/>
                  <h2>Experience</h2>
                  <Experience
                  jobstartYear={2015}
                  jobendYear={2017}
                  jobName="SLLD Automation"
                  jobDescription="SLLD provides turnkey automation solutions for process and machine tool industries. With more than 15 years of experience we are the best in solution"
                  />
                  <hr/>
                  <h2>Skills</h2>
                        <Skill
                        skill="javascript"
                        progress={100}
                          />

                          <Skill
                          skill="HTML/CSS"
                          progress={78}
                            />
                            <Skill
                            skill="Bootstrap"
                            progress={66}
                              />
                              <Skill
                              skill="CSS-GRID"
                              progress={92}
                                />
                                <Skill
                                skill="VueJS"
                                progress={30}
                                  />



       </Cell>
      </Grid>
    </div>
    </CSSTransitionGroup>
    )
  }
}
export default Resume;
