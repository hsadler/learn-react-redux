
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

store.subscribe(() => {
    document.body.innerText = store.getState();
});

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});