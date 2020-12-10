import * as api from '../../Api/api';

//Action Creators

export const getCars = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCars();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error)
    }
}