import React, {useEffect, useReducer} from 'react'
import axios from "axios";

const initialMusicState = {
    data: {},
    flag: false
}

const firstLoding = async (url) => {
    const response = await axios.post(url, {});
    initialMusicState.data = response
}

const userReducer = (state, action) => {
    switch (action.type) {
        case 'nodata': {
            firstLoding('/piano/music/list/')
            return initialMusicState
        }
    }
}

export default function useRequest(props) {
    const [state, dispatchUser] = useReducer(userReducer, initialMusicState)

    if (props.type === 'nodata', props.data === {}) {
        dispatchUser({type: 'nodata'})
    }

    return state
}