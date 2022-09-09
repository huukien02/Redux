import React, { useState } from 'react'
import { connect } from 'react-redux'

function Users(Props) {
    const [show, setShow] = useState(true)
    const [index, setIndex] = useState()
    const [todo, setTodo] = useState('')


    var listUser = Props.dataRedux;

    const handleAddUser = () => {
        var obj = {
            id: (listUser.length + 1),
            name: todo
        }
        Props.addUserRedux(obj)
        setTodo('')
    }
    const handleDeleteUser = (index) => {
        Props.deleteUserRedux(index)
    }

    const handleUpdateUser = (index) => {
        setIndex(index)
        const find = listUser.find((user) => {
            /* Trả về data đầu tiên tìm thấy */
            return user.id === index;
        })
        setTodo(find.name)
        setShow(false)
    }

    const handleEditUser = () => {
        var obj = {
            id: index,
            name: todo
        }
        Props.updateUserRedux(obj)
        setShow(true)
        setTodo('')
    }


    return (
        <div>
            <h2>Users</h2>
            <input
                placeholder='Enter todo'
                onChange={e => setTodo(e.target.value)}
                value={todo}
            />
            {show ? (<button onClick={handleAddUser}>ADD</button>) :
                (<button onClick={handleEditUser}>EDIT</button>)}


            {listUser.map((item, index) => {
                return (
                    <p key={index}>
                        <span onClick={() => handleUpdateUser(item.id)}>{item.name}</span>
                        -
                        <span onClick={() => handleDeleteUser(item.id)}>&times;</span>
                    </p>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (id) => dispatch({ type: 'DELETE_USER', payload: id }),
        addUserRedux: (obj) => dispatch({ type: 'ADD_USER', payload: obj }),
        updateUserRedux: (obj) => dispatch({ type: 'UPDATE_USER', payload: obj })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)