import React, { Component } from 'react';
import Item from './Item';

class App extends Component {
  state = {
    list: [],
    currentItem: ''
  }

  componentDidMount() {
    this.setState({ list: ["leche", "huevo"] })
  }

  saveCurrentItem = evt => {
    const itemValue = evt.target.value;
    this.setState({ currentItem: itemValue })
  }

  saveItemInList = () => {
    const { currentItem, list } = this.state;
    list.push(currentItem);
    this.setState({ list })
  }

  render() {

    return (<div>
      <h1>Lista del mercado</h1>
      {
        this.state.list.map(
          (item, index) => <Item nombre={item} indice={index + 1} />
        )
      }
      <label>Nuevo Item</label>
      <input type="text" onChange={evt => this.saveCurrentItem(evt)} />
      <button type="submit" onClick={this.saveItemInList}>Agregar</button>
    </div>);
  }
}

export default App;