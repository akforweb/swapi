import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import EntityLoader from "./EntityLoader";

export default ({people, onClick}) => people
    ? <List className="characters-list">
        {people.map(({name, gender, homeworld, url}) =>
            <ListItem
                key={url}
                alignItems="flex-start"
                onClick={() => onClick(url)}
            >
                <ListItemText
                    primary={name}
                    secondary={<>
                        <span>{gender} - </span>
                        <EntityLoader
                            url={homeworld}
                            displayProperty="name"
                        />
                    </>}
                />
            </ListItem>
        )}
    </List>
    : <div>loading...</div>
