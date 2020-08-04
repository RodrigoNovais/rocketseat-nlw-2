import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />

            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes
