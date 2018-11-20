import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getImages, saveQuery } from '../actions/imageActions'

export class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            error: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSearch = this.onSearch.bind(this)
        this.onSave = this.onSave.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSearch(e) {
        e.preventDefault()
        if (!this.state.query) {
            this.setState(() => ({ error: 'Please Enter Your Search Query' }))
        } else {
            this.props.getImages(this.state.query)
            this.setState({ error: '', query: '' })
        }

    }

    onSave(e) {
        e.preventDefault()
        if (!this.state.query) {
            this.setState(() => ({ error: 'Can\'t save empty query' }))
        } else {
            this.props.saveQuery(this.state.query)
            this.setState({ error: '', query: '' })
        }
    }

    render() {
        return (
            <div>
                <form className="query" onSubmit={this.onSearch}>
                    <input
                        className="query__input"
                        placeholder="Search images..."
                        name="query"
                        value={this.state.query}
                        onChange={this.onChange}
                    />
                    <button type="submit" className="button">Search</button>
                    <button type="button" className="button" onClick={this.onSave}>Save</button>
                </form>
                {this.state.error && <p className="query-error">{this.state.error}</p>}
            </div>
        )
    }
}

SearchForm.propTypes = {
    getImages: PropTypes.func.isRequired,
    saveQuery: PropTypes.func.isRequired
}

export default connect(null, { getImages, saveQuery })(SearchForm)
