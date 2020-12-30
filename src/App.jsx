import { Component } from 'react'
import { connect } from "redux-zero/react"
import './App.css'
import {
  newGame
} from './actions'
import SelectGameLevel from './components/SelectGameLevel'
import GameContent from './components/GameContent'

class App extends Component {
  render() {
    if (this.props.status === 0) return (
      <>
        <SelectGameLevel />
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
