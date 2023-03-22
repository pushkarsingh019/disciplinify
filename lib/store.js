import {createStore, action} from "easy-peasy"

const store = createStore({
    userData : {},
    addUserData : action((state, payload) => {
        state.userData = payload
    }),
});

export default store;