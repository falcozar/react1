import React from 'react';
import './../assets/vendor/bootstrap/css/bootstrap.min.css';
import './../assets/vendor/icofont/icofont.min.css';
import './../assets/vendor/venobox/venobox.css';
import './../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import './../assets/css/style.css';
import Header from './../Header';
import Body from './../Body';
import Footer from './../Footer';

function App() {
  return (
    <div className="App" >
            <Header />
            <Body />
            <Footer />
        </div>
  );
}

export default App;
