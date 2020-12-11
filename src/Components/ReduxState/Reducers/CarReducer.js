export default (cars = [], action) => {
    switch (action.type) {
        case 'REMOVE_CAR':
            return cars.filter(car => car._id !== action.payload)
        case 'UPDATE_CAR':
            return cars.map(car => car._id === action.payload._id ? action.payload : car)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_CAR':
            return [...cars, action.payload];
        default:
            return cars;
    }
}