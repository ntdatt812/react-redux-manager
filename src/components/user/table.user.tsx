import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useAppDispatch } from '../../redux/hooks';
import { fetchListUsers } from '../../redux/user/user.slide';

interface IUser {
    id: number;
    name: string;
    email: string;
}

const UserTable = () => {

    const [users, setUsers] = useState<IUser[]>([]);


    // const fetchUsers = async () => {
    //     const res = await fetch("http://localhost:8000/users");
    //     const data = await res.json();
    //     setUsers(data)
    // }

    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchListUsers())
    }, [])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users?.map(users => {
                    return (
                        <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                        </tr>
                    )
                })}


            </tbody>
        </Table>
    );
}

export default UserTable;