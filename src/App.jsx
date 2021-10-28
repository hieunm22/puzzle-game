import { Component } from 'react'
import { connect } from "redux-zero/react"
import './style'
import {
  newGame
} from './actions'
import GameContent from './components/GameContent'
import GamePortrait from './components/GamePortrait'

class App extends Component {
  render() {
    console.log("hello world");
    if (this.props.status === 0) return (
      <>
        <GamePortrait />
      </>
    )
    return (
      <>
        <GameContent />
      </>
    )
  }
}

// const mapToProps = ({
// }) => ({
// })
const actions = {
  newGame
}

const connected = connect(null, actions)

export default connected(App)
