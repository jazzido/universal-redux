import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import createStore from './shared/create';
import { render as renderDevtools } from './client/devtools';

// dependencies of external source. these resolve via webpack aliases
// as assigned in merge-configs.js
import middleware from 'universal-redux/middleware';
import createRootClientComponent from 'universal-redux/rootClientComponent';

const dest = document.getElementById('content');

const store = createStore(middleware, browserHistory, window.__data);
const devComponent = renderDevtools();

// There is probably no need to be asynchronous here
createRootClientComponent(store, __PROVIDERS__, devComponent)
  .then((root) => {
    ReactDOM.render(root, dest);

    if (process.env.NODE_ENV !== 'production') {
      window.React = React; // enable debugger
      if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
        console.warn('WARNING: Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
      }
    }
  })
  .catch((err) => {
    console.error(err, err.stack);
  });
