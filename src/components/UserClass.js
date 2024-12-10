import React from "react"
import About from "./About";
class UserClass extends React.Component {

    //constructor for recieve props
    constructor(props) {
        super(props);

        console.log(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"",

            }  
        }
        //console.log(this.props.name+"constructor called");
    }

    async componentDidMount(){
        console.log(this.props.name+"Component mounted");
        const data=await fetch("https://api.github.com/users/Abhijeet912");
        const json=await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
        
    }
    
    
    
    render(){
        console.log(this.props.name+"Component rendered");
        const {name,location,avatar_url}=this.state.userInfo;
        
        return(
        <div className="user-profile">
            <img className="avatar" src={avatar_url} alt="User Avatar" />
                <div className="user-details">
                    <h2>Name: {name}</h2>
                    <h4>Location: {location}</h4>
                 </div>
            </div>
        );
    }

}
export default UserClass;