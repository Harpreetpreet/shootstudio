/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NewsItem from '../components/NewsItem';
import Footer from '../components/Footer';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 6rem;
  h3 {
    font-size: larger;
    font-family: serif;
    margin-top: 4 rem;
    color: #c20a43;
    text-align: center;
  }
  p {
    margin-top: 2rem;
    color: #9a978c;
  }
  h1 {
    color: dimgray;
  }
  .columns {
    margin: 0rem !important;
    padding: 0rem !important;
  }
`;

const NewsUpdates = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Seo title="About us" />

      <Container className="container">
        <section>
          <h3 className="column is-7 is-offset-2 has-text-weight-bold is-size-5 has-text-left">
            {' '}
            OUR SERVICE
          </h3>
          <h1 className=" check is-size-3 has-text-weight-bold column is-7 is-offset-2 has-text-left">
            WHAT WE OFFER
          </h1>
        </section>
        <div className="columns">
          <div className="column is-3 is-offset-1">
            <img src="/images/ring.jpg" />
            <h3>WEDDING PHOTOGRAPHY</h3>
            <p className="has-text-centered has-text-bold">
              World the end of summer the sweltering heat makes human sweat in
              the night and man plants and trees wilt even
            </p>
          </div>
          <div className="column">
            <div className="column is-11 is-offset-1">
              <img src="/images/single_offer_img_1.png" />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </Layout>
  );
};

export default NewsUpdates;

export const pageQuery = graphql`
  query newsIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
