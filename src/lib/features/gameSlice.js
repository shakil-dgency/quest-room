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
				selectedCategory === "all games"
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

		filterByLocation:(state, action)=>{
			const {majorCity, subCity} = action.payload;

			// If filtering by subcity
			if(subCity){
				const singleLocation = state.allGames.flatMap((city)=> city.subcity).filter((sub)=> subCity?.toLowerCase().includes(sub.name.toLowerCase()) );

				state.filteredGames =singleLocation.length !== 0 ? singleLocation.flatMap((item)=> item.games): state.allGames.flatMap((city) => city.subcity)

			}
			//If filtering by major city
			else if(majorCity){
				const bigCity = state.allGames.find((city)=> city.mejorcity.toLowerCase().includes(majorCity?.toLowerCase()));
				state.filteredGames = bigCity?.subcity
			}

			// If no location is selected, show all games
			else {
				state.filteredGames = state.allGames.flatMap((city) => city.subcity);
			}
		}
	},
});

export const { filterByCategory,filterByLocation } = gameSlice.actions;
export default gameSlice.reducer;

