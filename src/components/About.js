import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

    constructor(props){
        super(props);
        //console.log("Parent constructor called");
    }
    componentDidMount() {
        console.log("Parent component Mounted");
    }
    render() {
        //console.log("Parent component rendered");
        return (
            <div>
                <h1>This is a demo website to practice my React</h1>
                <h2>For this Swiggy website, I have used the Swiggy API.</h2>
                <UserClass 
                    name="Abhijeet Anand (class)" 
                    location="Purnea" 
                    contact="abhi@gmail.com" 
                />
            </div>
        );
    }
}

export default About;