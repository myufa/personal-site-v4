import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

const GitHubUrl = 'https://github.com/myufa'
const TwitterUrl = 'https://twitter.com/michaelyufa'
const LinkedInUrl = 'https://www.linkedin.com/in/myufa'

interface LinkBarContainerProps {
    opacity: number
}
const LinkBarContainer = styled.div<LinkBarContainerProps>`
    position: absolute;
    width: 350px;
    height: 60px;
    //background-color: #22272e;
    top: 600px;
    opacity: ${({opacity}) => opacity};
    transition: opacity 2.5s 0.5s;
    display: flex;
    justify-content: space-between;
`

const ContactLink = styled.a`
    color: #22272e;
    text-decoration: none;
`

export const LinkBar: FC = () => {
    const [opacity, setOpacity] = useState(0)
    useEffect(() => {
        setOpacity(1)
        return () => {
            setOpacity(0)
        }
    }, [])
    return (
        <LinkBarContainer opacity={opacity}>
            <ContactLink href={GitHubUrl} target='_blank'>GitHub{'\u2197'}</ContactLink>
            <ContactLink href={TwitterUrl} target='_blank'>Twitter{'\u2197'}</ContactLink>
            <ContactLink href={LinkedInUrl} target='_blank'>LinkedIn{'\u2197'}</ContactLink>
        </LinkBarContainer>
    )
}