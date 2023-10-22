import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    top: 2.5rem;
    left: 4.56rem;

    color: ${props=>props.theme.white};

    font-family: Belleza;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.09rem;

    z-index:100;

`
function Logo() {
  return (
    <Container>
        <Link to="/">
      Boho Daze
      </Link>
    </Container>
  )
}

export default Logo
