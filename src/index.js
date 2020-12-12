import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>This is a basic React application</h1>, document.getElementById('root'));
//or use the following
const element = <div>A component renders the content here</div>;
ReactDOM.render(element, document.getElementById('root2'));
        //or you can use
/*
const element = <div>
    <span>Hello, </span>
    <span>Jane</span>
    </div>;
*/
        //or you can use
/*
const name = "Jane";
const element = <p>Hello, {name}</p>
*/
        //or you can use
/*
const user = {
  firstName: 'Jane',
  lastName: 'Doe'
}
const element = <p>Hello, {user.firstName} {user.lastName}</p>
*/