import React,{ Component } from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.intervel = setInterval(()=>{ console.log('intervel')},1000)
        console.log('componentDidMount')
    }
    componentDidUpdate(prevProps, prevState){
        console.log('updated')
    }
    componentWillUnmount(){
        clearInterval(this.intervel)
        console.log('unmounted');
    }
    render(){
        return (
            <div>
                <h1>Profile page .......!</h1>
            </div>
            )
    }
}

export default Profile;