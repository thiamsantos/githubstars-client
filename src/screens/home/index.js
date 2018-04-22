import React from 'react'
import Hero from './components/hero'
import Title from './components/title'
import Container from './components/container'
import GetRepositories from './containers/get-repositories'

const Home = () => (
  <Hero>
    <Title text="githubstars" />
    <Container>
      <GetRepositories />
    </Container>
  </Hero>
)

export default Home
