import 'react-app-polyfill/ie11';
import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../.';

const App: React.FC = () => {
  return (
    <div>
      <Button>
        test
      </Button>
    </div>
  );
};

ReactDOM.render(hot(<App />), document.getElementById('root'));
