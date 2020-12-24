import axios from 'axios'
import { useReducer, useEffect} from 'react'

const ACTIONS = {
    NAME_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

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
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true})

    useEffect(() => {
        dispatch({ type: ACTIONS.NAME_REQUEST })
        axios.get(BASE_URL, {
            params: { markdown: true, page: page, ...param}
        }).then(res => {
            dispatch({
                type: ACTIONS.GET_DATA,
                payload: { jobs: res.data }
            }).catch(e => {
                dispatch({
                    type: ACTIONS.ERROR, payload: {error: e}
                })
            })
        })
    }, [param, page])
    return state
}
