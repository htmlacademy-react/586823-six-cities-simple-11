import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { fetchGetOffers } from './store/actions/api-action';
import { setSortingStatus } from './store/actions/action';

store.dispatch(fetchGetOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const isSortingOpen = store.getState().isSortingOpen;
window.addEventListener('click', (evt: Event) => {
  const clickedElement = evt.target as HTMLElement;

  if (clickedElement.classList.contains('places__sorting-type') || clickedElement.classList.contains('places__sorting-arrow')) {
    store.dispatch(setSortingStatus(!isSortingOpen));
  } else {
    store.dispatch(setSortingStatus(false));
  }
});

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ErrorMessage />
      <App />
    </React.StrictMode>
  </Provider>

);

