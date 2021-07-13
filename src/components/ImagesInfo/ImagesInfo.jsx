import React, { Component } from 'react'
import ImageGallery from '../ImageGallery/ImageGallery'
import { onError } from '../../NotifyError'
import Spinner from '../Spinner/Spinner'
import { ImagesInfoText } from './ImagesInfo.styled'
import { fetchImages } from '../../services/Api'
import Button from '../Button/Button'

export default class ImagesInfo extends Component {
  state = {
    image: null,
    error: null,
    page: 1,
    status: 'idle',
  }

  componentDidUpdate(prevProps, prevState) {
    const nextName = this.props.imageName
    const prevName = prevProps.imageName

    const nextPage = this.state.page
    const prevPage = prevState.page

    if (prevName !== nextName) {
      this.setState({ status: 'pending' })

      this.resetPage()

      fetchImages(nextName, nextPage)
        .then((data) => {
          this.setState({ image: data.hits, status: 'resolved' })
          if (this.state.image.length === 0) {
            onError('Ваш запрос не дал результата')
          }
        })
        .catch((error) => this.setState({ error: true, status: 'rejected' }))
    }

    if (prevPage !== nextPage) {
      fetchImages(nextName, nextPage)
        .then((data) => {
          this.setState({ status: 'resolved' })
          this.setState((prevState) => {
            return { image: [...prevState.image, ...data.hits] }
          })
        })
        .catch((error) => this.setState({ error: true, status: 'rejected' }))
    }
  }

  onButtonLoadMore = (event) => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 }
    })
  }

  resetPage = () => {
    this.setState({
      page: 1,
    })
  }

  render() {
    const { image, error, status } = this.state
    const { imageName, onImageClick } = this.props

    if (status === 'idle') {
      return <ImagesInfoText>Введите ваш запрос</ImagesInfoText>
    }
    if (status === 'pending') {
      return (
        <>
          <Spinner />
        </>
      )
    }
    if (status === 'rejected') {
      return <>{error.message}</>
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery
            images={image}
            imageName={imageName}
            onImageClick={onImageClick}
          />
          <Button onClick={this.onButtonLoadMore}></Button>
        </>
      )
    }
  }
}
