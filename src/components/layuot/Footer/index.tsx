// libraries
import React from 'react';
// assets
import { ReactComponent as CallWhite } from 'assets/callWhite.svg';
import { ReactComponent as EmailWhite } from 'assets/emailWhite.svg';
import { ReactComponent as Balance } from 'assets/balance.svg';
import { ReactComponent as GooglePlay } from 'assets/googleplay.svg';
import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Twitter } from 'assets/twitter.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <h3>Need help?</h3>
      <div className="footer-content">
        <div className="footer-content-info">
          <p className="footer-content-text footer-content-text-margin">Call us or write to us so that we can solve your doubts.</p>
          <p className="footer-content-text">
            Our customer service hours are:
            <br />
            <b>Monday to Friday from 9:00 a.m. to 8:00 p.m.</b>
          </p>
        </div>
        <div>
          <div className="footer-content-contacts">
            <p className="footer-content-contacts-text">
              <CallWhite className="footer-content-contacts-icon" />
              <a className="footer-content-contacts-text-link" href="https://www.google.com/">937 227 354 / 900 533 827</a>
            </p>
            <p className="footer-content-contacts-text number">
              <EmailWhite className="footer-content-contacts-icon" />
              <a className="footer-content-contacts-text-link" href="https://www.google.com/">682 214 539</a>
            </p>
            <p className="footer-content-contacts-text">
              <Balance className="footer-content-contacts-icon" />
              <a className="footer-content-contacts-text-link" href="https://www.google.com/">send us a message</a>
            </p>
          </div>
        </div>
        <div className="footer-content-address">
          <p className="footer-content-text">
            Our offices are located at:
          </p>
          <p className="footer-content-text">
            <b>08006 Minsk</b>
          </p>
          <p className="footer-content-icons ">
            <a href="https://play.google.com/store"><GooglePlay /></a>
            <a href="https://www.facebook.com/">
              <Facebook className="icon-margin" />
            </a>
            <a href="https://twitter.com/">
              <Twitter />
            </a>
          </p>
        </div>
      </div>
    </div>

    <div className="footer-content-policy">
      <span className="footer-content-policy-text">
        ©
        {new Date().getFullYear()}
        {' '}
        Arctic Bank
      </span>
      <span className="footer-content-policy-text">Go back up</span>
    </div>
    <div className="footer-content-icons-mobile">
      <a href="https://play.google.com/store"><GooglePlay /></a>
      <a href="https://www.facebook.com/">
        <Facebook className="icon-margin" />
      </a>
      <a href="https://twitter.com/">
        <Twitter />
      </a>
    </div>
  </footer>
);

export default Footer;
