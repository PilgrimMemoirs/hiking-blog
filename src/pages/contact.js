import React from 'react';
import { Link, graphql } from "gatsby";
import { Layout } from '../components/Layout';

export default () => (
  <Layout>
    <h2> Contact </h2>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

  </Layout>
)
