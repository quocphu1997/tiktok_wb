import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './menupoper.module.scss';
import { wrapper as PopperWrapper } from '../../Proper';
import Menuitems from './menuitems';


const cx = classNames.bind(styles);
export default function Menupoper({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <Menuitems key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0,700]}
            // visible
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-poper")}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
