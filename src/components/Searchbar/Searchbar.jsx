import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled'
import React, { Component } from 'react'
import { onError } from '../../NotifyError'

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
      onError('Введите текст')
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
            value={this.state.imageName}
          ></SearchFormInput>
        </SearchForm>
      </SearchbarHeader>
    )
  }
}
