import ActionButton from "components/ActionButton"
import PopupSelectImage from "components/PopupSelectImage"
import { useGamePortrait } from "./hooks"
import "./GamePortrait.scss"

const GamePortrait = () => {
	const { imageUrl, imageSrc, startGame } = useGamePortrait()

	return (
		<div className="game-portrait">
			<PopupSelectImage />
			{imageUrl && (
				<img
					className="game-portrait__image"
					src={imageSrc}
					width={300}
					height={500}
					alt={imageUrl}
					title={imageUrl}
				/>
			)}
			<ActionButton
				label="Start game"
				className="game-portrait__start"
				disabled={!imageUrl}
				onClick={startGame}
			/>
		</div>
	)
}

export default GamePortrait
