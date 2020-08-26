import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Nous contacter</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row">

        <div className="col-lg-4 col-md-6">
          <div className="contact-about">
            <h3>Falcozar</h3>
            <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
            <div className="social-links">
              <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
              <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
              <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
              <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info">
            <div>
              <i className="icofont-google-map"></i>
              <p>A108 Adam Street<br/>New York, NY 535022</p>
            </div>

            <div>
              <i className="icofont-envelope"></i>
              <p>info@example.com</p>
            </div>

            <div>
              <i className="icofont-phone"></i>
              <p>+1 5589 55488 55s</p>
            </div>

          </div>
        </div>

        <div className="col-lg-5 col-md-12">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
  );
}

export default Contact;
