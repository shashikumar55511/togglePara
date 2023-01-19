import React from "react";
class Toggle extends React.Component{
    constructor(){
        super();
        this.state={
            selectedThem:"dark"
        };
    }
    render(){
        const changeTheme=()=>{
            this.setState({
                selectedThem:this.state.selectedThem==="dark"?"light":"dark"
            });
        };
    return(
        <div style={{backgroundColor:this.state.selectedThem==="dark"?"black":"white",
        color:this.state.selectedThem==="dark"?"white":"red",
        height:"100vh"}}>
            <button onClick={changeTheme}>toggle theme</button>
            <p>shashi{this.state.selectedThem}</p>
        </div>

    );
}
}
export default Toggle;