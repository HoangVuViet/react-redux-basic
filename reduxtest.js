const { createStore } = require('redux');
// State
const initialState = [{ name: '', age: 0, job: '' }];
// Actions Creators
const ADD_USER = (payload) => {
  return { type: 'ADD_USER', payload: payload }; //Action : { type: 'ADD_USER', name: 'Hoang Vu', age: 20, job: 'Student' }
};
const UPDATE_USER = (payload) => {
  return { type: 'UPDATE_USER', payload: payload }; //Action: { type: 'UPDATE_USER', name: 'Hoang Vu', age: 20, job: 'Student' };
};
const DELETE_USER = (id) => {
  return { type: 'DELETE_USER', id: id }; //Action: { type: 'DELETE_USER', id:2 };
};
//root Reducers
let id = 1;
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: id++,
          name: action.payload.name,
          age: action.payload.age,
          job: action.payload.job,
        },
      ];
    case 'UPDATE_USER':
      return state.map((user) => {
        if (user.id !== action.payload.id) {
          return user;
        } else {
          return {
            ...user,
            name: action.payload.name || user.name,
            age: action.payload.age || user.age,
            job: action.payload.job || user.job,
          };
        }
      });
    case 'DELETE_USER':
      return state.filter((user) => user.id !== action.id);
    default:
      return state;
  }
};
//Store
const store = createStore(rootReducer, []);
// Subcription
store.subscribe(() => {
  console.log('Subcription', store.getState());
});
// Dispatching Action
store.dispatch(ADD_USER({ name: 'Hoang Vu', age: 20, job: 'Student' }));
store.dispatch(ADD_USER({ name: 'Hoang', age: 22, job: 'Intern' }));
store.dispatch(ADD_USER({ name: 'Vu', age: 25, job: 'Dev' }));
store.dispatch(UPDATE_USER({ id: 2, name: 'Vu Viet', age: 24, job: 'Gamer' }));
store.dispatch(DELETE_USER(2));
