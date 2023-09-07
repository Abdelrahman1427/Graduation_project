import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import sixth from '../imgs/team-5.png';
import firstSvg from '../imgs/supervisor.png';
import secondSvg from '../imgs/team-1.jpg';
import thirdSvg from '../imgs/team-2.jpg';
import fourthSvg from '../imgs/team-3.jpg';
import fifthSvg from '../imgs/team-4.jpg';

import '../css/teamAbout.css';

import { useTranslation } from 'react-i18next';

const AboutTeam = () => {
  const { t } = useTranslation();
  return (
    <div className="containerhamada">
      <div className="section-title">
        <h1>Our Supervisor</h1>
      </div>

      <div className="rowhamada">
        <div className="columnSupervisor">
          <div className="team">
            <div className="team-img">
              <img src={firstSvg} alt="Supervisor Image" />
            </div>
            <div className="team-content">
              <h3>Professor </h3>
              <h2>AMANY SAAD</h2>
              <h3>Supervisor</h3>
              <p>Professor, Computer Engineering</p>
              <h4><FontAwesomeIcon icon={faEnvelope} /> amani.saad@aast.edu.eg</h4>
            </div>
            <div className="team-social">
              <a href="#" className="social-tw"> <FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="social-fb"> <FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social-li"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="social-in"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="social-git"> <FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-title">
        <h1>Our Team Page</h1>
      </div>

      <div className="rowhamada">
        <div className="columnhamada">
          <div className="team">
            <div className="team-img">
              <img src={secondSvg} alt="Team Image" />
            </div>
            <div className="team-content">
              <h2>Sarah</h2>
              <h3>Front-end Developer</h3>
              <p>Some text goes here that describes about team members</p>
              <h6>sarahhosama007@gmail.com</h6>
            </div>
            <div className="team-social">
              <a href="#" className="social-tw"> <FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="social-fb"> <FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social-li"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="social-in"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="social-git"> <FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>

        <div className="columnhamada">
          <div className="team">
            <div className="team-img">
              <img src={thirdSvg} alt="Team Image" />
            </div>
            <div className="team-content">
              <h2>Ahmed</h2>
              <h3>DevOps Developer</h3>
              <p>Some text goes here that describes about team members</p>
              <h6>ahmed.ashraf@gmail.com</h6>
            </div>
            <div className="team-social">
              <a href="#" className="social-tw"> <FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="social-fb"> <FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social-li"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="social-in"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="social-git"> <FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>

        <div className="columnhamada">
          <div className="team">
            <div className="team-img">
              <img src={fourthSvg} alt="Team Image" />
            </div>
            <div className="team-content">
              <h2>Abdelrahman</h2>
              <h3>Backend Developer</h3>
              <p>Some text goes here that describes about team members</p>
              <h6>abdo.mohmaed@gmail.com</h6>
            </div>
            <div className="team-social">
              <a href="#" className="social-tw"> <FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.facebook.com/abdelrahman1427/" className="social-fb"> <FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://www.linkedin.com/in/abdelrahman2046/" className="social-li"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="https://www.instagram.com/abdelrahman9433/" className="social-in"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://github.com/Abdelrahman1427" className="social-git"> <FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>

        <div className="columnhamada">
          <div className="team">
            <div className="team-img">
              <img src={fifthSvg} alt="Team Image" />
            </div>
            <div className="team-content">
              <h2>Mohamed</h2>
              <h3>Database Developer</h3>
              <p>Some text goes here that describes about team members</p>
              <h6>Mohamed.gamal@gmail.com</h6>
            </div>
            <div className="team-social">
              <a href="#" className="social-tw"> <FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="social-fb"> <FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social-li"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="social-in"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="social-git"> <FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>

        <div className="columnhamada">
          <div className="team">
            <div className="team-img">
              <img src={sixth} alt="Team Image" />
            </div>
            <div className="team-content">
              <h2>Habiba</h2>
              <h3>Frontend Developer</h3>
              <p>Some text goes here that describes about team members</p>
              <h6>habibahossam1@hotmail.com</h6>
            </div>
            <div className="team-social">
              <a href="#" className="social-tw"> <FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="social-fb"> <FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social-li"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="social-in"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="social-git"> <FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
