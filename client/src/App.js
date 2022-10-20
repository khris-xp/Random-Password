import React, { Component } from 'react'
import './App.css';

class App extends Component {
  state = { passwords: [] }

  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  render() {
    const { passwords } = this.state;

    return (
      <div className="text-center font-tight w-full">
        {passwords.length ? (
          <div>
            <h1 className="font-tight text-[42px]">5 Passwords.</h1>
            <ul className="list-none p-0 text-[32px] mb-[2em]">
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button className="text-[32px] font-tight border-[2px] border-[solid] border-[#000] bg-[#fff] p-[10px_25px] hover:bg-[#FDD836] active:bg-[#FFEFA9]" onClick={this.getPasswords}>
              Get More
            </button>
          </div>
        ) : (
          <div>
            <h1 className="font-tight text-[42px]">No passwords :(</h1>
            <button
              className="text-[32px] font-tight border-[2px] border-[solid] border-[#000] bg-[#fff] p-[10px_25px] hover:bg-[#FDD836]"
              onClick={this.getPasswords}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default App;