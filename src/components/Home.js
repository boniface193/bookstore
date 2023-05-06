import Card from './Card';

const Home = () => (
  <section className="container bg">
    <Card action="Action" title="The Hunger Games" author="Sussane Collins" percent="64" chapter="Chapter 17" />
    <Card action="Science Fiction" title="Dune" author="Frank Herbert" percent="10" chapter="A Lesson Learned" />
    <Card action="Economy" title="Capital in the Twenty-First Century" author="Sussane Collin" percent="20" chapter="Introduction" />
    <div className="horizontal-rules" />
    <div>
      <h3 className="add-book">Add new Book</h3>
      <form>
        <input type="text" className="infut" placeholder="Book Title" />
        <select className="input category">
          <option value="option">Action</option>
          <option value="option">Science Fiction</option>
          <option value="option">Economy</option>
        </select>
        <button className="btn-bg btn-add" type="submit">Add Book</button>
      </form>
    </div>
  </section>
);

export default Home;
