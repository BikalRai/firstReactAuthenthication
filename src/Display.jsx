import React from 'react';

const Display = ({ userName, authenticated }) => {
    return (
        <>
            {authenticated ? (
                <li>{userName}</li>
            ) : (
                <>
                    <li>{userName} not Authorized</li>
                </>
            )}
        </>
    );
};

export default Display;
