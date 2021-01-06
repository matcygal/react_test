import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import ItemGrid from './components/items/ItemGrid'
import './App.css';

const App = () => {
  const [items, setitems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const search = await axios(`http://www.omdbapi.com/?s=${query}&apikey=7f39a5ce`)
      if (search.data.Response === "False") {
        setitems(null)
      } else {
        Promise.all(search.data.Search.map((item) => {
          return axios.get(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=${process.env.REACT_APP_API_KEY}`)}))
          .then(resp => Promise.all( resp.map(r => r.data) ))
          .then(result => {
            setitems(result)
          })
        }
        setIsLoading(false)
    }
    fetchItems()
  }, [query])
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <ItemGrid isLoading={isLoading} items={items} />

    </div>
  );
}

export default App;
