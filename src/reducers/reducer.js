export default function reducer(state = { currentUser: {} }, action) {
    switch (action.type) {
        case "START_ADDING_USER_REQUEST":
            return {
                ...state,
                currentUser: {},
                requesting: true
            }
        case "ADD_USER":
            return {
                ...state,
                currentUser: action.payload.user,
                requesting: false
            }
        case "REMOVE_USER":
            return {
                ...state,
                currentUser: {}
            }
        case 'LOGOUT':
            return{
                ...state,
                currentUser: {}
            }
        default: 
            return {...state};
    }
}



