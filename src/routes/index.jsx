import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomeLayout from '../layouts/home';
import UploadLayout from '../layouts/upload';
import Following from '../pages/following/following';
import Home from '../pages/home/home';
import Profile from '../pages/profile/profile';
import routesConfig from '../configs/routes';

export default function Router() {
    const routing = useRoutes([
        {
            path: routesConfig.home,
            element: <HomeLayout />,
            children: [
                {
                    path: routesConfig.home,
                    element: <Home />,
                },
                {
                    path: routesConfig.following,
                    element: <Following />,
                },
                {
                    path: routesConfig.profile,
                    element: <Profile />,
                },
            ],
        },
        {
            path: routesConfig.upload,
            element: <UploadLayout />,
        }
    ]);

    return routing;
}
