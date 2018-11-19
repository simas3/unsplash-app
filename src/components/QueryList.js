import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Query from './Query'
import { deleteQueries } from '../actions/imageActions'

export class QueryList extends Component {

    deleteQueries() {
        this.props.deleteQueries()
    }

    render() {
        const { queryHistory } = this.props.images

        return (
            <div className="flex-queries">
                {queryHistory.length > 0 ? (
                    <div className="querylist">
                        <div className="querylist-header">
                            <h3 className="querylist-header__title">Your Saved Queries</h3>
                            <button className="querybutton querybutton--link" onClick={this.deleteQueries.bind(this)}>X</button>
                        </div>
                        {
                            queryHistory.map((query, index) => {
                                return <Query key={index} query={query} count={index + 1} />
                            })
                        }
                    </div>) : null}
            </div>
        )
    }
}

QueryList.propTypes = {
    deleteQueries: PropTypes.func.isRequired,
    images: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    images: state.images
})


export default connect(mapStateToProps, { deleteQueries })(QueryList)
