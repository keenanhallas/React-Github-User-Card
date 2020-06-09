import React from "react";

const UserCard = props => {
    return (
        <div className="userCard">
            <img src={props.imgUrl}/>
            <div>
                <p>Username: {props.username}</p>
                <p>Name: {props.name}</p>
                <p>Bio: {props.bio}</p>
                <p>Location: {props.location}</p>
            </div>
        </div>
    );
}

export default UserCard;