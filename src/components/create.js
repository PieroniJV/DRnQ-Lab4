import React from "react";

export class Create extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookUrl = this.onChangeBookUrl.bind(this);

        //array of states
        this.state = {
            title: '',
            cover: '',
            author: '',
            url: ''
        }
    }

    //functions for changing states
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.title}`);
        console.log(`${this.state.cover}`);
        console.log(`${this.state.author}`);
        console.log(`${this.state.url}`);
    }
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onChangeBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }
    onChangeBookAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }
    onChangeBookUrl(e) {
        this.setState({
            url: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Add Book Title:
                        </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle} />
                    </div>
                    <div className="form-group">
                        <label>
                            Add Book Cover:
                        </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover} />
                    </div>
                    <div className="form-group">
                        <label>
                            Add Book Author:
                        </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor} />
                    </div>
                    <div className="form-group">
                        <label>
                            Add Front Page Url:
                        </label>
                        <input type="url"
                            className="form-control"
                            value={this.state.url}
                            onChange={this.onChangeBookUrl} />
                    </div>
                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}