import React from "react";
import styled from 'styled-components';

const FullCard = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    margin: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfileImg = styled.img`
    width: 90%;
    height: auto;
    margin: 3%;
    border-radius: 10px;
`

class UserCard extends React.Component {    
    constructor() {
        super();
        this.state = {};
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.setState({...this.props});
        }
    }
    
    render() {
        console.log(this.props);
        return (
            <FullCard className="userCard">
                <ProfileImg src={this.props.imgUrl}/>
                <div>
                    <p>Username: {this.props.username ? this.props.username : "N/A"}</p>
                    <p>Name: {this.props.name ? this.props.name : "N/A"}</p>
                    <p>Bio: {this.props.bio ? this.props.bio : "N/A"}</p>
                    <p>Location: {this.props.location ? this.props.location : "N/A"}</p>
                </div>
            </FullCard>
        );
    }
}

export default UserCard;