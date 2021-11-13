import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { CarouselBorder } from '../components/carousel-border'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Home: NextPage = () => {
    <Head>
        <title>Michael Yufa</title>
        <meta name="description" content="Michael Yufa" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    return (
        <AppContainer>
            <CarouselBorder />
        </AppContainer>
    )
}

export default Home
