import React, { Component } from 'react';
import './App.css';
import './components/fontawesome-icons/css/all.css';
import './components/styles/font.css';
import './components/styles/toc.css';
import './components/styles/cm.css';
import './components/styles/style.min.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Secondary from './components/secondary.js';
import Fronttop from './components/fronttop.js';
import Featuredposts from './components/featuredposts';
import Onehalf from './components/onehalf';
import Otherhalf from './components/otherhalf';



class App extends Component {
  render() {
    return (
      <div>
        <div id="page" className="hfeed site">
          <a className="skip-link screen-reader-text" href="#main">Skip to content</a>
          <Header />
          <div id="main" className="clearfix">
            <div className="inner-wrap clearfix">
              <Fronttop />
            <div className="main-content-section clearfix">
                <div id="primary">
                  <div id="content" className="clearfix">
                   <Featuredposts />
                  <Onehalf />
                  <Otherhalf />
                    <div className="clearfix" />
                  </div>
                </div>
              
<Secondary />

              </div>
            </div>
          </div>
   
<Footer />


          <a href="#masthead" id="scroll-up"><i className="fa fa-chevron-up" /></a>
        </div>
        <div id="um_upload_single" style={{display: 'none'}} />
        <div id="um_view_photo" style={{display: 'none'}}>
          
          <div className="um-modal-body photo">
            <div className="um-modal-photo" />
          </div>
        </div>
      </div>
 



 

    );
  }
}

export default App;
