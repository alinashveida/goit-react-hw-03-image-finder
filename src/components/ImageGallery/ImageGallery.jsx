import { ImageGalleryList } from './ImageGallery.styled'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery({ images }) {
  return (
    <ImageGalleryList>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} src={image.webformatURL} />
      ))}
    </ImageGalleryList>
  )
}

// {friends.map((friend) => (
//   <FriendListItem
//     key={friend.id}
//     avatar={friend.avatar}
//     name={friend.name}
//     isOnline={friend.isOnline}
//   />
// ))}
