import React, { FC } from 'react'
import styled, { css, keyframes } from 'styled-components'

const CarouselBorderContainer = styled.div`
    position: absolute;
    display: block;
    width: 250px;
    height: 250px;
    border: 3px solid black;
`
const CarouselContainer = styled.div`
    width: 100%;
    height: 42px;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
`
const CenterContainer = styled.div`
    position: absolute;
    display: flex;
    width: 162px;
    height: 162px;
    margin: 44px;
    border: 3px solid black;
    justify-content: center;
    align-items: center;
`

const CenterText = styled.div`
    font-family: "Surt", sans-serif;
    font-size: 104px;
    text-align: center;
`

const CarouselSpanAnimationKeyframe = keyframes`
    0% {
        transform: translate(-100%, 0);
    }
    100% {
        transform: translate(0, 0);
    }
`

interface CarouselPProps {
    width: number
}
const CarouselP = styled.p<CarouselPProps>`
    width: ${({ width }) => width}px;
    font-family: "Surt", sans-serif;
    font-size: 25px;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
`

const CarouselPTop = styled(CarouselP)`
    left: 45px;
    top: 7px;
`
const CarouselPRight = styled(CarouselP)`
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    left: 105px;
    top: 109px;
`
const CarouselPBottom = styled(CarouselP)`
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    left: 45px;
    top: 210px;
`
const CarouselPLeft = styled(CarouselP)`
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    left: -101px;
    top: 110px;
`

interface CarouselSpanProps {
    speed: number
}
const CarouselSpan1 = styled.span<CarouselSpanProps>`
    display: inline-block;
    padding-left: 100%;
    animation: ${({ speed }) => css`${CarouselSpanAnimationKeyframe} ${speed}s linear infinite`};
`

const CarouselSpan2 = styled.span<CarouselSpanProps>`
    display: inline-block;
    padding-left: 100%;
    animation: ${({ speed }) => css`${CarouselSpanAnimationKeyframe} ${speed}s linear infinite`};
    animation-delay: ${({ speed }) => speed / 2}s;
`


const Carousel = (speed: number, width: number) => (CarouselComponent: FC<CarouselPProps>) => (
    <>
        <CarouselComponent width={width}>
            <CarouselSpan1 speed={speed}>Michael Yufa&nbsp;</CarouselSpan1>
        </CarouselComponent>
        <CarouselComponent width={width}>
            <CarouselSpan2 speed={speed}>Michael Yufa&nbsp;</CarouselSpan2>
        </CarouselComponent>
    </>
)

const HorizontalCarousel = Carousel(7, 160)
const VerticalCarousel = Carousel(4, 244)

export const CarouselBorder: FC = () => {
    return (
        <CarouselBorderContainer>
            <CarouselContainer>
                {HorizontalCarousel(CarouselPTop)}
                {VerticalCarousel(CarouselPRight)}
                <CenterContainer><CenterText>MY</CenterText></CenterContainer>
                {HorizontalCarousel(CarouselPBottom)}
                {VerticalCarousel(CarouselPLeft)}
            </CarouselContainer>
        </CarouselBorderContainer>
    )
}