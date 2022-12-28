import React from 'react';
import Display from './Display';

const User = () => {
    const users = [
        {
            id: 1,
            name: 'Tom',
            isAuthenticated: true,
        },
        {
            id: 2,
            name: 'Sally',
            isAuthenticated: true,
        },
        {
            id: 3,
            name: 'Michael',
            isAuthenticated: false,
        },
        {
            id: 4,
            name: 'Mary',
            isAuthenticated: false,
        },
    ];
    return (
        <>
            <ul>
                {users.map((user) => (
                    <Display
                        userName={user.name}
                        key={user.id}
                        authenticated={user.isAuthenticated}
                    />
                ))}
            </ul>
        </>
    );
};

export default User;
