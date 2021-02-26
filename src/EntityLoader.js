import React, {Component} from "react";

import {getEntityByUrl} from "./api";

export default class EntityLoader extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount = async () => {
        const {url} = this.props;
        const entity = await getEntityByUrl(url);

        this.setState({entity});
    }

    render() {
        const {displayProperty} = this.props;
        const {entity} = this.state;

        return entity
            ? entity[displayProperty]
            : <div>loading...</div>
    }
}
