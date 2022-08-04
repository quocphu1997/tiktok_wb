import React from 'react';
import { Outlet } from 'react-router-dom';
import Upload from '../pages/upload/upload';

export default function UploadLayout() {
    return (
        <>
            <Upload/>
            <Outlet />
        </>
    );
}
