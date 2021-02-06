import React from 'react';

import GlobalStyle from './styles/styles';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
