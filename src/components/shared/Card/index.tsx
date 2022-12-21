// libraries
import React from 'react';
// assets
import { ReactComponent as Call } from 'assets/call.svg';
import { ReactComponent as Email } from 'assets/email.svg';
import { ReactComponent as Whatsapp } from 'assets/whatsapp2.svg';

const Card = () => (
  <div className="info-card">
    <div>
      <p className="contacts-title">Need help?</p>
      <p className="contacts-text">
        You can contact us from Monday to Saturday from 09:00 a.m. to 10:00 p.m.
      </p>
      <div className="contacts">
        <p className="info-card-text">
          <Call className="info-card-icons" />
          <a className="info-card-text-link" href="https://www.google.com/">937 227 354 / 900 533 827</a>
        </p>
        <p className="info-card-text number">
          <Whatsapp className="info-card-icons" />
          <a className="info-card-text-link" href="https://www.google.com/">682 214 539</a>
        </p>
        <p className="info-card-text">
          <Email className="info-card-icons" />
          <a className="info-card-text-link" href="https://www.google.com/">send us a message</a>
        </p>
      </div>
    </div>
  </div>
);

export default Card;
