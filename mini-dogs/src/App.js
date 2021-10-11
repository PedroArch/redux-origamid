import React from 'react';
import { useDispatch } from 'react-redux';
import Content from './components/Content';
import Header from './components/Header';
import { autoLogin } from './store/login';
import './styles/global.scss';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;