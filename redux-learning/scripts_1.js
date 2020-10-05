
// Simple example of reducer implementation, redux store creation, 
// subscription to store, and dispatch call to store

const counter = (state=0, action) => {
    if(action.type === 'INCREMENT') {
        return state + 1;
    } else if(action.type === 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
}

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
    document.body.innerText = store.getState();
};

render();
store.subscribe(() => {
    render();
});

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});