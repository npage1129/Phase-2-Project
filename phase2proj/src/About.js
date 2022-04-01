import React from 'react';
import Footer from './Base/Footer';
import Header from './Base/Header';
import './About.css';

function About() {
  return (
    <div className="About">
      <Header />
      <h1>About Sam</h1>
      <img src="https://scontent-den4-1.xx.fbcdn.net/v/t31.18172-8/22136909_10155097896712773_8239575531291997730_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=oQBVqSGuQdsAX-JCzOR&_nc_ht=scontent-den4-1.xx&oh=00_AT9gEx6GBGt9TAzXvzcS-IYOUX0wvKzOcN9GIKSXuh6-MA&oe=626B2AF7" alt="baby hippo" width="250" height="250" />
      <p>My name is Sam Waters. I have spent the past 10 years planning events, from a small conference to a large Phish concert. After the pandemic hit I spent time working on ways to run events safely and without gathering large groups of people. One of the biggest events we ran at the Denver Botanic Gardens was a plant sale. We sold over 1600 unique products with over 30,000 plants in our inventory. While also figuring out the logistics of getting plants to people, we also had to build a website to sell our plants. I set out on a new journey of website customizing. We created a BigCommerce site and I set out on writing scripts, updating colors through basic css and adding things to our website with code. It was a great first dive into coding and websites.<br></br><br></br>
      Needless to say, this led me into exploring a new career in tech and front end developing. I have already learned so much through my 6 weeks at flatiron and look forward to the next 6 weeks of different work to learn more. Coding is challenging and fun everyday. I am always challenge to go outside the box and figure out new problems. I look forward to every bug and error I get since it is a chance to learn something new.<br></br><br></br>
      I hope to make it into cyber security in my career but am excited to start my tech career in front end development.</p>
      <h1>About Nicole</h1>
      <img  className ="nicolePhoto"src="https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/273689751_10221220370235201_2484745349822407996_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w_ZUPZP5tfAAX-EpEWr&_nc_ht=scontent-den4-1.xx&oh=00_AT9iArKROWulTJh6mqZdvUnQ9-TkwJkd4Vi14kg3PWJXBQ&oe=624B7BC5" alt="nicole" width="400" height="250"/>
      <p>My name is Nicole Page. Most of my work experience is in hospitality and administrative operations. Within my career I have worked as an assistant to executives as well as managed  apartment buildings. I was responsible for assisting executives in learning new software programs as well as fixing basic technical issues around the office. <br></br><br></br>I have always had a love for computers and technology, but it wasn't until I stepped into the work force that I realized I wanted to do more with it. This led me to becoming a student at FlatIrons. Within the short time i have been here, my appreciation for technology has grown considerably. I am excited to start a career that requires me to constantly obtain new knowledge. I love how every day brings a new challenge and am excited to continuoulsy learn and grow.  </p>


      <Footer />
    </div>
  );
}

export default About;
