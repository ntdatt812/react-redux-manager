import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchListUsers } from '../../redux/user/user.slide';



const UserTable = () => {
    const users = useAppSelector(state => state.user.listUser)
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
                {users?.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })}


            </tbody>
        </Table>
    );
}

export default UserTable;