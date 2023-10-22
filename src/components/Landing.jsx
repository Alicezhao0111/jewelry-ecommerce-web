import React from 'react'
import styled from 'styled-components'
import background from '../assets/background.png'

const StyledLanding = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(${background});
    background-size: cover;
    background-position: center; 
`


function Landing() {
  return (
<StyledLanding>

</StyledLanding>
  )
}

export default Landing
