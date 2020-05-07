import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const{location, history} = this.props;
        console.log(location.state)
        if(location.state === undefined){
            history.push("/")
        }
    }
    render(){
        const { location }= this.props;
        if(location.state){
            console.log(location.state.title)
            return <div>{location.state.title}</div>
        }else{
            return null;
        }
        
    }
}    

export default Detail;