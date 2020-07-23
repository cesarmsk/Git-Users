//import { ADD_PERSON, FETCH_REPOS, ADD_USER, FETCH_USER } from './actions'
import { ADD_PERSON, FETCH_REPOS, ADD_USER } from './actions'

let initialState = []
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PERSON:
            let newPerson = action.payload
            //return [...state, newPerson]
            return [newPerson]
        case FETCH_REPOS:
            let newRepos = action.payload
            return newRepos
        case ADD_USER:
            let newUser = action.payload
            return newUser
        /*case FETCH_USER:
            let newUser = action.payload
            return newUser*/
        default:
            break;
    }
    return state
}
