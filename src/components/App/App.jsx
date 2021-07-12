import React, { Component } from 'react'
import Searchbar from '../Searchbar/Searchbar'
import { ToastContainer } from 'react-toastify'
import ImagesInfo from '../ImagesInfo/ImagesInfo'

export default class App extends Component {
  state = {
    imageName: '',
    image: null,
    loading: false,
  }

  onSubmit = (imageName) => {
    this.setState({ imageName })
    console.log(imageName)
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=21785158-d7699e1d635f5d39ae805dbbd&image_type=photo&orientation=horizontal&per_page=12',
    )
      .then((responce) => responce.json())
      .then(
        (data) => this.setState({ image: data.hits[0] }),
        //       (data) => {
        //     console.log(data.hits)
        //     return data.hits
        //   }
      )
      .finally(() => this.setState({ loading: false }))
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        <ImagesInfo imageName={this.state.imageName}></ImagesInfo>
        {this.state.loading && <h1>loading</h1>}
        {this.state.image && <div>{this.state.image[0]}</div>}

        <ToastContainer position="top-right" autoClose={5000}></ToastContainer>
      </div>
    )
  }
}
