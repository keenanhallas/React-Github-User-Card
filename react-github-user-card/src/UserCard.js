import React from "react";

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
            <div className="userCard">
                <img src={this.props.imgUrl}/>
                <div>
                    <p>Username: {this.props.username ? this.props.username : "N/A"}</p>
                    <p>Name: {this.props.name ? this.props.name : "N/A"}</p>
                    <p>Bio: {this.props.bio ? this.props.bio : "N/A"}</p>
                    <p>Location: {this.props.location ? this.props.location : "N/A"}</p>
                </div>
            </div>
        );
    }
}

export default UserCard;