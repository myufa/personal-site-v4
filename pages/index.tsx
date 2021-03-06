import React, { FC, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import { CarouselBorder } from '../components/carousel-border'
import { LinkBar } from '../components/link-bar'
import { Rotate } from '../components/carousel-border/carousel/utils'
import { Carousel } from '../components/carousel-border/carousel'

const SyllableUrl = 'https://syllable.ai/'

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  justify-content: center;
  //align-items: center;
  font-family: aileron, sans-serif;
`

interface TagLineProps {
  opacity: number
}
const TagLineContainer = styled.div<TagLineProps>`
  text-align: center;
  position: absolute;
  width: 500px;
  top: 400px;
  opacity: ${({opacity}) => opacity};
  transition: opacity 2.5s 0.5s;
  @media (max-width: 480px) {
    top: 330px;
  }
`

const SyllableLink = styled.a`
  color: #0025FF;
  text-decoration: none;
`

const TagLine: FC = () => {
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
      setOpacity(1)
      return () => {
          setOpacity(0)
      }
  }, [])
  return (
    <TagLineContainer opacity={opacity}>
      <h1>Hi, I'm Michael.</h1>
      <h3>I'm a Full-Stack Engineer at <SyllableLink href={SyllableUrl} target='_blank'>Syllable.</SyllableLink></h3>
    </TagLineContainer>
  )
}

const SideCarouselLeft = css`
  font-weight: 300;
  ${Rotate(270)}
  position: fixed;
  left: 2px;
`
const SideCarouselRight = css`
  font-weight: lighter;
  ${Rotate(90)}
  position: fixed;
  right: 2px;
`

const Home: NextPage = () => {
    return (
      <>
        <Head>
          <title>Michael Yufa</title>
          <meta name="description" content="Michael Yufa" />
        </Head>
        <AppContainer>
            {/* <Carousel
              width={1000}
              speed={12}
              alignment={SideCarouselLeft}
              text='|Full|&nbsp;&nbsp;&nbsp;|Stack|&nbsp;&nbsp;&nbsp;'
              opacity={1} /> */}
            <CarouselBorder />
            {/* <Carousel
              width={1000}
              speed={12}
              alignment={SideCarouselRight}
              text='|Full|&nbsp;&nbsp;&nbsp;|Stack|&nbsp;&nbsp;&nbsp;'
              opacity={1} /> */}
            <TagLine/>
            <LinkBar />
        </AppContainer>
      </>
    )
}

export default Home
