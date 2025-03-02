import React from 'react'

const ssrItems = [
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
    { id: 4, name: 'item 4' },
    { id: 5, name: 'item 5' },
]

function index() {
    return (
        <div>
            <h1>Test SSR Items</h1>
            <ul>
                {ssrItems.map((item) => (
                    <li key={item.id}>{item.name}</li>))}
            </ul>
        </div>
    )
}

export default index