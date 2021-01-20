import { Component } from 'react'
import { connect } from "redux-zero/react"
import './style'
import {
  newGame
} from './actions'
import GameLevel from './components/GameLevel'
import GameContent from './components/GameContent'

class App extends Component {
  render() {
    if (this.props.status === 0) return (
      <>
        <GameLevel />
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
