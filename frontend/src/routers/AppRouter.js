import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Users from '../component/users';
import Header from '../component/header';
import CreateUser from '../component/createUser';

const AppRouter =() =>{
    return(
        <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={Users}/>
            <Route path="/createUser" component= {CreateUser} />
           
        </Switch>
        </div>
        </BrowserRouter>
    );
};
export default AppRouter;