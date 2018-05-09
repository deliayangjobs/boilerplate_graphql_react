import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({}); // ApolloStore, have all the response data

const Root = () => {
  return (
      <ApolloProvider client={client}>
          <Router history={hashHistory}>
              <Route path="/" component={App}>
                  <IndexRoute component={SongList} />
                  <Route path="songs/new" component={SongCreate}></Route>
                  <Route path="songs/:id" component={SongDetail}></Route>
              </Route>
          </Router>
      </ApolloProvider> // glu layer between react and graphQL
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
