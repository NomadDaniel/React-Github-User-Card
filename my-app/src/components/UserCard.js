import React from 'react';
import styled from 'styled-components';

// ______ styled components _______//
const Div = styled.div`
max-width: 35%;
max-height: auto;
background-color: lightblue;
border: 1px solid black;
border-radius: 15px;
box-sizing: border-box;
margin: 1% auto;
padding: 1%;
display: flex;
// flex-direction: column;
flex-flow: column wrap;
align-items: center;
`;
const Img = styled.img`
align-items: center;
margin: auto;
max-width: 50%;
height: auto;
border: 1px solid black;
border-radius: 15px;
`;


// ______ export default function Card (props) _______//
export default function UserCard ( props ) {
  // ______ return UserCard (div, image, h4, p x5) _______//
  return (
    <Div>
      <Img src={ props.avatarURL } />
      <h4> name:  { props.name }</h4>
      <p>login:  { props.login }</p>
      <p>url:  { props.url }</p>
      <p>followers:  { props.followers }</p>
      <p>following:  { props.following }</p>
      <p> bio:  { props.bio } </p>
    </Div>
  );
}




