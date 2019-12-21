import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
  }
  section {
    background: url('/images/pic01.jpg');
    height: 40rem;
    background-position: center;
    background-size: cover;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Container>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-4 is-offset-8">
                  <h1 className="title is-size-5">MODEL PHOTOGRAPHY</h1>
                  <p className="hint is-size-1">CREATIVE</p>
                  <p>STUDIO</p>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    );
  }
}
