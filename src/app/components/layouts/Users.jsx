import { Link, useParams, Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import EditUserPage from '../EditUserPage';
import UserPage from '../UserPage';
import UsersListPage from '../UsersListPage';

const Users = () => {
    const params = useParams();
    const { userId } = params;
    let { path } = useRouteMatch();

    return (
        <>
            <div>Users Layout</div>
            <Switch>
                <Route path={path + '/profile'} component={UserPage} />
                <Route path={path + '/edit'} component={EditUserPage} />
                <Route exact path="/users" component={UsersListPage} />
                <Redirect from="*" to={path + userId + '/profile'} />
            </Switch>
        </>
    );
};

export default Users;
