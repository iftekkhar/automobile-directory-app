import * as api from '../../Api/Api';

//Action Creators

export const getCars = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCars();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error)
    }
}
export const addNewCar = (car) => async (dispatch) => {
    try {
        const { data } = await api.createNewCar(car);
        dispatch({ type: 'CREATE_CAR', payload: data })
    } catch (error) {
        console.log(error)
    }
}