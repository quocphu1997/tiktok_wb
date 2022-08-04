import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

export default function HomeLayout() {
    return (
        <>
            <Header/>
            <Sidebar />
            <Outlet />
        </>
    );
}
