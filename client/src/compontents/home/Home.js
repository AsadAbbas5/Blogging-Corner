import { Box, Container } from '@mui/material'
import React from 'react'
import HeroSection from '../section/hero/HeroSection'
import LatesetPost from '../section/latesetPost/LatesetPost'
import SubScripitioinSection from '../section/subscriptionSection/SubScripitioinSection'

function Home() {
  return (
    <Container>
      <HeroSection />
      <LatesetPost />
      <SubScripitioinSection />
     
    </Container>
  )
}

export default Home