import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSuggestion,
  selectError,
  selectLoading,
  // Task 18 (DONE): Import the `selectSuggestion()` selector from the suggestion slice
  selectSuggestion,
} from './suggestion.slice';
import './suggestion.css';

export default function Suggestion() {
  // Task 19 (DONE): Call useSelector() with the selectSuggestion() selector
  // The component needs to access the `imageUrl` and `caption` properties of the suggestion object.
  const { caption, imageUrl } = useSelector(selectSuggestion);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadSuggestion() {
      // Task 20 (DONE): Dispatch the fetchSuggestion() action creator
      await dispatch(fetchSuggestion());
    }
    loadSuggestion();
  }, [dispatch]);

  let render;
  if (loading) {
    render = <h3>Loading...</h3>;
  } else if (error) {
    render = <h3>Sorry, we're having trouble loading the suggestion.</h3>;
  } else {
    // Task 21 (DONE): Enable the two JSX lines below needed to display the suggestion on the page
    render = (
      <>
        <img alt={caption} src={imageUrl} />
        <p>{imageUrl}</p>
      </>
    );
  }

  return (
    <section className="suggestion-container">
      <h2>Suggestion of the Day</h2>
      {render}
    </section>
  );
}
