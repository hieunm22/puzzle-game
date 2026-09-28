import { useState } from "react"
import { useAppDispatch, useAppSelector } from "store"
import { newGame } from "store/slices/game"
import { MIN_LEVEL_SIZE } from "./constant"

export const useGameLevel = () => {
	const level = useAppSelector(state => state.game.level)
	const dispatch = useAppDispatch()
	const initialLevel = typeof level === "number" ? level : null
	const [selectedLevel, setSelectedLevel] = useState(initialLevel)
	const canStart = selectedLevel !== null && selectedLevel >= MIN_LEVEL_SIZE

	const startGame = () => {
		dispatch(newGame(selectedLevel))
	}

	// a second click on the selected level starts the game
	const pickLevel = (size: number) => {
		if (selectedLevel !== size) {
			setSelectedLevel(size)
		} else {
			startGame()
		}
	}

	return { selectedLevel, canStart, startGame, pickLevel }
}
