import { useSelector, useDispatch } from 'react-redux';
import {
  // Task 7 (DONE): Import the `removePhoto()` action creator from the photos slice
  removePhoto,
  // Task 13 (DONE): Import the `selectFilteredPhotos()` selector from the photos slice
  selectFilteredPhotos,
} from '../photos.slice';
import './list.css';

export default function PhotosList() {
  // Task 14 (DONE): Call `useSelector()` below with `selectFilteredPhotos` instead of `selectAllPhotos`
  const photos = useSelector(selectFilteredPhotos);
  // Task 8 (DONE): Store a reference to the Redux store's dispatch method in a variable called `dispatch`
  const dispatch = useDispatch();
  function handleDeleteButtonClick(id) {
    // Task 9 (DONE): Dispatch the `removePhoto()` action creator, passing in the id
    dispatch(removePhoto(id));
  }

  const photosListItems = photos.map(({ id, caption, imageUrl }) => (
    <li key={id}>
      <img alt={caption} src={imageUrl} />
      <div>
        <p>{caption}</p>
        <button
          data-testid={`${caption}-button`}
          onClick={() => handleDeleteButtonClick(id)}>
          Delete
        </button>
      </div>
    </li>
  ));

  return photosListItems.length > 0 ? (
    <ul>{photosListItems}</ul>
  ) : (
    <h3>No doggies to display...</h3>
  );
}
