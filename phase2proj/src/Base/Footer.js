import React from 'react';
import './Footer.css';
 

function Footer() {
    return (
      <div className="Footer">
        <div className="SamLinks">
          {/* <p>Sam Waters</p> */}
          <a href="https://www.facebook.com/" class="fa fa-instagram"></a>
          <a href="https://www.facebook.com/" class="fa fa-twitter"></a>
          <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
          <a href="https://www.facebook.com/" class="fa fa-github"></a>
          <a href="#" class="fa fa-linkedin"></a>
        </div>
        <div className="NicoleLinks">
            <a href="https://www.instagram.com/nicolexpage2/" class="fa fa-instagram"></a>
            <a href="https://twitter.com/npage1129" class="fa fa-twitter"></a>
            <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
            <a href="https://github.com/npage1129" class="fa fa-github"></a>
            <a href="https://www.linkedin.com/in/nicole-page-556910175/" class="fa fa-linkedin"></a>
        </div> 
      </div>
    );
}
  
export default Footer;
  