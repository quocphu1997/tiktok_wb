import React from 'react';
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';

import styles from './home.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../pages/sidebar/sidebar';

const cx = classNames.bind(styles);

export default function HomeLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

