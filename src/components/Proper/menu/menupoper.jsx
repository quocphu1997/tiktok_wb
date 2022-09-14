import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './menupoper.module.scss';
import { wrapper as PopperWrapper } from '..';
import Menuitems from './menuitems';
import Headermenu from './headermemu';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};
export default function Menupoper({ children, items = [], onChange = defaultFn }) {
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
                            // console.log(item.children);
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            offset={[12, 6]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-poper')}>
                        {history.length > 1 && (
                            <Headermenu
                                title="Language"
                                onBack={() => {
                                    setHistory((pre) => pre.slice(0, pre.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                return setHistory((pre) => pre.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}
