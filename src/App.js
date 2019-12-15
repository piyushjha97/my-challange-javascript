import React from 'react';
import './App.css';
  

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      alphabet: 'A',
      count : 0,
      add: []
    }
  }

  

  clickMe = event => {

    const add = this.state.add;
    const size = add.length + 1;

    add.push(size);
    this.setState({add});

    event.preventDefault();
    
         //document.getElementById("textInput1").className = "show pd-15 fn-bd";
        
  }

   
  handleEvent = () => {
    document.getElementById("arrowThing").className = "show disp-flx bg-lg";

    // this.setState({
    //   [event.target.name] : event.target.value
    // });
  }

  increaseAlphabet = () => {


         var c = this.state.alphabet;
         var d = String.fromCharCode(((c.charCodeAt(0) + 1 - 65) % 26) + 65);
         this.setState({alphabet:d})
  }

  decreaseAlphabet = () => {

         var c = this.state.alphabet;
         var d = String.fromCharCode(((c.charCodeAt(0) - 1 + 65) % 26) + 65);
         this.setState({alphabet:d})
  }

  increaseCount = () => {

    if(this.state.count === 9)
      this.setState({count:1})
    else
      this.setState({count: this.state.count + 1})

  }

decreaseCount = () => {

    if(this.state.count === 0)
      this.setState({count:9})
    else
      this.setState({count: this.state.count - 1})

  }

  addAll = () => {

    document.getElementById("textInput1").value = document.getElementById("textInput2").value + ' . ' + this.state.alphabet + ' . ' + this.state.count;
    document.getElementById("arrowThing").className = "hide";
     

  }

 render()
 {

  return ( 
    <div>
    <h1> Hello WOrld!!</h1>

         <div className = "abc"> 
            <button className = "pqr" id="addNewButton" onClick = {this.clickMe}>Add a new Picker</button>

            {this.state.add.map(index => {
              return (
              <input type="text" name="name" className="pd-15 fn-bd" id="textInput1" onClick = {this.handleEvent}/>
            );
            })}

             <div>
              <div className = "hide " id = "arrowThing">

               <input type="text" name="name" className ="pd-15" id="textInput2"/> 

                  <div className = "blocks bg-lg">
                      <div className = "arrow">
                          <button className = "fnt-45 mr-15 br-hd bg-tr" type = "button" onClick = {this.increaseAlphabet}> &#8963; </button>
                          <p>{this.state.alphabet}</p>
                          <button className = "fnt-45 mr-15 br-hd bg-tr" type = "button" onClick = {this.decreaseAlphabet}> &#8964; </button>
                      </div>

                      <div className = "arrow">
                         <button className = "fnt-45 mr-15 br-hd bg-tr" type = "button" onClick = {this.increaseCount}> &#8963; </button>
                           <p>{this.state.count}</p>
                        <button className = "fnt-45 mr-15 br-hd bg-tr" type = "button" onClick = {this.decreaseCount}> &#8964; </button>
                      </div>
                  </div>
                  <button type="submit" form="form1" value="Submit" onClick = {this.addAll}>Done</button>
              </div>
          </div>
        </div>

      </div>
  );
}
}

export default App;
