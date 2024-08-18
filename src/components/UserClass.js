import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);

      this.state={
        userInfo : {
            name:"Dummy",
            location: "Default",
        },
      };
      
    }

 async componentDidMount(){
    //api calls

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
        userInfo: json,
    });

    console.log(json);
}

componentDidUpdate(){
    console.log("Component did update");
}

componentWillUnmount(){
    console.log("component will unmount");
}

render() {


const {name,location,avatar_url} = this.state.userInfo;

return (
    <div className="User-card">
        <img src={avatar_url}/>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@kumargautamsp</h4>
    </div>
);
}
}

export default UserClass;



/**
 * 
 * 
 * -Mounting-
 * 
 * constructor(dummy)
 * rener(dummy)
 * <html dummy>
 * component did mount
 * <api call>
 * <this.setstate> -> state variable is called
 * 
 * --UPDATE
 * 
 * render (Api data)
 * <HTML (new api data>)
 * component did update
 * 
 * 
 * 
 */