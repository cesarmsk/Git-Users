// Action Types
export const FETCH_REPOS = "FETCH_REPOS"
export const ADD_PERSON = "ADD_PERSON"
//export const FETCH_USER = "FETCH_USER"
export const ADD_USER = "ADD_USER"

// Action Creators
export function fetchRepos(repos) {
    // Action
    return {
        type: FETCH_REPOS,
        payload: repos
    }
}

export function addPerson(person) {
    return {
        type: ADD_PERSON,
        payload: person
    }
}

/*
export function fetchUser(user) {
    // Action
    return {
        type: FETCH_USER,
        payload: users
    }
}
*/


export function addUSER(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}


