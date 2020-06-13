import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props){
            axios
                .get(`${this.props.usersUrl}`)
                .then(res => {
                    this.setState({
                        users: res.data
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    render() {
        return (
            <div className="userDiv">
                {this.state.users.map((user, i) => {
                    return (
                        <UserCard
                            key={i}
                            imgUrl={user.avatar_url}
                            username={user.login}
                            name={user.name}
                            bio={user.bio}
                            location={user.location}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Users;