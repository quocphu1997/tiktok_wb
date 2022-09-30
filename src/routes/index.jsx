import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomeLayout from '../layouts/home';
import UploadLayout from '../layouts/upload';
import Following from '../pages/following/following';
import Home from '../pages/home/home';
import Profile from '../pages/profile/profile';
import config from '../configs';

export default function Router() {
    const routing = useRoutes([
        {
            path: config.routes.home,
            element: <HomeLayout />,
            children: [
                {
                    path: config.routes.home,
                    element: <Home />,
                },
                {
                    path: config.routes.following,
                    element: <Following />,
                },
                {
                    path: config.routes.profile,
                    element: <Profile />,
                },
            ],
        },
        {
            path: config.routes.upload,
            element: <UploadLayout />,
        }
    ]);

    return routing;
}
