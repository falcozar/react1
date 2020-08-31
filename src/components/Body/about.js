import React from 'react';

import {logo} from './../assets/img/abouts.jpg'; // 'aboutimg' is defined but never used no-unused-vars

function About() {
  return (
    <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>A propos</h2>
      </div>

      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2">
          <img src="{logo}" className="App-logo" alt="A propos" />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>

    </div>
  </section>
  
  );
}

export default About;
