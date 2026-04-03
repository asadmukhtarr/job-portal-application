import React from 'react'
import { useState, useEffect } from 'react';

export default function Test(props) {
    //const name = "Webeducatorz";
    const [title, setTitle] = useState("Hello Asad, Welcome to useState..");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // sample api .. https://692b046a7615a15ff24e757f.mockapi.io/users
    const [users, setUsers] = useState([]);
    const usersFetch = async () => {
        const response = await fetch("https://692b046a7615a15ff24e757f.mockapi.io/users");
        const data = await response.json();
        setUsers(data);
        // console.log("users data is here", data);
    }
    const submitForm = (e) => {
        e.preventDefault();
        let user = {
            email: email,
            password: password
        }
        console.log(user);
    }
    useEffect(function () {
        usersFetch();
    }, []);
    return (
        <div>
            <div className='container p-4'>
                <h2>Hello React Learning Point</h2>
                <ul>
                    <li>Installation</li>
                    <li>Components</li>
                    <li>Routes</li>
                    <li>Props : Example is : {props.home}</li>
                    <li>States: States are kind of variables which we use for store value, We use state for form handling , api handling</li>
                </ul>
                <hr />
                <h2>Examples :</h2>
                <div className='row'>
                    <div className='col-lg-4'>
                        <label>States</label> <br />
                        <input type="text" className='form-control' onKeyUp={(e) => setTitle(e.target.value)} />
                        <label>Title is : {title}</label>
                    </div>
                    <div className='col-lg-4'>
                        <form onSubmit={submitForm}>
                            <div className='card mt-3'>
                                <div className='card-header'>
                                    Login Here
                                </div>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type="text" onKeyUp={(e) => setEmail(e.target.value)} className='form-control' />
                                    </div>
                                    <div className='form-group'>
                                        <label>Password</label>
                                        <input type="password" onKeyUp={(e) => setPassword(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className='card-footer'>
                                    <button type='submit' className='btn btn-danger float-end'>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-header'>
                                Users
                            </div>
                            <div>
                                <table className='table table-bordered table-hover table-stripped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user) => (
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
