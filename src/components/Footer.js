/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #1e2528;
  .img {
    padding: 36px;
  }
  .font {
  }
  .control {
    margin-top: 2rem;
  }
  .pos:hover {
    color: red;
  }
  .copy {
    margin-top: 8rem;
  }
  .toper {
    margin-top: 2rem;
  }
  .icon {
    color: white;
  }
  li {
    margin-top: 0.5rem;
  }
`;
const Footer = () => (
  <Container className="foot">
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div>
              <h1 className="font  is-size-4 has-text-white has-text-weight-bold">
                OUR SERVICE
              </h1>
              <ul className="toper has-text-grey is-size-6 has-text-weight-semibold ">
                <li>Wedding photography</li>
                <li>Live coverage</li>
                <li>Wild life shoot</li>
                <li>Video editing</li>
                <li>Fashion photography</li>
                <li>Info about camera</li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div>
              <h1 className="font  is-size-4 has-text-white has-text-weight-bold">
                CONTACT INFO
              </h1>
              <ul className="toper has-text-grey is-size-6 has-text-weight-semibold ">
                <li>
                  4361 Morningview Lane Artland ,
                  <span>Pall Street Latimer, IA 50452 / 23654</span>
                </li>
                <li>+02 - 32 365 2654</li>
                <li>+02 - 32 365 2654</li>
                <li>ariclawyerfirm.com</li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div>
              <h1 className="font  is-size-4 has-text-white has-text-weight-bold">
                INSTAGRAM
              </h1>
              <div className="columns img">
                <div className="column">
                  <img
                    src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_1.png"
                    alt=""
                  />
                  <img
                    src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_5.png"
                    alt=""
                  />
                </div>
                <div className="column">
                  <img
                    src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_2.png"
                    alt=""
                  />

                  <img src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_6.png" />
                </div>
                <div className="column">
                  <img
                    src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_3.png"
                    alt=""
                  />
                  <img
                    src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div>
              <h1 className="font  is-size-4 has-text-white has-text-weight-bold">
                NEWSLETTER
              </h1>
              <ul className=" toper has-text-grey is-size-6 has-text-weight-semibold  ">
                <p>
                  Stay updated with our latest trends see heaven so said place
                  fruit.
                </p>
              </ul>
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="control">
                  <a className="button is-danger">Search</a>
                </div>
              </div>
              <a>
                <span className="icon ">
                  <i className="fab fa-facebook-f" />
                </span>
                <span className="icon ">
                  <i className="fab fa-twitter" />
                </span>
                <span className="icon ">
                  <i className="fab fa-instagram" />
                </span>
                <span className="icon ">
                  <i className="fab fa-skype" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <p className=" copy has-text-centered has-text-weight-semibold">
          | This template is made with by Harpreet |
        </p>
      </div>
    </section>
  </Container>
);
export default Footer;
