import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import UsersPage from './pages/UsersPage';
import { actions } from './slices';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(actions.userInit({ isGuest: false }));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className='container py-3'>
        <Switch>
          <Route path='/' exact component={AuthPage} />
          <Route path='/users' component={user.isGuest ? AuthPage : UsersPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
