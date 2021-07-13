import { ModalContainer, Overlay } from './Modal.styled'
import { createPortal } from 'react-dom'
import React, { Component } from 'react'

const ModalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }

  handlerBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
  }

  render() {
    return createPortal(
      <Overlay onClick={this.handlerBackdropClick}>
        <ModalContainer>{this.props.children}</ModalContainer>
      </Overlay>,
      ModalRoot,
    )
  }
}
