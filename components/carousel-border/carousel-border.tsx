import React, { createRef, ElementRef, FC, LegacyRef, ReactNode, RefAttributes, useEffect, useRef, useState } from 'react'
import styled, { css, DefaultTheme, FlattenSimpleInterpolation, keyframes, ThemedCssFunction } from 'styled-components'

interface CarouselBorderContainerProps {
    opacity: number
}
const CarouselBorderContainer = styled.div<CarouselBorderContainerProps>`
    font-family: "Surt", sans-serif;
    font-size: 25px;
    text-align: center;
    position: absolute;
    display: block;
    width: 250px;
    height: 250px;
    border: 3px solid black;
    opacity: ${({opacity}) => opacity};
    transition: opacity 4s 0.5s;
`
const CenterContainer = styled.div`
    position: relative;
    display: flex;
    width: 162px;
    height: 162px;
    //margin: 44px;
    border: 3px solid black;
    justify-content: center;
    align-items: center;
    top: -116px;
    left: 43px;
`

const CenterText = styled.div`
    font-family: "Surt", sans-serif;
    font-size: 104px;
    text-align: center;
`

interface CarouselProps {
    width: number
    alignment: FlattenSimpleInterpolation
}
const CarouselOuterContainer = styled.div<CarouselProps>`
    width: ${({ width }) => width}px;
    height: 40px;
    position:   relative;
    overflow:   hidden;
    ${({ alignment }) => alignment}
`

const Revolve = keyframes`
    0% {
        transform: translate(-50%, 0);
    }
    100% {
        transform: translate(0, 0);
    }
`

interface CarouselInnerContainerProps {
    speed: number
    opacity: number
}
const CarouselInnerContainer = styled.div<CarouselInnerContainerProps>`
    position:absolute;
    top:0px;
    left:0px;
    overflow:hidden;
    white-space: nowrap;
    animation: ${({ speed, opacity }) => opacity === 1 ? css`${Revolve} ${speed}s linear infinite` : null};
`


const CarouselTop = css`
    left: 40px;
    top: 7px;
`
const CarouselRight = css`
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    right: -100px;
    top: 63px;
`
const CarouselBottom = css`
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    left: 40px;
    top: 120px;
`
const CarouselLeft = css`
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    left: -92px;
    top: -18px;
`

const Carousel: FC<{
    width: number, speed: number, alignment: FlattenSimpleInterpolation, text: string, opacity: number
}> = ({width, speed, alignment, text, opacity}) => {
    const [ scaleFactor, setScaleFactor ] = useState(0)

    const childRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if(childRef.current) {
            const newScaleFactor  = childRef.current.offsetWidth ? width / childRef.current.offsetWidth : 0
            if (newScaleFactor > 0.15)
            setScaleFactor(Math.ceil(newScaleFactor) + 3)
            console.log('hi', newScaleFactor, Math.ceil(newScaleFactor), width , childRef.current.offsetWidth)
        }
    }, [])

    return (
        <CarouselOuterContainer width={width} alignment={alignment}>
            <CarouselInnerContainer speed={speed} opacity={opacity}>
                    {[...Array(scaleFactor + 1)].map(i => <span key={i} ref={childRef}>{text}&nbsp;</span>)}
            </CarouselInnerContainer>
        </CarouselOuterContainer>
    )
}

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