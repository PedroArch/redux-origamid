import store from './store/configureStore.js'
import { tokenFetch } from './store/token.js';
import { userFetch } from './store/user.js';

const login = async (user) => {
  let state = store.getState();
  
  console.log(state);
  
  if (state.token.data === null) {
    await store.dispatch(tokenFetch(user))
  }

  state = store.getState();
  
  await store.dispatch(userFetch(state.token.data))
  
  state = store.getState();
  console.log(state)
}

login({username: 'dog', password: 'dog'})
