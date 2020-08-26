import React from 'react';
import About from './about';
import Intro from './intro';
import Services from './services';
import Portofolio from './portofolio';
import Team from './team';
import Contact from './contact';
function Body() {
  return (
    <div className="App">
       <Intro />
       <br />
       <About />
       <Services />
       <Portofolio />
       <Team />
       <Contact />
  </div>
  );
}

export default Body;
