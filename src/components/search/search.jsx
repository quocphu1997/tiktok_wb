import React, { useEffect, useState, useRef } from 'react';
import styles from './search.module.scss';
import classNames from 'classnames/bind';
import { faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { wrapper as PopperWrapper } from '../Proper';
import AccountItem from '../searchAccountItem/account.item';
import { SearchIcon } from '../Icons/icon';
import useDebounce from '../../hooks/useDebounce';
import request from '../../utils/request';

const cx = classNames.bind(styles);

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loadingSearch, setLoadingSearch] = useState(false);

    const debounced = useDebounce(searchValue, 700);
    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoadingSearch(true);
        request
            .get(`/users/search`, {
                params: {
                    q: debounced,
                    type: 'less',
                },
            })
            .then((result) => {
                setSearchResult(result.data.data);
                setLoadingSearch(false);
            })
            .catch((error) => {
                console.log('error', error);
                setLoadingSearch(false);
            });
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus(); // để khi xóa thì dấu nháy vẫn sẽ hiện cho ng dùng nhập tiếp
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const renderAccountItem = () => {
        return searchResult.map((ele) => {
            return <AccountItem key={ele.id} data={ele} />;
        });
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-label')}>Accounts</h4>
                        {renderAccountItem()}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('searchbox')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="search accounts and video"
                    spellCheck={false}
                    onChange={(event) => setSearchValue(event.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loadingSearch && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                )}
                {loadingSearch && <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon className={cx('search-icon')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}
