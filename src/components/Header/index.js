import React from 'react';


function Header() {
  return (
     <header id="header" className="fixed-top">
  <div className="container">

    <div className="logo float-left">
    <h1 className="text-light"><a href="index.html"><span>My First Page</span></a></h1>
     
      
    </div>

    <nav className="nav-menu float-right d-none d-lg-block">
      <ul>
        <li className="active"><a href="ndex.html">Accueil</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#team">Equipes</a></li>
        <li className="drop-down"><a href="">Produits</a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="drop-down"><a href="#">Drop Down 2</a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
            <li><a href="#">Drop Down 5</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

  </div>
</header>
  );
}

export default Header;
