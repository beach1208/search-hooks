import { useReducer } from 'react'

const ACTIONS = {
    NAME_REQUEST = 'make-request',
    GET_DATA = 'get-data',
    ERROR: 'error'
}

function reducer(state,action) {
    switch(action.type){
        case ACTIONS.NAME_REQUEST:
            return {...state, loading: true, jobs: []}
        case ACTIONS.GET_DATA:
            return {...state, jobs: false, jobs: action.payload.jobs}
        case ACTIONS.ERROR:
            return {...state, error: false, jobs: []}
        default:
            return state
        
    }
}

export default function useFetchJob(param,page){
    return{
        jobs: [1,2,4],
        loading: false,
        error: false
    }
}