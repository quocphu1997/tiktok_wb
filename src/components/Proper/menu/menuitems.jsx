import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/button';
import classNames from 'classnames/bind';
import styles from './menupoper.module.scss';

const cx = classNames.bind(styles);

export default function Menuitems({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

Menuitems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
