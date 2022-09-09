import React, { useState } from 'react'
import { connect } from 'react-redux'

function Todos(Props) {

    const [index, setIndex] = useState()
    const [todo, setTodo] = useState('')
    const [show, setShow] = useState(true)


    // console.log(Props.dataRedux);
    var listTodo = Props.dataRedux

    const handleAddTodo = () => {
        var obj = {
            id: (listTodo.length + 1),
            todos: todo
        }
        Props.addTodosRedux(obj)
        setTodo('')
    }
    const handleDeleteTodos = (id) => {
        Props.deleteTodosRedux(id)
    }

    const handleUdateTodos = (index) => {

        const find = listTodo.find((todo) => {
            /* Trả về data đầu tiên tìm thấy */
            return todo.id === index;
        })

        setTodo(find.todo)
        setIndex(index)
        setShow(false)
    }

    const handleEditTodo = () => {
        var obj = {
            id: index,
            todo: todo
        }
        Props.updateTodosRedux(obj)
        setShow(true)
        setTodo('')
    }

    return (
        <div>
            <h2>Todos</h2>
            <input
                placeholder='Enter todo'
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            {show ? (<button onClick={handleAddTodo}>ADD</button>) :
                (<button onClick={handleEditTodo}>EDIT</button>)}

            {listTodo.map((item) => {
                return (
                    <p key={item.id}>
                        <span onClick={() => handleUdateTodos(item.id)}>{item.todo}</span>
                        -
                        <span onClick={() => handleDeleteTodos(item.id)}>&times;</span>
                    </p>
                )
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodosRedux: (id) => dispatch({ type: 'DELETE_TODOS', payload: id }),
        addTodosRedux: (obj) => dispatch({ type: 'ADD_TODOS', payload: obj }),
        updateTodosRedux: (obj) => dispatch({ type: 'UPDATE_TODOS', payload: obj })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)