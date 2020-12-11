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
export const updateCar = (id, updatedCar) => async (dispatch) => {
    try {
        const { data } = await api.updateCar(id, updatedCar);
        dispatch({ type: 'UPDATE_CAR', payload: data })
    } catch (error) {
        console.log(error)
    }
}
export const deleteCar = (id) => async (dispatch) => {
    try {

        await api.deleteCar(id);
        dispatch({ type: 'REMOVE_CAR', payload: id });

    } catch (error) {
        console.log(error)
    }
}