import { createSlice } from "@reduxjs/toolkit";
import gamesData from "../../data";

const gameSlice = createSlice({
	name: "games",
	initialState: {
		allGames: gamesData,
		filteredGames: gamesData.flatMap((city) => city.subcity),
	},

	reducers: {
		filterByCategory: (state, action) => {
			const selectedCategory = action.payload;
			state.filteredGames =
				selectedCategory === "allgames"
					? gamesData.flatMap((city) => city.subcity)
					: state.allGames.flatMap((city) =>
							city.subcity
								.map((sub) => ({
									...sub,
									games: sub.games.filter((game) => game.category.includes(selectedCategory)),
								}))
								.filter((sub) => sub.games.length > 0)
					  );
		},
	},
});

export const { filterByCategory } = gameSlice.actions;
export default gameSlice.reducer;
