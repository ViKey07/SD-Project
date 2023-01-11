import React from 'react';
import BackImg from '../../assets/img/Taj-Mahal.png'
import Logo from '../../assets/img/logo.png'
import Srch from '../../assets/img/search.png'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
        <header>
        <div className="header-in">
            <nav className="navbar">
                <Link to ='/'>
                <div className="home-icon">
                    <img src={Logo} alt="" className="home-icon" />
                </div>
                </Link>

                <div className="home-nav">
                    <h6 className="home-h6">HOME</h6>
                    <h6 className="home-h6">TOURIST ATTRACTIONS</h6>
                    <h6 className="home-h6">WONDERS IN WORLD</h6>
                    <h6 className="home-h6">FAVOURITE</h6>
                </div>
            </nav>

            <section id="home">
                <div className="main-background">
                    <div className="bg-overlay">
                        <img src={BackImg} alt="Taj Mahal Image" className="main-bg"/>
                    </div>

                    <h3 className="heading">Let's Travel the World...!</h3>
                    
                    <div className="search-bar">
                        <input type="text" className="text" placeholder="Search your destination"/>
                        <img className="search-bar-logo" src={Srch} alt="search" width="25px" height="25px"/>
                    </div>
                </div>
            </section>


        </div>
    </header>
    </div>
  )
}

export default Header