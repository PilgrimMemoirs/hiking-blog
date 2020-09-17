import React from 'react';
import { Link, graphql } from "gatsby";
import { Layout } from '../components/Layout';
import { navigate } from 'gatsby-link'
import contactStyles from '../components/contact.module.scss'
import image from '../../content/imgs/jamie-pilgrim-2.jpg'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default () => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <img src={image} className={contactStyles.contactImg}/>

      <div class={contactStyles.form}>
        <h2> Contact </h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
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
      </div>

      <hr />

      <div className={contactStyles.socials}>
        <h4>Follow On:</h4>
        <ul>
          <li><a href="https://www.instagram.com/pilgrimmemoirs/" target="_blank">Instagram</a></li>
          <li><a href="https://www.twitter.com/pilgrimmemoirs/" target="_blank">Twitter</a></li>
          <li><a href="https://unsplash.com/@pilgrimmemoirs" target="_blank">Unsplash</a></li>
          <li><a href="https://society6.com/pilgrimmemoirs" target="_blank">Society 6</a></li>
        </ul>
      </div>
    </Layout>
  )
}
