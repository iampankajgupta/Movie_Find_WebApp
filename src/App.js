import './App.css'
import HomePage from './Components/HomePage';
import Search from './Components/Search'
import { Switch, Route } from 'react-router-dom'
import NotFound from './Components/NotFound';
import Overview from './Components/Overview';
// import test from './test'
// import AllMovies from './AllMovies';
function App() {
  return (


    // <Overview/>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:id" component={Search} />
      <Route exact path="/:movie_id/overview" component={Overview} />
      {/* <Route exact path="/all__movies/search" component={AllMovies}/> */}
      <Route component={NotFound} />
      {/* <Route path="/" component={test}/> */}
    </Switch>
  );
}

export default App;
