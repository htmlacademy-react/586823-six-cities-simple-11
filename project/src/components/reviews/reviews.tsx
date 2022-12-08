import { useAppSelector } from '../../hooks';
import { commentType } from '../../types/types';

function generateComments(comments: commentType[]): JSX.Element[] {
  const result: JSX.Element[] = [];

  comments.forEach((commentObj, i) => {
    const {rating, user, comment, date, id} = commentObj;
    result[i] = (
      <li className="reviews__item" key={id.toString()}>
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={user.avatarUrl}
              width="54"
              height="54"
              alt="Reviews avatar"
            />
          </div>
          <span className="reviews__user-name">{user.name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{ width: `${rating * 20}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment}
          </p>
          <time className="reviews__time" dateTime={date}>
            {new Date(date).toLocaleDateString('en-US')}
          </time>
        </div>
      </li>
    );
  });

  return result;
}

function Reviews() {
  const comments = useAppSelector((state) => state.comments);
  return (
    <ul className="reviews__list">
      {generateComments(comments)}
    </ul>
  );
}

export default Reviews;

