export const loginUser = (user, password) => {
    return (dispatch) => {
        dispatch({type: "START_ADDING_USER_REQUEST"})
        const url = "http://localhost:3000/users"
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: user,
                password: password
            })
        })
    }
}