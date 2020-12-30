import createStore from "redux-zero"

const initialState = {
  status: 0,  // 0: select game level, 1: new game, 2: gameover
  level: null,
  gameMatrix: [],
  moveCount: 0
}

const store = createStore(initialState)

export default store
