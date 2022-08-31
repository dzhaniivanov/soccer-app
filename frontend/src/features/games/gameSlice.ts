import { Game } from "../../interfaces/Game";

interface GameState {
  games: Game[] | null;
  loading: boolean;
  singleGame: Game | null;
}

const initialState: GameState = {
  games: [],
  singleGame: null,
  loading: false,
};
