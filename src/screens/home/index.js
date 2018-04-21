import React from 'react'
import Hero from './components/hero'
import Title from './components/title'
import Container from './components/container'

const Home = () => (
  <Hero>
    <Title text="githubstars" />
    <Container>
      <div className="field has-addons">
        <p className="control">
          <button className="button is-static">https://github.com/</button>
        </p>
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="username" />
        </p>
      </div>
      <button type="submit" className="button">
        Get repositories
      </button>
    </Container>
  </Hero>
)

export default Home
