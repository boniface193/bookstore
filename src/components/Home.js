import { useSelector } from 'react-redux';
import Card from './Card';
import AddForm from './AddForm';

const Home = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);

  if (isLoading) {
    return (<span>Loading...</span>);
  } if (error) {
    return (<span>There is an error rendering your content</span>);
  }
  return (
    <section className="container bg">

      {books.map((items) => (<Card key={items.item_id} action={items.category} title={items.title} author={items.author} percent="64" chapter="Chapter 17" id={items.item_id} />))}
      <div className="horizontal-rules" />
      <div>
        <AddForm />
      </div>
    </section>
  );
};

export default Home;
