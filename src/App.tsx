import GameContent from "components/GameContent"
import GamePortrait from "components/GamePortrait"
import { useAppSelector } from "store"

const App = () => {
	const status = useAppSelector(state => state.game.status)

	if (status === 0) {
		return <GamePortrait />
	}
	return <GameContent />
}

export default App
