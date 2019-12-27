import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import About from '../components/About';
import Feature from '../components/Feature';
import Cardcontent from '../components/Cardcontent';
import Extra from '../components/Extra';
import Footer from '../components/Footer';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
    margin-left: -9px;
    margin-top: 1rem;
  }
  section {
    background: url('/images/pic01.jpg');
    height: 40rem;
    background-position: center;
    background-size: cover;
  }
  h2 {
    margin-top: 14rem;
  }
  h3 {
    margin-top: 1rem;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Brian" description="Welcome to GatsbyJs v1" />
        <Container>
          <section className="section">
            <div className="columns is-vcentered is-desktop">
              <div className="column is-7" />
              <div className="column is-5-desktop has-text-centered-touch">
                <h2 className="is-size-5 has-text-white has-text-centered has-text-weight-semibold">
                  MODEL PHOTOGRAPY
                </h2>
                <h1 className="has-text-white is-size-2 has-text-weight-bold  has-text-centered">
                  CREATIVE
                  <span className="color has-text-danger is-size-2 has-text-weight-bold has-text-centered">
                    STUDIO
                  </span>
                </h1>
                <h3 className="has-text-centered has-text-white">
                  Capturing moments from today
                </h3>
              </div>
            </div>
          </section>
        </Container>
        <About />
        <Feature />
        <Cardcontent />
        <Extra />
        <Footer />
      </Layout>
    );
  }
}
