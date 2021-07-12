import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled'
import React, { Component } from 'react'
import { toast } from 'react-toastify'

export default class Searchbar extends Component {
  state = {
    imageName: '',
  }

  handleNameChange = (event) => {
    const value = event.currentTarget.value
    this.setState({
      imageName: value.toLowerCase(),
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.imageName.trim() === '') {
      console.log('Ведите имя покемона')
      toast('Wow so easy!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    }

    this.props.onSubmit(this.state.imageName)
    this.setState({ imageName: '' })
  }

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          ></SearchFormInput>
        </SearchForm>
      </SearchbarHeader>
    )
  }
}
