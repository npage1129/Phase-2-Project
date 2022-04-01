import React from 'react';
import './Footer.css';
 

function Footer() {
    return (
      <div className="Footer">
        <div className="SamLinks">
          {/* <p>Sam Waters</p> */}
          <a href="https://www.instagram.com/stwaters92/" class="fa fa-instagram"></a>
          <a href="https://twitter.com/stwaters92/" class="fa fa-twitter"></a>
          <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
          <a href="https://github.com/darkcohiba" class="fa fa-github"></a>
          <a href="https://www.linkedin.com/in/samuel-waters-7a85b590/" class="fa fa-linkedin"></a>
          <text className ='S'>Sam's Links</text>
        </div>
        <div className="NicoleLinks">
            <a href="https://www.instagram.com/nicolexpage2/" class="fa fa-instagram"></a>
            <a href="https://twitter.com/npage1129" class="fa fa-twitter"></a>
            <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
            <a href="https://github.com/npage1129" class="fa fa-github"></a>
            <a href="https://www.linkedin.com/in/nicole-page-556910175/" class="fa fa-linkedin"></a>
            <text className ='N'>Nicole's Links</text>
        </div> 
        </div>
    );
}
  
export default Footer;
  