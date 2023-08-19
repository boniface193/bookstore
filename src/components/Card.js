import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/bookSlice';

const Card = ({
  action, title, author, percent, chapter, id,
}) => {
  const dispatch = useDispatch();

  const handleRemove = (itemID) => {
    dispatch(removeBook(itemID));
    dispatch(deleteBook(itemID));
  };

  return (
    <aside className="card">
      <div>
        <div>
          <span className="book-status">{action}</span>
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
        </div>
        <div className="d-flex align-center mt-8">
          <button type="button" className="btn">Comment</button>
          <div className="hr" />
          <button type="button" className="btn" onClick={(() => { handleRemove(id); })}>Remove</button>
          <div className="hr" />
          <button type="button" className="btn">Edit</button>
        </div>

      </div>
      <div className="d-flex align-center">
        <div className="scale" />
        <div className="mx-4">
          <div className="percent">
            {percent}
            %
          </div>
          <div className="completed">Completed</div>
        </div>

      </div>
      <div className="d-flex align-center">
        <div className="divide" />
      </div>
      <div>

        <div className="c-chapter">Current Chapter</div>
        <div>{chapter}</div>
        <button type="button" className="btn-bg">Update Progress</button>
      </div>
    </aside>
  );
};

Card.propTypes = {
  action: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
