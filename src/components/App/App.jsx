import React, { Component } from 'react'
import Searchbar from '../Searchbar/Searchbar'
import ImagesInfo from '../ImagesInfo/ImagesInfo'
import { Container, ModalImg } from './App.styled'
import Modal from '../Modal/Modal'

import React from 'react'

export default function App() {
  return <div></div>
}

export default class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    largeImageURL: '',
  }

  toggleModal = (largeImageURL) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: largeImageURL,
    }))
  }

  onSubmit = (imageName) => {
    this.setState({ imageName })
    console.log(imageName)
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        <ImagesInfo
          imageName={this.state.imageName}
          onImageClick={this.toggleModal}
        ></ImagesInfo>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ModalImg src={this.state.largeImageURL}></ModalImg>
          </Modal>
        )}
      </Container>
    )
  }
}
