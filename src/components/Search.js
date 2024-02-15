import React, { useEffect, useState } from 'react';

export default function Search(props) {
    const [searchText, setSearchText] = useState('');

    // handleChange
    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    useEffect(() => {
        props.onSearch(searchText);
    }, [searchText]);

    return (
        <div style={{ textAlign: 'center' }}>
            <input type="text" placeholder="Search any country..." value={searchText} onChange={handleChange} />
        </div>
    );
}
