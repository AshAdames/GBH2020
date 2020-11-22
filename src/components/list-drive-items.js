import React from 'react'
import '../list.css';
function ListDriveItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key} onClick={() => {props.deleteItem(item.key)}}>
            <p>
                {item.text}
            </p>
            </div>

    })
    return (<div>
        {listItems}
    </div>
    )
}
export default ListDriveItems;