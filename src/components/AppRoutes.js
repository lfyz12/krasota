import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { routes } from '../Routes';
import Main from './Main';

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            <Route path='*' element={<Main/>}/>
        </Routes>
    );
};

export default AppRoutes;