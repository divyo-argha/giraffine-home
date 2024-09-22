// import React from 'react';
// import './education.css';
// import EducationCard from './EducationCard';

// function Education() {
//   return (
//     <section className="education" id="education">
//       <h1 className="heading">our <span>Courses</span></h1>
//       <div className="box-container">
//         <EducationCard
//           title="Software Development"
//           description="The course that will help you learn all the basics of web and software developing."
//           image="images/dev.png"
//         />
//         <EducationCard
//           title="Problem Solving"
//           description="Choose a coding language and get prepared to shine up your problem solving skills."
//           image="images/cp.png"
//         />
//         <EducationCard
//           title="Computer Networking"
//           description="Dive into the world of computer networking and explore whatever you can."
//           image="images/net.png"
//         />
        
      
//       </div>
//     </section>
//   );
// }

// export default Education;


import Lottie from 'lottie-react';
import React from 'react';
import aiBasedLearning from './AI.json';
import contestAnimation from './contest.json';
import './education.css';
import learnerPanda from './learner_panda.json';
import learnerSheep from './learner_sheep.json';

function Education() {
  return (
    <section className="education" id="education">
      <h1 className="heading">Level Based Learning <br></br>
      with <span>Giraffine</span></h1>
      {/* <div className="box-container">
        <EducationCard
          title="Programming Tutorials"
          description="Learn to code with fun, easy-to-follow tutorials that turn you into a coding superhero!"
          image="images/dev.png"
        />
        <EducationCard
          title="Problem Solving"
          description="Choose a coding language and get prepared to shine up your problem solving skills."
          image="images/cp.png"
        />
        <EducationCard
          title="Community Based Learning"
          description="solve challenges, and explore coding together in fun-filled learning adventures!"
          image="images/community.png"
        />
      </div> */}
      <div className="horizontal-card-container">
        <div className="horizontal-card">
          <Lottie className='lottie' animationData={learnerPanda}/>
          <div className="horizontal-content">
            <h3>Learner</h3>
            <p><i>rating: 0+</i> </p>
            <p><b>Every Great Journey Starts with a Single Step</b></p>
            <br></br>
            <p>Welcome to the world of coding! As a Learner, you’re setting the foundation for an exciting adventure. This is the stage where you’ll explore the basics of programming, solve your first problems, and discover the endless possibilities of coding. Ready to start?</p>
          </div>
        </div>
        <div className="horizontal-card">
          <Lottie className='lottie' animationData={learnerSheep}/>
          <div className="horizontal-content">
            <h3>Explorer</h3>
            <p><i>rating: 130+</i></p>
            <p><b>Uncover New Territories of Code</b></p>
            <p>As an Explorer, you’ve taken your first strides into the vast world of programming. Now, it’s time to dive deeper! You’ll be challenged with more intriguing problems and will begin to see how coding can solve real-world puzzles. Keep going, there’s so much more to discover!</p>
          </div>
        </div>
        <div className="horizontal-card">
          {/* <Lottie className='lottie' animationData={aiBasedLearning}/> */}
          <img src='images/giraffe_on_laptop.png' ></img>
          <div className="horizontal-content">
            <h3>Adventurer</h3>
            <p><i>rating: 210+</i></p>
            <p><b>Braving the Challenges Ahead</b></p>
            <p>You’ve entered the Adventurer rank, where the challenges get tougher and the rewards greater. Here, your skills are put to the test, as you face more complex problems that push your creativity and logic to new levels. Gear up, the adventure is just getting started!
            </p>
          </div>
        </div>
      </div>

      

      <div className="horizontal-card-container">
        <div className="horizontal-card">
          <Lottie className='lottie' animationData={aiBasedLearning}/>
          <div className="horizontal-content">
            <h3>Challenger</h3>
            <p><i>rating: 290+</i></p>
            <p><b>Rising to Every Challenge</b></p>
            <p>As a Challenger, you’ve become a force to be reckoned with! No problem is too tough, and no code is too complicated for you. This rank is for those who don’t just solve problems—they conquer them. Are you ready to take on the most exciting challenges?</p>
          </div>
        </div>
        
        <div className="horizontal-card">
          {/* <img src="images/dev.png" alt="Advanced Web Development" /> */}
          <Lottie className='lottie' animationData={contestAnimation}/>
          <div className="horizontal-content">
            <h3>Mastermind</h3>
            <p><i>rating: 370+</i></p>
            <p><b>Mastering the Code, Shaping the Future</b></p>
            <p>Congratulations! As a Mastermind, you’ve reached the pinnacle of coding excellence. You’re not just solving problems—you’re creating solutions. Your skills have grown, and now, you have the power to shape the future with code. Keep pushing the boundaries, and continue to innovate!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;


