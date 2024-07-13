import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritesItems: localStorage.getItem("favoriteItems") ? JSON.parse(localStorage.getItem("favoriteItems")) : [],
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            if (state.favoritesItems.length >= 10) {
                alert('You have exceeded the maximum limit of favorite characters. Please remove another character from favorites.');
            } else {
                const existingIndex = state.favoritesItems.findIndex(item => item.id === action.payload.id);
                if (existingIndex === -1) {
                    state.favoritesItems.push(action.payload);
                    localStorage.setItem("favoriteItems", JSON.stringify(state.favoritesItems));
                } else {
                    alert('This character is already in favorites!');
                }
            }
        },

        removeFavorites: (state, action) => {
            const characterToRemove = state.favoritesItems.find(item => item.id === action.payload.id);
            const confirmation = window.confirm(`Are you sure you want to remove ${characterToRemove.name} from favorites?`);
        
            if (confirmation) {
                const updatedFavorites = state.favoritesItems.filter(item => item.id !== action.payload.id)
                state.favoritesItems = updatedFavorites;
                localStorage.setItem("favoriteItems", JSON.stringify(state.favoritesItems));
            }
        },

        clearFavorites: (state, action) => {
            state.favoritesItems = [];
            localStorage.setItem("favoriteItems", JSON.stringify(state.favoritesItems));
        }

    },
})

export const { addToFavorites, removeFavorites, clearFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
