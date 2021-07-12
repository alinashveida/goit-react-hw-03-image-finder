import React, { Component } from 'react'
import ImageGallery from '../ImageGallery/ImageGallery'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default class ImagesInfo extends Component {
  state = {
    image: null,
    loading: false,
  }
  componentDidUpdate(prevProps, prevState) {
    const nextName = this.props.imageName
    if (prevProps.imageName !== nextName) {
      console.log('1')

      this.setState({ loading: true })
      fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=21785158-d7699e1d635f5d39ae805dbbd&image_type=photo&orientation=horizontal&per_page=12
      `)
        .then((responce) => responce.json())
        .then((data) => {
          this.setState({ image: data.hits })
        })
        .finally(() => this.setState({ loading: false }))
    }
  }

  render() {
    const { loading, image } = this.state
    const { imageName } = this.props

    return (
      <>
        {loading && <p>Loading</p>}
        {!imageName && <p>Введите</p>}
        {image && (
          <ImageGallery>
            <ImageGalleryItem></ImageGalleryItem>
          </ImageGallery>
        )}
      </>
    )
  }
}
