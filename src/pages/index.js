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
              <h1 className="title">Hi people</h1>
              <p>Welcome to your new Gatsby site.</p>
              <p>Now go build something great.</p>
            </div>
          </section>
        </Container>
      </Layout>
    );
  }
}
