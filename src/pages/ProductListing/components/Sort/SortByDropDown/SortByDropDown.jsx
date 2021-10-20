import { useStateContext } from '../../../../../contexts';
import { sortByList } from '../../../../../helpers';
import { useState } from 'react';

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
                        Sort By : <b>{ selectedSort }</b>
                    </div>
                </div>
                <ul className="list">
                    {sortByList.map((item) => (
                        <li
                            style={{ backgroundColor: `${item === setSelectedSort ? "#F4F4F5" : ""}`}}
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