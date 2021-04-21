export const loginUser = (user, password, history) => {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_USER_REQUEST" })
        const url = "http://localhost:3000/sessions"
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
            .then(resp => resp.json())
            .then(user => {
                dispatch({ type: "ADD_USER", payload: { user: user } })
                history.push(`/users/${user.id}`)
            })
    }
}