import React from 'react';
import './main-home.css';
import iconChat from '../../assets/img/icon-chat_11zon.webp';
import iconMoney from '../../assets/img/icon-money_11zon.webp';
import iconSecurity from '../../assets/img/icon-security_11zon.webp';
import Feature from '../feature/Feature';
const MainHome = () => {
  return (
    <div>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with ArgentBank today !</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature 
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            icon={iconChat}
          />
          <Feature
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
            icon={iconMoney}
          />
          <Feature
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money is always safe."
            icon={iconSecurity}
          />
        </section>
      </main>
    </div>
  );
};

export default MainHome;