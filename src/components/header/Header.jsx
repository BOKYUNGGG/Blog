import React from 'react'
import styled from 'styled-components'
import {ReactComponent as List} from '../../assets/list.svg'
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'
import {ReactComponent as ArrowRight} from '../../assets/arrow-right.svg'
import {ReactComponent as ChatSquareText} from '../../assets/chat-square-text.svg'
import {ReactComponent as Clock} from '../../assets/clock.svg'
import {ReactComponent as Star} from '../../assets/star.svg'
import {ReactComponent as ThreeDots} from '../../assets/three-dots.svg'
const Wrapper = styled.header`
    display : flex;
    flex-direction : row;
    align-items : center;
`
const Header = () => {
  return (
    <Wrapper>
        <List/>
        <ArrowLeft/>
        <ArrowRight/>
        <span>React</span>
        <span>/</span>
        <span>useEffct에 대해서 알아보자!</span>
        <ChatSquareText/>
        <Clock/>
        <Star/>
        <ThreeDots/>
    </Wrapper>
  )
}

export default Header