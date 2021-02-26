import React from "react";

import EntityLoader from "./EntityLoader";

export default ({character}) => {
    if (!character) {
        return <div>loading...</div>
    }

    const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, vehicles, films} = character;

    return <div className="character-modal-body">
        <div><b>Mame: </b>{name}</div>
        <div><b>Height: </b>{height}</div>
        <div><b>Mass: </b>{mass}</div>
        <div><b>Hair color: </b>{hair_color}</div>
        <div><b>Skin color: </b>{skin_color}</div>
        <div><b>Eye color: </b>{eye_color}</div>
        <div><b>Birth color: </b>{birth_year}</div>
        <div><b>Gender: </b>{gender}</div>
        <div>
            <b>Homeworld: </b>
            {homeworld
                ? <EntityLoader
                    url={homeworld}
                    displayProperty="name"
                />
                : <div>n/a</div>}
        </div>
        <div>
            <b>Vehicles: </b>
            {vehicles.length
                ? <ul>
                    {vehicles.map(vehicle => <li key={vehicle}>
                        <EntityLoader
                            url={vehicle}
                            displayProperty="name"
                        />
                    </li>)}
                </ul>
                : <span>
                    n/a
                </span>}
        </div>
        <div>
            <b>Films: </b>
            <ul>
                {films.map(film => <li key={film}>
                    <EntityLoader
                        url={film}
                        displayProperty="title"
                    />
                </li>)}
            </ul>
        </div>
    </div>;
}
