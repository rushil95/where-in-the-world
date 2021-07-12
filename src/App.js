import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Country from './pages/country'
import Header from './features/Header/Header'
import GlobalStyles from './GlobalStyles'
import ThemeProvider from './features/Theme/ThemeProvider'
import styled from 'styled-components/macro'

const AppContainer = styled.div`
min-height : 100vh;
display : grid;
grid-template-rows : auto 1fr;
`

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <AppContainer>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/country/:name" component={Country} />
            </Switch>
          </AppContainer>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
