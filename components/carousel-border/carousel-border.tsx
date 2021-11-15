import React, { FC, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Carousel } from './carousel'
import { Rotate } from './carousel/utils'

interface CarouselBorderContainerProps {
    opacity: number
}
const CarouselBorderContainer = styled.div<CarouselBorderContainerProps>`
    font-size: 25px;
    text-align: center;
    position: absolute;
    display: block;
    width: 250px;
    height: 250px;
    border: 3px solid #22272e;
    opacity: ${({opacity}) => opacity};
    transition: opacity 2.5s 0.5s;
    top: 100px;
    font-weight: bold;
    @media (max-width: 480px) {
        top: 50px;
    }
`
const CenterContainer = styled.div`
    position: relative;
    display: flex;
    width: 162px;
    height: 162px;
    //margin: 44px;
    border: 3px solid #22272e;
    justify-content: center;
    align-items: center;
    top: -116px;
    left: 43px;
`

const CenterText = styled.div`
    font-size: 104px;
    text-align: center;
    padding-right: 7px;
`

const CarouselTop = css`
    left: 40px;
    top: 7px;
`
const CarouselRight = css`
    ${Rotate(90)}
    transform-origin: 59% 253%;
    right: 4px;
    top: 2px;
`
const CarouselBottom = css`
    ${Rotate(180)}
    transform-origin: 50% 200%;
    left: 40px;
    bottom: 0px;
`
const CarouselLeft = css`
    ${Rotate(270)}
    transform-origin: 25% 150%;
    left: 4px;
    top: 2px;
`

export const CarouselBorder: FC = () => {
    const [opacity, setOpacity] = useState(0)
    useEffect(() => {
        setOpacity(1)
        return () => {
            setOpacity(0)
        }
    }, [])
    return (
        <CarouselBorderContainer opacity={opacity}>
            <Carousel width={170} speed={8} alignment={CarouselTop} text='Michael Yufa' opacity={opacity}/>
            <Carousel width={238} speed={4} alignment={CarouselRight} text='Michael Yufa' opacity={opacity}/>
            <Carousel width={170} speed={8} alignment={CarouselBottom} text='Michael Yufa' opacity={opacity}/>
            <Carousel width={238} speed={4} alignment={CarouselLeft} text='Michael Yufa' opacity={opacity}/>
            <CenterContainer><CenterText>MY</CenterText></CenterContainer>
        </CarouselBorderContainer>
    )
}