import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import background from '../background-sketch';
import businessSloth from '../images/humanoid_sloth_dante_cg.jpg';

//React-router routes for having pages at different endpoints
const Computers = props => {
  return(
      <div className = "App">
          <div className = "background">
              <P5Wrapper  sketch={background}/>
          </div>
          <div className = "container">
              <div class="jumbotron bg-info">
                <h1 class="display-4">Professional</h1>
                <p class="lead">My life as a programmer</p>
                <hr class="my-4"/>
                <p>A summary of places I have worked</p>
              </div>
          </div>
          <div className = "container" style = {{zIndex:2, position:'relative'}}>
              <figure class="figure">
                <img src= {businessSloth} class="figure-img img-fluid rounded" alt="A sloth holding a suitcase"/>
                <figcaption class="figure-caption">source: https://www.deviantart.com/dante-cg/art/HUMANOID-SLOTH-555496235</figcaption>
              </figure>
          </div>
          <div className = "container">
            <div class="row">
                <div class="col">
                    <div class="card card-description bg-info">
                      <div class="card-body">
                        <h5 class="card-title">Horizon-Specialty</h5>
                        <h3>2012-2017</h3>
                        <h6>Web Developer</h6>
                      </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="card card-description bg-info">
                      <div class="card-body">
                        <p class="card-text">
                            I started this job when I was a sophomore in high school. My Chemistry teacher loved me
                            and I did well in the class so he offered me a job to work for his bio-tech lab company
                            as a sales representative. I ended up maintaining the website (adding/changing products) well
                            into college, but later taught him how to do it himself (and left) to save the company some money.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div class="col">
                    <div class="card card-description bg-info">
                      <div class="card-body">
                        <h5 class="card-title">DETS at UMD</h5>
                        <h3>2016-2017</h3>
                        <h6>Technical Director</h6>
                      </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="card card-description bg-info">
                      <div class="card-body">
                        <p class="card-text">
                            This was a really easy job where I sat in a booth and recorded lectures for graduate school
                            engineering classes (thanks for the referral Hannah!). The recordings would go online but
                            students would also stream the class, and could ask questions via speakers and TVs around the
                            room to make it like they were really in the classroom. I left because I had hard classes senior year
                            and needed to focus on them (CMSC430 omg)
                        </p>
                      </div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div class="col">
                    <div class="card card-description bg-success">
                      <div class="card-body">
                        <h5 class="card-title">Self Employed</h5>
                        <h3>2018-now</h3>
                        <h6>Math Tutor</h6>
                      </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="card card-description bg-success">
                      <div class="card-body">
                        <p class="card-text">
                            I teach two young sisters(7th and 10th grade) math in my spare time (thanks for the refferal Tommy!)
                            It's mainly just algebra, trig, and word problems. The family is super sweet, and it's a really nice
                            side job to have, expecially while waiting for my first paycheck. Sometimes I can even do it over skype
                            so it's pretty easy. They are doing well in school and the younger one is the coding champ of the school!
                        </p>
                      </div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div class="col">
                    <div class="card card-description bg-success">
                      <div class="card-body">
                        <h5 class="card-title">Business Integra</h5>
                        <h3>2018-now</h3>
                        <h6>Application Developer at NASA</h6>
                      </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="card card-description bg-success">
                      <div class="card-body">
                        <p class="card-text">
                            It has always been a dream of mine to work at NASA. I don't program anything that goes into space, just
                            web-apps to help the financial people on the ground stay organized. This is my first real job of my career
                            and I couldn't be happier. Graduating college is a really scary time when you don't have a job and never really
                            had an internship. My mom called me almost everyday to apply for a job at a restaurant but I never gave up.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  );
}

export default Computers;
