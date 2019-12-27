import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  h2 {
    margin-top: 0.5rem;
    font-size: 22px;
  }
  section {
    margin-top: -2rem;
  }
  .button {
    margin-top: -2rem !important;
    margin-bottom: 4rem;
  }
  .button:hover {
    background: #f14668;
    color: white;
  }
  .button {
    margin-top: 1rem !important;
    transition-duration: 1.5s;
    border: 1px solid #f14668;
    color: #f14668;
  }
`;
const About = () => (
  <Container>
    <section className="section">
      <h6 className="title is-size-5 has-text-centered">ABOUT OUR STUDIO</h6>
    </section>
    <section className="section">
      <h2 className="head  has-text-centered  has-text-weight-bold">
        THE CAMERA IS AN INSTRUMENT THAT TEACHES{' '}
      </h2>
      <h2 className="has-text-centered  has-text-weight-bold">
        <span>PEOPLE HOW TO SEE WITHOUT A CAMERA</span>
      </h2>
      <p className="column is-8 is-offset-2 has-text-centered">
        It’s the end of summer the sweltering heat makes human sweat in the
        night and makes the plants and trees wilt even in the moonlit nights.
        The eastern wind breeze brings an eerie feeling, the sky gets darker and
        darker, the flash of lightning illuminates the dark skies, the sound of
        thunder fills the heart with fear.
      </p>
    </section>
    <div className="buttons has-addons is-centered">
      <a className="button is-rounded is-size-5">READ MORE</a>
    </div>
  </Container>
);
export default About;
