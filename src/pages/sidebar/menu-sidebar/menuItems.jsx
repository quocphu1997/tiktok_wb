import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './menuSidebar.module.scss';

const cx = classNames.bind(styles);

export default function MenuItems({ title, to, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('menu-items', { active: nav.isActive })} to={to}>
            <span className={cx('menu-icon-tilte')}>{icon}</span>
            <span className={cx('menu-activeIcon-tilte')}>{activeIcon}</span>
            <span className={cx('menu-items-tilte')}>{title}</span>
        </NavLink>
    );
}

MenuItems.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};
