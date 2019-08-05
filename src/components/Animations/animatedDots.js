import React, { useState} from 'react';
import styled from 'styled-components';

// Styles

const Wrapper = styled.div`
    width: 50%;
    z-index: 9;
    justify-self: center;
    justify-content: center;
`

const TopCircle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #00467E;
    transition: transform 300ms;
    margin: 2px;
    top: 0;

    ${Wrapper}:hover & {
        transform: translate(-10px, 10px);
    }
`;

const MiddleCircle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #00467E;
    transition: transform 300ms;
    margin: 2px;
    top: 6;
`;

const BottomCircle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #00467E;
    transition: transform 300ms;
    margin: 2px;
    top: 12;

    ${Wrapper}:hover & {
        transform: translate(10px, -10px);
    }
`;




// JSX

function DotMenu(props) {

    const [move, setMove] = useState(props.move);


    function handleClick() {
        setMove(!move);
        props.click();
    }

      return (
        <Wrapper onClick={handleClick}>
            <TopCircle></TopCircle>
            <MiddleCircle></MiddleCircle>
            <BottomCircle></BottomCircle>
        </Wrapper>
      )
  }
  export default DotMenu