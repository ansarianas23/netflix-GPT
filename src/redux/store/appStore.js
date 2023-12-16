import { configstore } from "firebase-tools/lib/configstore";
import userReducer from "../userSlice/userSlice"

const appStore = configstore({
    reducer:{
        user: userReducer
    }
})

export default appStore