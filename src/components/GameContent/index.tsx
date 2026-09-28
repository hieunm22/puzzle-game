import ActionButton from "components/ActionButton"
import PopupResult from "components/PopupResult"
import Tile from "components/Tile"
import { BOARD_STYLE } from "./constant"
import { useGameContent } from "./hooks"
import "./GameContent.scss"

const GameContent = () => {
	const { gameMatrix, moveCount, restartGame, backToLevels } = useGameContent()

	return (
		<div className="game-content">
			<div className="game-content__actions">
				<ActionButton
					label="Select level"
					icon="back"
					className="game-content__back"
					onClick={backToLevels}
				/>
				<PopupResult />
				<ActionButton
					label="Restart"
					icon="restart"
					className="game-content__restart"
					onClick={restartGame}
				/>
			</div>
			<div className="game-content__board" style={BOARD_STYLE}>
				{gameMatrix.map((_, index) => (
					<Tile key={index} index={index} />
				))}
			</div>
			<div className="game-content__move-count">Move count: {moveCount}</div>
		</div>
	)
}

export default GameContent
