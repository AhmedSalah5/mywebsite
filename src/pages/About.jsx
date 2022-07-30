import React from 'react'

function About() {
  return (
    <div className='about'>
        <div className="container">
          <div className="content">
            <div className="text">
              <h2 className='main-title'>About Me</h2>
              <h1>I'm Ahmed Salah Mahdy</h1>
              <h3 style={{marginBottom:'15px'}}>Frontend Web Developer</h3>
              {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt natus, deserunt quia modi delectus qui?</p> */}
              <div className="skills-div">
                <h2>Skills</h2>
                <div className="skills">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>JQuery</span>
                  <span>Bootstrap</span>
                  <span>React</span>
                  <span>Angular</span>
                  <span>TypeScript</span>
                  <span>PHP</span>
                  <span>C#</span>
                  <span>.Net</span>
                  <span>Nodejs</span>
                  <span>MongoDB</span>
                  <span>SQL</span>
                  <span>MySQL</span>
                </div>
              </div>
              <div className="grid">
                <div className="exp">
                  <h2>Experience</h2>
                  <h5>Dewansoft - Frontend Developer</h5>
                  <div>from 11/2020 - current</div>
                </div>
                <div className="exp">
                  <h2>Languages</h2>
                  <h5>Arabic - English</h5>
              </div>
              </div>
              
            </div>
            <div className="image">
              <img src="images/Programming.png" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default About