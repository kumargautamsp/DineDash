import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props) {
        super(props);
       
    }

    componentDidMount(){
    }
    render() {

return (
    <div>
    <h1>About Class Component</h1>
    <div>
        loggedIn User
        <UserContext.Consumer>
            {({loggedInUser}) =>(
                 <h1 className="text-xl font-bold">{loggedInUser}
            </h1>
            )}
        </UserContext.Consumer>
    </div>
    <h2>This is Namaste Ract web Series</h2>
    <UserClass name={"Gautam Kumar(class)"} location={"Delhi class"} />
</div>
        );
    }
}



export default About;