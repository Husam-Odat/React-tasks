// UserList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';


function UserList({ users, loading, error, fetchUsers }) {
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
            <h1 className="my-4">User List</h1>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>phone</th>
                        {/* Add more table headings as needed */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                            {/* Add more table cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

const mapStateToProps = (state) => ({
    users: state.users,
    loading: state.loading,
    error: state.error,
});

const mapDispatchToProps = {
    fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
