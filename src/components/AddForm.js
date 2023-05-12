import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook, createBook } from '../redux/books/bookSlice';

const AddForm = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ title: '', author: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      item_id: Math.floor(Math.random() * 100).toString(),
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { title, author, category } = formState;
    if (title.trim() !== '' || author.trim() !== '' || category.trim() !== '') {
      document.querySelector('.submit').reset();
      dispatch(createBook(
        formState,
      ));
      dispatch(addBook(
        formState,
      ));
      setFormState({ title: '', author: '', category: '' });
    }
  };

  return (
    <>
      <h3 className="add-book">Add new Book</h3>
      <form onSubmit={submitForm} className="submit">
        <input type="text" className="infut" onChange={handleChange} name="title" placeholder="Book Title" />
        <input type="text" className="infut" onChange={handleChange} name="author" placeholder="Book Author" />
        <select className="input category" onChange={handleChange} name="category">
          <option value="">Select categories</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button
          className="btn-bg btn-add"
          type="submit"
        >
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddForm;
