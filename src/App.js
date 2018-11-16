// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemBox from './components/item-box';
import PureItemBox from './components/pure-item-box';
import ConnectedConsole from './components/console';

class App extends Component {
  state = {
    itemBoxSize: 3,
    pureItemBoxSize: 3,
    itemsLabel: 'ITEM',
    pureItemsLabel: 'PURE ITEM',
  }

  onChangeInt = ({ target }) => {
    const value = parseInt(target.value, 10);
    if (isNaN(value)) return;
    this.setState({
      [target.id]: parseInt(value, 10)
    });
  }

  onChangeText = ({ target }) => {
    this.setState({
      [target.id]: target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Component VS PureComponent </p>
        </header>
        <ConnectedConsole />
        <div className="container">
          <div className="components">
            <label htmlFor="itemBoxSize">Nb Components:</label>
            <input
              type="number"
              name="itemBoxSize"
              id="itemBoxSize"
              value={this.state.itemBoxSize}
              onChange={this.onChangeInt}
            />
            <label htmlFor="itemsLabel">Label:</label>
            <input
              type="text"
              name="itemsLabel"
              id="itemsLabel"
              value={this.state.itemsLabel}
              onChange={this.onChangeText}
            />
            <ItemBox size={this.state.itemBoxSize} itemsLabel={this.state.itemsLabel} />
          </div>
          <div className="pure-components">
            <label htmlFor="pureItemBoxSize">nb PureComponents</label>
            <input
              type="number"
              name="pureItemBoxSize"
              id="pureItemBoxSize"
              value={this.state.pureItemBoxSize}
              onChange={this.onChangeInt}
            />
           <label htmlFor="pureItemsLabel">Label:</label>
            <input
              type="text"
              name="pureItemsLabel"
              id="pureItemsLabel"
              value={this.state.pureItemsLabel}
              onChange={this.onChangeText}
            />
            <PureItemBox size={this.state.pureItemBoxSize} itemsLabel={this.state.pureItemsLabel} />
          </div>
        </div>
        <div className="description">
          <p>Each column is filled with component: <b>React.Component</b> on the left, <b>React.PureComponent</b> on the right.
            Modifying the number of elements in each column will not change the components <i>props</i>, but changing the label will do.
            Each time a component is render, a log is send in the upper output component.<br />
            You can see PureComponent are render only when a new one is created or when <i>props</i> are modified</p>
        </div>
      </div>
    );
  }
}

export default App;
