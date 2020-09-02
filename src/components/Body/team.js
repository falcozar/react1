import React from 'react';
import team1 from './../assets/img/team/team-1.jpg';
import team2 from './../assets/img/team/team-2.jpg';
import team3 from './../assets/img/team/team-3.jpg';
function Team() {
  return (
    <section id="team" className="team">
    <div className="container">

      <div className="section-title">
        <h2>Notre Equipes</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img src={team1} alt="team-1" />
            <h4>Walter White</h4>
            <span>Chief Executive Officer</span>
            <p>
              Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
            </p>
            <div className="social">
              <a href=""><i className="icofont-twitter"></i></a>
              <a href=""><i className="icofont-facebook"></i></a>
              <a href=""><i className="icofont-instagram"></i></a>
              <a href=""><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
          <img src={team2} alt="team-2" />
            <h4>Sarah Jhinson</h4>
            <span>Product Manager</span>
            <p>
              Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
            </p>
            <div className="social">
              <a href=""><i className="icofont-twitter"></i></a>
              <a href=""><i className="icofont-facebook"></i></a>
              <a href=""><i className="icofont-instagram"></i></a>
              <a href=""><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
          <img src={team3} alt="team-3" />
            <h4>William Anderson</h4>
            <span>CTO</span>
            <p>
              Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
            </p>
            <div className="social">
              <a href=""><i className="icofont-twitter"></i></a>
              <a href=""><i className="icofont-facebook"></i></a>
              <a href=""><i className="icofont-instagram"></i></a>
              <a href=""><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  );
}

export default Team;
