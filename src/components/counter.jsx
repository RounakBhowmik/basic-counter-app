import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count :0,
        
    };

    handleIncreament = product =>{
        console.log(product);
        this.setState({count:this.state.count +1})
       // console.log("Increament Clicked",this)
    };

    render() { 
       
        return ( 
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>   
            <button onClick={(product) => this.handleIncreament(product)} 
            className="btn btn-secondary btn-sm">
            Increament
            </button>
            </div>
        );
     } 

     getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;  
    }  

     formatCount(){
         const { count } = this.state;
         return count === 0 ? <h1>{"Zero"}</h1> : count;
     }
}
 
export default Counter ;  