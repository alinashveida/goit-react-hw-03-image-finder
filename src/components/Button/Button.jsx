import { ButtonLoadMore } from './Button.styled'
import React, { Component } from 'react'

export default class Button extends Component {
  state = {
    page: 1,
  }

  render() {
    return (
      <ButtonLoadMore type="button" onClick={this.props.onClick}>
        Load more
      </ButtonLoadMore>
    )
  }
}
