import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  .check {
    color: brown;
  }
  h3:hover {
    color: red;
  }
`;
const cardcontent = () => (
  <Container>
    <section className="section">
      <h3 className="column is-7 is-offset-2 has-text-weight-bold is-size-5 has-text-left ">
        {' '}
        OUR BLOG
      </h3>
      <h1 className=" check is-size-3 has-text-weight-bold column is-7 is-offset-2 has-text-left">
        LOVE STORY
      </h1>

      <a className="hover">
        <div className="container">
          <div className="columns ">
            <div className="column">
              <div className="card-image text">
                <Card
                  img="https://colorlib.com/preview/theme/shotgear/img/blog/blog_1.png"
                  title="MAD WHALES GHATHERING OPEN CAN'T"
                  subtitle="Is life form dominion under very seasons together them divide so, she'd bearing sixth"
                />
              </div>
            </div>

            <div className="column">
              <div className="card-image">
                <Card
                  img="https://colorlib.com/preview/theme/shotgear/img/blog/blog_2.png"
                  title="CREEPETH GRASS BROUGHT OVER MAN"
                  subtitle="Is life form dominion under very seasons together them divide so, she'd bearing sixth"
                />
              </div>
            </div>
            <div className="column">
              <div className="card-image">
                <Card
                  img="https://colorlib.com/preview/theme/shotgear/img/blog/blog_3.png"
                  title="MAD WHALES GATHERING OPEN EVENING"
                  subtitle="Is life form dominion under very seasons together them divide so, she'd bearing sixth"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  </Container>
);
export default cardcontent;
