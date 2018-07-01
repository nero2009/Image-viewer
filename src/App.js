import React, { Component } from 'react';
import NavBar from './components/Navbar/Navbar'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Search from './components/Search/Search'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar/>
          <Search/>
        </div>
      </MuiThemeProvider>
            
    );
  }
}

export default App;
