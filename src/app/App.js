import { Redirect, Route, Switch } from 'react-router-dom';
import Users from './components/layouts/Users';
import MainPage from './components/MainPage';

function App() {
    return (
        <div className="App">
            <h1>
                App Layout
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/users/:userId?" component={Users} />
                    <Redirect from="*" to="/" />
                </Switch>
            </h1>
        </div>
    );
}

export default App;
