import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addComment } from '../../store/actions/api-action';

function ReviewForm(): JSX.Element {
  const [userAnswers, setUserAnswers] = useState({
    value: '',
    starsCount: 0,
  });
  const dispatch = useAppDispatch();
  const currentRoomId = useAppSelector((state) => state.currentRoomId);

  const handleRatingClick = (evt: React.SyntheticEvent) => {
    const element = evt.target as HTMLInputElement;

    if (element.classList.contains('form__rating-input')) {
      setUserAnswers({
        ...userAnswers,
        starsCount: Number(element.value),
      });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => {
      evt.preventDefault();
      if (currentRoomId !== null) {
        const commentContainer = {
          comment: userAnswers.value,
          rating: userAnswers.starsCount,
        };
        dispatch(addComment({ commentContainer, offerId: currentRoomId }));
        setUserAnswers({
          ...userAnswers,
          value: '',
          starsCount: 0,
        });
      }
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review {userAnswers.starsCount}
      </label>
      <div
        className="reviews__rating-form form__rating"
        onClick={handleRatingClick}
      >
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={userAnswers.starsCount === 5 }
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          checked={userAnswers.starsCount === 4 }
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={userAnswers.starsCount === 3 }
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={userAnswers.starsCount === 2 }
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          checked={userAnswers.starsCount === 1 }
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(e) => {
          setUserAnswers({ ...userAnswers, value: e.target.value });
        }}
        value={userAnswers.value}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
