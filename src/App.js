import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { client } from './apollo';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import Main from './Main';

const App = () =>  {
    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <Router>
                    <Switch>
                        <Route path="/" component={Main}/>
                        <Route path="/:id" component={Main}/>
                    </Switch>
                </Router>
            </ApolloProvider>
        </ThemeProvider>
    )
}

export default App;
