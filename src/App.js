import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar'
import ProductList from './components/ProductList'

import { Grommet, Box, TextInput } from 'grommet';

class App extends Component {

  state = {
    query: ''
  }

  onSearchChange = (event) => {
    this.setState({ "search": event.target.value });
  }
  render() {
    return (
      <div className="App">
        <Box direction="column" fill>
          <AppBar />
          <Box direction="row" pad="medium" fill >
            <Box width="medium">
              <Box direction="row" basis="medium" pad="small">
                <TextInput
                  placeholder="Search here"
                  value={this.state.query}
                  onChange={(e) => this.setState({ query: e.target.value })}
                />
              </Box>
            </Box>
            <Box flex>
              <ProductList search={this.state.query} />
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}

export default App;
