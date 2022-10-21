import axios from "axios";
import React from "react";
import { Books } from "./books";

export class Read extends React.Component {

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
            .then(
                (response) => {
                    this.setState({
                        books: response.data
                    })
                }
            )
            .catch(

            );
    }

    state = {
        books: []
    }

    render() {
        return (
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}