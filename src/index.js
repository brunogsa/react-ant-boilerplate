import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import IndexPage from './pages/IndexPage';

const render = Component => {
  ReactDOM.render(

    <AppContainer>
      <Component />
    </AppContainer>,

    document.getElementById('root'),
  );
};

render(IndexPage);

if (module.hot) {
  module.hot.accept('./pages/IndexPage', () => {
    const newApp = require('./pages/IndexPage').default;
    render(newApp);
  });
}
