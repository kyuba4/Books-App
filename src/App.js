import Header from "./components/Header";
import BooksList from "./components/BooksList";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [data, isPending, error] = useFetch("Harry Potter");

  return (
    <>
      <Header />
      {data && <BooksList books={data} />}
      {isPending === null && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </>
  );
};

export default App;
