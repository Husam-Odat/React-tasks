import React from 'react';

function todolist() {
    return (
        <img
            className="avatar"
            src="https://i.imgur.com/1bX5QH6.jpg"
            alt="Lin Lanying"
            width={100}
            height={100}
        />
    );
}
// export default Avatar;
export default function Profile() {
    return (
        <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
            size={100} width={500} />
    );
}