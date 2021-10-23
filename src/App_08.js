import logo from './logo.svg';
import './App_08.scss';
import { Switch, Route } from 'react-router-dom';
import Homepage_08 from './pages/Homepage_08';
import ShopTwoPage_08 from './pages/ShopTwoPage_08';
import ContactPage_08 from './pages/ContactPage_08';
import SigninPage_08 from './pages/SigninPage_08';
import Header_08 from './components/Header_08';

function App_08() {
  return (
    <div>
      <Header_08 />
      <Switch>
        <Route exact path='/' component={Homepage_08} />
        <Route exact path='/shop_08' component={ShopTwoPage_08} />
        <Route exact path='/contact_08' component={ContactPage_08} />
        <Route exact path='/signin_08' component={SigninPage_08} />
      </Switch>
    </div>
  );
}

export default App_08;
