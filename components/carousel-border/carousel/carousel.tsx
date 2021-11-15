import React, { FC, useEffect, useRef, useState } from 'react'
import styled, { css, FlattenSimpleInterpolation, keyframes,  } from 'styled-components'

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

export const Carousel: FC<{
    width: number, speed: number, alignment: FlattenSimpleInterpolation, text: string, opacity: number
}> = ({width, speed, alignment, text, opacity}) => {
    const [ scaleFactor, setScaleFactor ] = useState(0)

    const childRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if(childRef.current) {
            const newScaleFactor  = childRef.current.offsetWidth ? width / childRef.current.offsetWidth : 0
            if (newScaleFactor > 1)
            setScaleFactor(Math.ceil(newScaleFactor) + 1)
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