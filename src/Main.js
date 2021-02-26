import React, {Component} from "react";

import Modal from "@material-ui/core/Modal";
import CharactersList from "./CharactersList";
import CharacterDetails from "./CharacterDetails";
import {getCharacters, getEntityByUrl} from "./api";

import "./styles.css";
import LinkedInSignIn from "./LinkedInSignIn";

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }
    }

    componentDidMount = async () => {
        const people = await getCharacters();
        this.setState({people: people.results})
    }

    showProfileModal = async (url) => {
        this.setState({isModalOpen: true});
        const character = await getEntityByUrl(url);
        this.setState({character});
    };

    hideProfileModal = () => this.setState({isModalOpen: false, character: null});

    render() {
        const {people, isModalOpen, character} = this.state

        return <div className="main-wrapper">
            <Modal
                open={isModalOpen}
                onClose={this.hideProfileModal}
            >
                <CharacterDetails character={character}/>
            </Modal>
            <CharactersList
                people={people}
                onClick={this.showProfileModal}
            />
            <LinkedInSignIn/>
        </div>
    }
}

