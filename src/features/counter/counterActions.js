import { incrementByAmount, renderCharacterName } from "./counterSlice";
import { fetchCount } from "./counterAPI";


export const addAsyncAmount = (value) => {
    return async (dispatch) => {
        const amount = await fetchCount(value);
        dispatch(incrementByAmount(Number(amount.data)))
    }
}

export const getCharacterById = (id) => {
    return async (dispatch) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const json = await response.json();
        console.log(json)
        dispatch(renderCharacterName(json))
    }
}