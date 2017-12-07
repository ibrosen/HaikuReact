import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface CounterState {
    currentCount: number;
}



export class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{ this.state.currentCount }</strong></p>

            <button onClick={() => { this.incrementCounter() }}>Increment</button>

            <button onClick={() => { this.doStuff() }}>Increment</button>
        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
        
    async doStuff()
    {
        var result = await DoSomethingWithItems("hmmm");
        console.log(result);
    }


   


    
}



async function DoSomethingWithItems(s: string) {

    var myLine = "http://deathintombstone.ap-southeast-2.elasticbeanstalk.com/api/dbaccess" + "/initialisecharacter";
    console.log(myLine);
    var result = await fetch(myLine, {
        method: 'GET',
    });
    var json = await result.json();
    console.log(json)
    return json;
   
}
