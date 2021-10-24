import { useStateContext } from '../../../../../contexts';
import { sortByList, DownSvg } from '../../../../../helpers';
import { useState } from 'react';

import './SortByDropDown.css';

export const SortByDropDown = () => {
    const { dispatch } = useStateContext();
    const [ selectedSort, setSelectedSort ] = useState("Price: High To Low");

    const updateSort = (item) => {
        setSelectedSort(item);
        dispatch({
            type: 'SORT',
            payload: item.toUpperCase(),
        });
    }

    return (
        <div className="drop-down-container">
            <div className="drop-down">
                <div className="drop-down-show">
                    <div className="drop-down-selected">
                        Sort by : <b>{selectedSort}</b>
                    </div>
                    <div className="down-arrow">{<DownSvg />}</div>
                </div>
                <ul className="drop-down-list">
                    {sortByList.map((item) => (
                        <li
                            className="drop-down-list-items"
                            style={{ backgroundColor: `${item === selectedSort ? "#F4F4F5" : ""}`}}
                            onClick={() => updateSort(item)}
                            key={item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}