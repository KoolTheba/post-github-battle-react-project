import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { ThemeProvider } from './contexts/theme'

import Popular from './components/Popular'
import Battle from './components/Battle'
import Nav from './components/Nav'
import Result from './components/Results'

import './index.css'
class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark': 'light'
        }))
      }
    }
  }
  
  
  render(){
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav />
              <Switch>
                <Route exact path={'/'} component={Popular} />
                <Route exact path={'/battle'} component={Battle} />
                <Route path={'/battle/results'} component={Result} />
                <Route render={() => <h1>404</h1>}/>
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App;
