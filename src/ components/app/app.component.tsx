import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Header from '../header/header.component';
import Home from '../../pages/home/home.page';
import Detail from '../../pages/detail/detail.page';

import '../../common/styles';
import client from '../../common/apollo-client';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/detail/:detailId" component={Detail}/>
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;