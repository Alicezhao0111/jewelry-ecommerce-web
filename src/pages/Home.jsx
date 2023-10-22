import React from 'react'
import styled from 'styled-components'
import Landing from '../components/Landing'


const Section = styled.section`
  position: relative;
  min-height: 200vh;
`
function Home() {
  return (
    <Section>
      <Landing />
    </Section>
  )
}

export default Home
