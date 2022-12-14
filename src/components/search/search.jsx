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
import { SearchApi } from '../../services/searchServiceApi';

const cx = classNames.bind(styles);

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState(false);

    const debouncedValue = useDebounce(searchValue, 700);
    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoadingSearch(true);
            const result = await SearchApi(debouncedValue);
            setSearchResult(result);

            setLoadingSearch(false);
        };
        fetchApi();
    }, [debouncedValue]);

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
            return (
                <AccountItem
                    key={ele.id}
                    data={ele}
                    onClick={() => {
                        handleHideResult();
                        setSearchValue('');
                    }}
                />
            );
        });
    };

    const handleChange = (event) => {
        const searchValue = event.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    // const handleSubmit = (event) => {
    //     event.prevenDefault();
    // };
    return (
        <div>
            {/* Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.  */}
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loadingSearch && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                    )}
                    {loadingSearch && <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />}
                    <button
                        className={cx('search-btn')}
                        // onClick={handleSubmit}
                        onMouseDown={(event) => {
                            event.preventDefault();
                        }}
                    >
                        <SearchIcon className={cx('search-icon')} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
