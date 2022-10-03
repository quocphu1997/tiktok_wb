import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import config from '../configs';

const HomeLayout = lazy(() => import('../layouts/home'));
const UploadLayout = lazy(() => import('../layouts/upload'));
const Following = lazy(() => import('../pages/following/following'));
const Home = lazy(() => import('../pages/home/home'));
const Profile = lazy(() => import('../pages/profile/profile'));
const Live = lazy(() => import('../components/Live/Live'));

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
                {
                    path: config.routes.live,
                    element: <Live />,
                },
            ],
        },
        {
            path: config.routes.upload,
            element: <UploadLayout />,
        },
    ]);

    return routing;
}
