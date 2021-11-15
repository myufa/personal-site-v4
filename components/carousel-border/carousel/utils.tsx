import { css } from 'styled-components'

export const Rotate = (degree: number) => css`
    transform: rotate(${degree}deg);
    -webkit-transform: rotate(${degree}deg);
    -moz-transform: rotate(${degree}deg);
    -o-transform: rotate(${degree}deg);
    -ms-transform: rotate(${degree}deg);
`