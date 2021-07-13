import {
  ImageGalleryListItem,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled'

export default function ImageGalleryItem({ src }) {
  return (
    <ImageGalleryListItem>
      <ImageGalleryItemImg src={src} width="300px" />
    </ImageGalleryListItem>
  )
}
