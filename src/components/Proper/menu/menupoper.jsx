import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './menupoper.module.scss';
import { wrapper as PopperWrapper } from '..';
import Menuitems from './menuitems';
import Headermenu from './headermemu';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};
export default function Menupoper({ children, hideOnClick = false, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; // convert boonlearn
            return (
                <Menuitems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                            document.body.classList.add(cx('lock-scroll'));
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((pre) => pre.slice(0, pre.length - 1));
        if (history.length < 3) {
            document.body.classList.remove(cx('lock-scroll'));
        }
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-poper')}>
                {history.length > 1 && <Headermenu title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}> {renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    // reset to first page
    const handleResetMenu = () => {
        setHistory((pre) => pre.slice(0, 1));
        document.body.classList.remove(cx('lock-scroll'));
    };
    return (
        <Tippy
            interactive
            placement="bottom-end"
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            offset={[12, 6]}
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menupoper.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
