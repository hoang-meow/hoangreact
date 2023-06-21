import React, { useState,useEffect } from 'react';
import TodoList from '../../components/TodoList';
import { useLocation, useNavigate , createSearchParams, Outlet } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {

};

function ListPage(props) {
    const initodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/4/a/5/a4a5f7d375e373d2856aa75185e5a615.jpg'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/3/c/8/53c8e5053f0ec4b5a2bed26c37a27c73.jpg'
        },
        {
            id: 3,
            title: 'wc',
            status: 'new',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/2/e/3/92e34e8a92ba589ba41c078bfbbf57f0.jpg'
        },
    ]

    const location = useLocation();
    const navigate  = useNavigate ();
    const [todoList, setTodoList] = useState(initodoList);
    const [fillters, setFillters] = useState(() => {
        const params = queryString.parse(location.search)
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search)
        setFillters(params.status || 'all');
    },[location.search])
    const handleTodoClick = (todo, idx) => {
        console.log(todo, idx);

        const newTodoList = [...todoList];
        console.log('todoList', todoList);
        console.log('newTodoList', newTodoList);
        // toggle status
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',

        }
        console.log(newTodoList[idx].status)


        // update status states
        setTodoList(newTodoList);

    }
    const handleShowAllClick = () => {
        // setFillters('all');
        navigate({
            pathname: "",
            search: createSearchParams({
                status: "all"
            }).toString()
        })
    }
    const handleShowCompletedClick = () => {
        // setFillters('completed');
        navigate({
            pathname: "",
            search: createSearchParams({
                status: "completed"
            }).toString()
        })
    }
    const handleShowNewClick = () => {
        // setFillters('new')
        navigate({
            pathname: "",
            search: createSearchParams({
                status: "new"
            }).toString()
        })
    }
    const renderTodo = todoList.filter((todo) => fillters === 'all' || fillters === todo.status);
    // console.log(renderTodo)
    const handleTodoFormSubmit = (values) => {
        console.log('form submit', values)
    }
    return (
        <div>
            <h3> what to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>todo List</h3>
            <TodoList todoList={renderTodo} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick} >Show All</button>
                <button onClick={handleShowCompletedClick} >Show Completed</button>
                <button onClick={handleShowNewClick} >Show New</button>
            </div>
          
          
            <Outlet></Outlet>
        </div>
    );
}

export default ListPage;