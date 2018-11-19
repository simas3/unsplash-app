import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ClipLoader } from 'react-spinners';
import Image from './Image'

export class ImageList extends Component {

    render() {

        const { images, loading, total } = this.props.images

        let imagesContent;

        if (loading) {
            imagesContent = (
                <div className="spinner">
                    <ClipLoader
                        sizeUnit={"px"}
                        size={100}
                        color={'#8357c5;'}
                        loading={loading}
                    />
                </div>
            )
        } else if (typeof images != "undefined" && images != null && images.length != null && images.length > 0) {
            console.log(images)
            imagesContent = (
                <div className="images-grid">
                    {images.map(image => (
                        <Image
                            url={image.urls.thumb}
                            link={image.links.html}
                            key={image.id}
                        />
                    ))}
                </div>
            )
        } else if (total !== undefined && images.length === 0) {
            imagesContent = (
                <div className="query-error">
                    <p>There was no images found</p>
                </div>
            )
        }

        return (
            <div className="flex-images">
                {imagesContent}
            </div>
        )
    } q
}

ImageList.propTypes = {
    images: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    images: state.images
})

export default connect(mapStateToProps)(ImageList)
