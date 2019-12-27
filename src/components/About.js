import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  p {
    margin-top: 2rem !important;
    text-align: center;
  }
  .head {
    margin-top: 2rem;
  }
  h2 {
    margin-top: 1rem;
    font-size: 22px;
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
  h1 {
    margin-top: 1rem;
  }
`;
const About = () => (
  <Container>
    <section className="section">
      <div className="container">
        <h3 className="has-text-centered has-text-weight-semibold has-text-grey">
          ABOUT OUR STUDIO
        </h3>

        <h2 className="head  has-text-centered  has-text-weight-bold">
          THE CAMERA IS AN INSTRUMENT THAT TEACHES{' '}
        </h2>
        <h2 className="has-text-centered  has-text-weight-bold">
          <span>PEOPLE HOW TO SEE WITHOUT A CAMERA</span>
        </h2>
        <p className="column is-8 is-offset-2">
          It’s the end of summer the sweltering heat makes human sweat in the
          night and makes the plants and trees wilt even in the moonlit nights.
          The eastern wind breeze brings an eerie feeling, the sky gets darker
          and darker, the flash of lightning illuminates the dark skies, the
          sound of thunder fills the heart with fear.
        </p>
        <div className="buttons has-addons is-centered">
          <a className="button is-rounded is-size-5">READ MORE</a>
        </div>
      </div>
    </section>
  </Container>
);
export default About;
