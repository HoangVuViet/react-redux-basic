const { createStore } = require('redux');
// Actions
const ADD_USER = (payload) => {
  return { type: 'ADD_USER', payload: payload };
};
const UPDATE_USER = (payload) => {
  return { type: 'UPDATE_USER', payload: payload };
};
//Reducers
let id = 1;
const user = (state, action) => {
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
    default:
      return state;
  }
};
//Store
const store = createStore(user, []);
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(ADD_USER({ name: 'Hoang Vu', age: 20, job: 'Student' }));
store.dispatch(ADD_USER({ name: 'Hoang', age: 22, job: 'Intern' }));
store.dispatch(ADD_USER({ name: 'Vu', age: 25, job: 'Dev' }));
store.dispatch(
  UPDATE_USER({ id: 2, name: 'Vu Viet', age: 24, job: 'Student' })
);
