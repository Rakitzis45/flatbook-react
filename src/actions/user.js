export const loginUser = (user, history) => {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_USER_REQUEST" })
        const url = "http://localhost:3000/sessions"
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                user: user
            })
        })
            .then(resp => resp.json())
            .then(user => {
                dispatch({ type: "ADD_USER", payload: { user: user } })
                history.push(`/users/${user.id}`)
            })
    }
}