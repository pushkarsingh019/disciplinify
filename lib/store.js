import {createStore, action, thunk} from "easy-peasy"
import axios from "axios"

// An exmaple of how we can fetch data and update the state according to the new data
/*
    const store = {message : ""}
    updateMessage : action((state, payload) => {
        state.message = payload
    }),
    fetchData : thunk(async (actions) => {
        const {data} = await axios.get("http://localhost:8080/");
        actions.updateMessage(data)
    })
*/

const store = createStore({
    userData : {},
    message : "",
    addUserData : action((state, payload) => {
        state.userData = payload
    }),
});

export default store;