import { getImageUrl } from "imgs/background"
import { useAppDispatch, useAppSelector } from "store"
import { newGame } from "store/slices/game"

export const useGamePortrait = () => {
	const imageUrl = useAppSelector(state => state.game.imageUrl)
	const dispatch = useAppDispatch()
	const imageSrc = getImageUrl(imageUrl)

	const startGame = () => {
		dispatch(newGame(imageUrl))
	}

	return { imageUrl, imageSrc, startGame }
}
