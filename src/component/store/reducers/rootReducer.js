const initState = {
    users: [
        { id: 1, name: 'kien 1' },
        { id: 2, name: 'kien 2' },
        { id: 3, name: 'kien 3' },
    ],
    todos: [
        { id: 1, todo: 'todo 1' },
        { id: 2, todo: 'todo 2' },
        { id: 3, todo: 'todo 3' },
    ],
    shops: [
        { id: 1, name: 'Iphone 1', price: 10 },
        { id: 2, name: 'Iphone 2', price: 20 },
        { id: 3, name: 'Iphone 3', price: 30 },
        { id: 4, name: 'Iphone 4', price: 40 },
        { id: 5, name: 'Iphone 5', price: 50 },
        { id: 6, name: 'Iphone 6', price: 60 }
    ],
    myCart: []
}

const rootReducers = (state = initState, action) => {
    switch (action.type) {

        /* --------------------------REDUX_USER -------------------------- */

        case 'DELETE_USER':
            // console.log('Delete User', action);
            var users = state.users;
            users = users.filter(item => item.id !== action.payload)
            return { ...state, users };

        case 'ADD_USER':
            // console.log('Add User ===> ', action.payload.id);
            // console.log('Add User ===> ', action.payload.name);
            let user = {
                id: action.payload.id,
                name: action.payload.name
            }
            return { ...state, users: [...state.users, user] };

        case 'UPDATE_USER':
            // console.log(action.payload.id);
            // console.log(action.payload.name);

            for (let i = 0; i < state.users.length; i++) {
                if (state.users[i].id == action.payload.id) {
                    state.users[i].name = action.payload.name
                }
            }
            // console.log('new item ==> ', state.users);
            return { ...state, users: [...state.users] };





        /* -------------------------- REDUX_TODO -------------------------- */

        case 'DELETE_TODOS':
            // console.log('Delete Todos', action);
            var todos = state.todos;
            todos = todos.filter(item => item.id !== action.payload)
            return { ...state, todos };

        case 'ADD_TODOS':
            // console.log('Add User ===> ', action.payload.id);
            // console.log('Add User ===> ', action.payload.todos);
            let todo = {
                id: action.payload.id,
                todo: action.payload.todos
            }
            return { ...state, todos: [...state.todos, todo] };

        case 'UPDATE_TODOS':
            // console.log('check ==> ', action.payload.id);
            // console.log('check ==> ', action.payload.todo);

            for (let i = 0; i < state.todos.length; i++) {
                if (state.todos[i].id == action.payload.id) {
                    state.todos[i].todo = action.payload.todo
                }
            }

            // console.log(state.todos);
            return { ...state, todos: [...state.todos] };





        /* -------------------------- REDUX_CART -------------------------- */
        case 'ADD_PRODUCT':

            const newProduct = state.shops.find((item) => {
                return item.id === action.payload;
            })

            const checkEmpty = state.myCart.find((item) => {
                return item.id == newProduct.id;
            })

            if (checkEmpty == null) {
                return { ...state, myCart: [...state.myCart, newProduct] };
            }

            if (checkEmpty != null) {
                alert("Sản phẩm đã tồn tại");
            }

        case 'DELETE_PRODUCT':

            var newCart = state.myCart.filter(item => item.id !== action.payload)
            console.log(newCart);

            return { ...state, myCart: [...newCart] };



        default:
            return state;
    }
}
export default rootReducers