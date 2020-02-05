import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import LoginRegister from '../components/Index';
import Home from '../components/Profile/Home'
import Movies from '../components/Profile/Movies'
import TVShows from '../components/Profile/TVShows'
import People from '../components/Profile/People'
import Favorites from '../components/Profile/Favorites'
import Watchlists from '../components/Profile/Watchlists'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={LoginRegister} exact={true} />
      <Route path='/home' component={Home} />
      <Route path='/movies' component={Movies} />
      <Route path='/tvshows' component={TVShows} />
      <Route path='/people' component={People} />
      <Route path='/favorites' component={Favorites} />
      <Route path='/watchlists' component={Watchlists} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter;