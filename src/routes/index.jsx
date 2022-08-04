import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomeLayout from '../layouts/home';
import UploadLayout from '../layouts/upload';
import Following from '../pages/following/following';
import Home from '../pages/home/home';
import Profile from '../pages/profile/profile';

export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/following',
                    element: <Following />,
                },
                {
                    path: '/profile',
                    element: <Profile />,
                    children:[{
                        
                    }]
                },
            ],
        },
        {
            path: '/upload',
            element: <UploadLayout />,
        }
    ]);

    return routing;
}
