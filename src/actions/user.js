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

export const signupUser = (user, history)=>{
    return(dispatch)=>{
        dispatch({ type: "START_ADDING_USER_REQUEST" })
        const url = "http://localhost:3000/signup"
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
                // debugger
                dispatch({ type: "ADD_USER", payload: { user: user } })
                history.push(`/users/${user.id}`)
            })
    }
}

export const checkLoggedIn = ()=>{
    return (dispatch) =>{
        const url = "http://localhost:3000/logged_in"
        fetch(url,{
            credentials: 'include'
        }).then(resp => resp.json()).then(user=>{
            // debugger
            dispatch({ 
                type: "ADD_USER",
                payload: {user: user}
             })
        })
    }
}

export const logout = (history)=>{
    return(dispatch) =>{
        const url = "http://localhost:3000/logout"
        fetch(url, {
            method: 'DELETE', 
            credentials: 'include'
        }).then(resp=>resp.json()).then(json =>{
            dispatch({type: 'LOGOUT'})
            history.push('/')
        })

    }
}




