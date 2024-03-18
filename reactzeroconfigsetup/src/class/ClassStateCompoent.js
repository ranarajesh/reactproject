import React from "react";
export default class ClassStateComponent extends React.Component{
    // There are 3 ways to set initial state fo components

    // constructor(props){
    //     super(props);
    //     this.state = {  
    //         counter: props.counter,
    //     }
    // }
    // short form  ES2017
    state = {
        counter: this.props.counter
    }
    addState = ()=>{
        this.setState({counter: +this.state.counter + 1});
        this.setState({counter: +this.state.counter + 1});
        this.setState({counter: +this.state.counter + 1});

        //this.state = Object.assign(
        //   this.state,
        //   { counter: this.state.counter + 1 },
        //   { counter: this.state.counter + 1 },
        //   { counter: this.state.counter + 1 }
        // );
    }
    updateState = ()=>{
        this.setState((state) => {
            return {
              counter: state.counter + 1,
            };
          });
      
          this.setState((state) => {
            return {
              counter: state.counter + 1,
            };
          });
      
          this.setState((state) => {
            return {
              counter: state.counter + 1,
            };
          });

          // In some situations, it might be necessary to access the value of the modified state. Luckily, React offers the possibility to provide a second parameter in the setState() call. This parameter is a callback function that is called after the state has updated so that we can safely access the state we have just modified.

        //   this.setState(
        //     {
        //       time: new Date().toLocaleTimeString(),
        //     },
        //     () => {
        //       console.log('New Time:', this.state.time);
        //     }
        //    );
           
    }
    render(){
        const {counter} = this.state;
        return (<div>
            <span>{counter}</span>
            <button type="button" onClick={this.addState}>Add Sate</button>
            <button type="button" onClick={this.updateState}>updateState Sate</button>
        </div>)

    }
}