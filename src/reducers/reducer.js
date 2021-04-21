export default function reducer(state = { currentUser: {} }, action) {
    switch (action.type) {
        case "START_ADDING_USER_REQUEST":
            return {
                ...state,
                user: {},
                requesting: true
            }
        case "ADD_USER":
            return {
                ...state,
                user: action.payload.user,
                requesting: false
            }
        case "REMOVE_USER":
            return {
                ...state,
                user: {}
            }
        default: 
            return state;
    }
}