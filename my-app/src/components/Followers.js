import React from 'react'
import UserCard from './UserCard'
import axios from 'axios'

import styled from 'styled-components'

// ______ styled components _______//



// ______ class / constructor / state _______//

export default class Followers extends React.Component {
  constructor () {
    super()
    this.state = {
      loginList: [],
      followersList: []
    }
  }
  // _____ componentDidMount ( 2 axios, setState w responses ) _____ //

  componentDidMount () {
    axios
      .get( 'https://api.github.com/users/NomadDaniel/followers' )
      .then( res => {
        console.log( res.data )
        this.setState( { loginList: res.data } )
        this.state.loginList.map( item => {
          axios.get( `https://api.github.com/users/${ item.login }` )
            .then( res => {
              console.log( res.data )
              this.setState( {
                followersList: [ ...this.state.followersList, res.data ]
              } )
            } )
        } )
      } )
  }
  // ______ render/return UserCards (div, h1, card, h2, card) _______//

  render () {
    return (
      <>
        {
          this.state.followersList.map( user => {
            return <UserCard
              avatarURL={ user.avatar_url }
              name={ user.name }
              login={ user.login }
              url={ user.url }
              followers={ user.followers }
              following={ user.following }
              bio={ user.bio }
            />

          } )
        }
      </>

    )
  }

}
