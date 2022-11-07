import React from "react";
import logo from '../logo.svg';
import Navigation from "./navigation";

const Header = () => {
  return (
    <header id="masthead" className="site-header clearfix ">
        <div id="header-text-nav-container" className="clearfix">
          <div className="inner-wrap">
            <div id="header-text-nav-wrap" className="clearfix">
              <div id="header-left-section">
                <div id="header-logo-image">
                  <a href="https://www.shongshoy.com/" className="custom-logo-link" rel="home" aria-current="page"><img src={logo} alt="সংশয় – চিন্তার মুক্তির আন্দোলন" /></a> 
                </div>
                <div id="header-text" className="screen-reader-text">
                  <h1 id="site-title">
                    <a href="https://www.shongshoy.com/" title="সংশয় – চিন্তার মুক্তির আন্দোলন" rel="home">সংশয় – চিন্তার মুক্তির আন্দোলন</a>
                  </h1>
                  <p id="site-description">
                    জ্ঞান যেখানে সীমাবদ্ধ, যুক্তি যেখানে আড়ষ্ট, মুক্তি সেখানে অসম্ভব 
                  </p>
                </div>
              </div>
              <div id="header-right-section">
                <div id="header-right-sidebar" className="clearfix">
                  <aside id="text-5" className="widget widget_text clearfix">
                    <div className="textwidget">
                      <h2 style={{fontFamily: 'Shobuj Nolua', fontSize: '1.5em', color: 'green'}}>“জ্ঞান যেখানে সীমাবদ্ধ,<br />যুক্তি যেখানে আড়ষ্ট,<br />মুক্তি সেখানে অসম্ভব” </h2>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
       
<Navigation />


        </div>
      </header>

  );
};
export default Header;













