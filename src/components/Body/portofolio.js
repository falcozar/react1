import React from 'react';
import portofolio1 from './../assets/img/portfolio/portfolio-1.jpg';
import portofolio2 from './../assets/img/portfolio/portfolio-2.jpg';
import portofolio3 from './../assets/img/portfolio/portfolio-3.jpg';
import portofolio4 from './../assets/img/portfolio/portfolio-4.jpg';
import portofolio5 from './../assets/img/portfolio/portfolio-5.jpg';
import portofolio6 from './../assets/img/portfolio/portfolio-6.jpg';
import portofolio7 from './../assets/img/portfolio/portfolio-7.jpg';
import portofolio8 from './../assets/img/portfolio/portfolio-8.jpg';
import portofolio9 from './../assets/img/portfolio/portfolio-9.jpg';
function Portofolio() {
  return (
    <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title">
        <h2>Our Portfolio</h2>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container">

        <div className="col-lg-4 col-md-6 filter-app">
          <div className="portfolio-item">
           
            <img src={portofolio1} className="img-fluid" alt="portfolio-1" />
            <div className="portfolio-info">
              <h3><a href="portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1">App 1</a></h3>
              <div>
                <a href="portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="icofont-eye"></i></a>
                <a href="portfolio-details.html" title="Details"><i className="icofont-plus"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 filter-web">
          <div className="portfolio-item">
           
            <img src={portofolio2} className="img-fluid" alt="portfolio-2" />
            <div className="portfolio-info">
              <h3><a href="portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3">Web 3</a></h3>
              <div>
                <a href="portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-eye"></i></a>
                <a href="portfolio-details.html" title="Details"><i className="icofont-plus"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 filter-app">
          <div className="portfolio-item">
           
            <img src={portofolio3} className="img-fluid" alt="portfolio-3" />
            <div className="portfolio-info">
              <h3><a href="portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2">App 2</a></h3>
              <div>
                <a href="portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="icofont-eye"></i></a>
                <a href="portfolio-details.html" title="Details"><i className="icofont-plus"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 filter-card">
          <div className="portfolio-item">
            <img src={portofolio4} className="img-fluid" alt="portfolio-4" />
            
            <div className="portfolio-info">
              <h3><a href="portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2">Card 2</a></h3>
              <div>
                <a href="portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="icofont-eye"></i></a>
                <a href="portfolio-details.html" title="Details"><i className="icofont-plus"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 filter-web">
          <div className="portfolio-item">
           
            <img src={portofolio5} className="img-fluid" alt="portfolio-5" />
            <div className="portfolio-info">
              <h3><a href="portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2">Web 2</a></h3>
              <div>
                <a href="portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="icofont-eye"></i></a>
                <a href="portfolio-details.html" title="Details"><i className="icofont-plus"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 filter-app">
          <div className="portfolio-item">
          <img src={portofolio6} className="img-fluid" alt="portfolio-6" />
            <div className="portfolio-info">
              <h3><a href="portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3">App 3</a></h3>
              <div>
                <a href="portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="icofont-eye"></i></a>
                <a href="portfolio-details.html" title="Details"><i className="icofont-plus"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 filter-card">
          <div className="portfolio-item">
          <img src={portofolio7} className="img-fluid" alt="portfolio-7" />
            <div className="portfolio-info">
              <h3><a href="portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1">Card 1</a></h3>
              <div>
                <a href="portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="icofont-eye"></i></a>
                <a href="portfolio-details.html" title="Details"><i className="icofont-plus"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 filter-card">
          <div className="portfolio-item">
          <img src={portofolio8} className="img-fluid" alt="portfolio-8" />
            
            <div className="portfolio-info">
              <h3><a href="portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3">Card 3</a></h3>
              <a href="portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="icofont-plus"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 filter-web">
          <div className="portfolio-item">
          <img src={portofolio9} className="img-fluid" alt="portfolio-9" />
           
            <div className="portfolio-info">
              <h3><a href="portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 1">Web 1</a></h3>
              <div>
                <a href="portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 1"><i className="icofont-eye"></i></a>
                <a href="portfolio-details.html" title="Details"><i className="icofont-plus"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  );
}

export default Portofolio;
