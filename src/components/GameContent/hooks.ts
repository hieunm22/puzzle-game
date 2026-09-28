import { useEffect } from "react"
import { shuffle } from "common/helper"
import { useAppDispatch, useAppSelector } from "store"
import { move, selectLevel } from "store/slices/game"
import type { MovePayload } from "store/types"

export const useGameContent = () => {
	const gameMatrix = useAppSelector(state => state.game.gameMatrix)
	const moveCount = useAppSelector(state => state.game.moveCount)
	const dispatch = useAppDispatch()

	const restartGame = () => {
		const shuffledMatrix = shuffle()
		const payload: MovePayload = {
			gameMatrix: shuffledMatrix,
			moveCount: 0,
			clickedIndex: -1,
			moveDirection: null
		}
		dispatch(move(payload))
	}

	const backToLevels = () => dispatch(selectLevel())

	useEffect(restartGame, [dispatch])

	return { gameMatrix, moveCount, restartGame, backToLevels }
}
