import notes from './modules/notes';
import { createStore } from 'vuex'



export const store = createStore({
    modules: {
        notes
    }
});
