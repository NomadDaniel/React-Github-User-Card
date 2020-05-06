import React from 'react'
import UserCard from './components/UserCard'
import Followers from './components/Followers'
import axios from 'axios'

import styled from 'styled-components'

// ______ styled components _______//
const BigDiv = styled.div`
max-width: 95%;
max-height: auto;
background-color: lightgrey;
border: 1px solid black;
border-radius: 15px;
box-sizing: border-box;
margin: 1% auto;
padding: 1%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
// flex-flow:  wrap;
align-items: center;
`

const H1 = styled.h1`
background-color: CornflowerBlue;
text-align: center;
margin: auto;
padding: 1%;
max-width: 50%;
height: auto;
border: 1px solid black;
border-radius: 15px;
`


// ______ class / constructor / state _______//

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      user: '',
      followers: []
    }
  }
  // _____ componentDidMount ( 2 axios, setState w responses ) _____ //

  componentDidMount () {
    axios
      .get( 'https://api.github.com/users/NomadDaniel' )
      .then( res1 => {
        console.log( res1.data )
        axios
          .get( res1.data.followers_url )
          .then( res2 => {
            console.log( res2.data )

            this.setState( {
              user: res1.data,
              followers: res2.data
            } )
          } )
      } )
  }

  // ______ render/return UserCards (div, h1, card, h2, card) _______//

  render () {
    return (
      <BigDiv>
        <H1> GitHub UserCards </H1>
        <UserCard
          avatarURL={ this.state.user.avatar_url }
          name={ this.state.user.name }
          login={ this.state.user.login }
          url={ this.state.user.url }
          followers={ this.state.user.followers }
          following={ this.state.user.following }
          bio={ this.state.user.bio }
        />

        <H1>My Followers</H1>
        <Followers />

      </BigDiv>
    )
  }
}
export default App