
// Implementing the store creator from scratch

const counter = (state=0, action) => {
    if(action.type === 'INCREMENT') {
        return state + 1;
    } else if(action.type === 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
}


// store creator
const createStore = (reducer) => {
    let state;
    let listeners = [];
    
    const getState = () => {
        return state;
    };
    
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => {
            listener();
        });
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => {
                return l !== listener;
            });
        };
    };

    dispatch({});

    return {
        getState,
        dispatch,
        subscribe
    };
};

// renderer to update dom with state
const render = () => {
    document.body.innerText = store.getState();
};


// counter specific store
const store = createStore(counter);

// do render for initial state
render();

// register render callback to counter store in order to get dom updates
store.subscribe(render);

// add click listener to dispatch counter store event on click
document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});