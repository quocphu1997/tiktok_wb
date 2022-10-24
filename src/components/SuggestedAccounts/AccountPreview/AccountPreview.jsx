import React from 'react';
import classNames from 'classnames/bind';
import styles from '../AccountPreview/AccountPreview.module.scss';

const cx = classNames.bind(styles);
export default function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src="" alt="" />
            </header>
        </div>
    );
}
