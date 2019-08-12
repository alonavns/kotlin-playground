import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

import KotlinPlayground from './KotlinPlayground';
import '../public/examples.scss'
import '../public/examples-highlight.scss'

const Index = () => {
  return <App>test</App>;
};

ReactDOM.render(<Index />, document.getElementById('kotlin-app'));

export default KotlinPlayground;