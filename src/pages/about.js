import React from 'react';
import { Link, graphql } from "gatsby";
import { Layout } from '../components/Layout/Layout';
import Img from 'gatsby-image';
import image from '../../content/imgs/jamie-pilgrim-2.jpg';
import '../styles/about.scss';


export default ({ data }) => (
  <Layout>
    <img src={image} className="about-img"/>
    <div className="body-text">
      <h2> About </h2>
      <p>
      Hello! I’m Jamie, a Wisconsin native that has traveled and lived in a whole slew of other places. I now reside in Seattle, Washington, which is the perfect base for going on weekly adventures. You can often find me in the mountains hiking and backpacking.
      </p>
      <p>
      Since I have gotten two dogs in the past two years, I do less flying and more road trips, so I can bring them along! Ash is a 2 year old border collie/australian shepherd mix that is also deaf (I use lots of hand signals with her), and Ember is a 1 year old german shepherd/husky mix that can very much hear but sometimes chooses not to (huskies are stubborn).
      </p>
    </div>
    <div>
      <p>
      I’ve been doing regular/weekly hiking trips pretty steadily for the last few years and have only been sharing photos and videos of them on Instagram. Recently I made the jump to further document them all with this blog and youtube!
      </p>
      <p>
      Enjoy!
      </p>
    </div>
    <hr />
    <div className="socials">
      <h4>Follow On:</h4>
      <ul>
        <li><a href="https://www.instagram.com/pilgrimmemoirs/" target="_blank">Instagram</a></li>
        <li><a href="https://youtube.com/c/JamiePilgrimMemoirs" target="_blank">Youtube</a></li>
        <li><a href="https://www.twitter.com/pilgrimmemoirs/" target="_blank">Twitter</a></li>
        <li><a href="https://unsplash.com/@pilgrimmemoirs" target="_blank">Unsplash</a></li>
        <li><a href="https://society6.com/pilgrimmemoirs" target="_blank">Society 6</a></li>
      </ul>
    </div>
  </Layout>
)

export const aboutQuery = graphql`
  query {
    file(relativePath: { eq: "content/imgs/jamie-pilgrim-2.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2000, traceSVG: { color: "#565656" }) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`
