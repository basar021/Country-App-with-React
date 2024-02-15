import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import Country from './Country';
import './countries.css';

export default function Countries(props) {
    return (
        <section className="countries">
            {props.countries.map((country) => {
                const newCountry = { country, id: uuidv4() };

                return <Country {...newCountry} key={newCountry.id} onRemoveCountry={props.onRemoveCountry} />;
            })}
        </section>
    );
}
