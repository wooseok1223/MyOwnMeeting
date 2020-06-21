import React from 'react';
import ReactDOM from 'react-dom';
import App ,{Home, First} from './App'
// import { Router, Route, browserHistory,IndexRoute } from 'react-router';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path ="/" component={App}>
//         <IndexRoute component={Home}/>
//         <Route path="first" component={First}/>
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );

