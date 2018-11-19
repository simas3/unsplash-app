import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { deleteQuery, getImages } from '../actions/imageActions'
import { connect } from 'react-redux'

export class Query extends Component {


    onQueryClick() {
        this.props.getImages(this.props.query)
    }

    onRemove() {
        this.props.deleteQuery(this.props.count - 1)
    }

    render() {
        console.log(this.props)
        return (
            <div className="queryoption">
                <button className="querybutton querybutton--link" onClick={this.onQueryClick.bind(this)} >{this.props.count}. {this.props.query}</button>
                <button className="querybutton querybutton--link" onClick={this.onRemove.bind(this)}>x</button>
            </div>
        )
    }
}

Query.propTypes = {
    deleteQuery: PropTypes.func.isRequired,
    getImages: PropTypes.func.isRequired
}

export default connect(null, { deleteQuery, getImages })(Query)
