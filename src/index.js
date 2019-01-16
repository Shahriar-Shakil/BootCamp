import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// const handle = '@SHAHRIAR'
// const name = 'shahriar'

// function NameComponent(props) {
//   return (<h1>{props.name}</h1>)
// }

// function HandleComponent(props) {
//   return <h3>{props.handle}</h3>

// }
// function App() {
//   return (
//     <div id='container'>
//       <NameComponent name={name} />
//       <HandleComponent handle={handle} />
//     </div>
//   )
// }

// cls 2 //

function Friendlist(props) {
  //console.log(props);
  return (
    <ul>
      {props.list.map(name => (
        <li key={name}>
          {name}
          <span>
            <button onClick={() => props.onRemoveFriend(name)}>Remove</button>
          </span>
        </li>
      ))}
    </ul>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ["shahriar", "kabir", "shakil"]
    };
    this.handleRemoveFriend = this.handleRemoveFriend.bind(this);
  }
  handleAddFriend() {}
  handleRemoveFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.filter(friend => friend !== name)
      };
    });
  }
  render() {
    return (
      <div>
        <Friendlist
          list={this.state.friends}
          onRemoveFriend={this.handleRemoveFriend}
          //setState={() => console.log("wuttt")}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Shahriar" />, rootElement);
