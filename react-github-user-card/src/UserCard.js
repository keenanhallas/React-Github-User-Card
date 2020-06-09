import React from "react";

class UserCard extends React.Component {    
    render() {
        return (
            <div className="userCard">
                <img src={this.props.imgUrl}/>
                <div>
                    <p>Username: {this.props.username}</p>
                    <p>Name: {this.props.name}</p>
                    <p>Bio: {this.props.bio}</p>
                    <p>Location: {this.props.location}</p>
                </div>
            </div>
        );
    }
}

export default UserCard;