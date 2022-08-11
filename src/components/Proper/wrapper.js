import React from 'react';
import classNames from 'classnames/bind';
import styles from './proper.module.scss';

const cx = classNames.bind(styles);

export default function wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}
