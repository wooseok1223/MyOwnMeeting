import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path ="/" component={App}>
    </Route>
  </Router>,
  document.getElementById('root')
);

