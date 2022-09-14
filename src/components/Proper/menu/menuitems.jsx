import React from 'react';
import Button from '../../Button/button';
import classNames from 'classnames/bind';
import styles from './menupoper.module.scss';

const cx = classNames.bind(styles);

export default function Menuitems({ data }) {
    return <Button className={cx('menu-item')} leftIcon={data.icon}>{data.title}</Button>;
}
