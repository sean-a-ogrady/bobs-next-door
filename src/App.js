import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useEffect, useState } from 'react';

/*
DELIVERABLES
------------
1. Load in the table of the stores and display 
  - useEffect with a GET request, hold state in App
2. Fill out the submit form to add new store, POST to database
  - state for newStore, setNewStore in App
    - This means that NewStoreForm should be controlled by App
  - handleNewStoreFormSubmit in App, pass this function to NewStoreForm as a prop
    - POST and add new store to storeList state
3. Filter stores by typing in the search bar
  - state for filter in App
  - onChange setFilter
  - create a new const for the filtered list, pass this as a prop to StoreList instead of `storeList`
*/

function App() {
  const url = "http://localhost:8085/stores/";

  const [storeList, setStoreList] = useState([]);
  const [newStore, setNewStore] = useState({name: "", image: "", season: "", episode: ""});
  const [filter, setFilter] = useState("");

  useEffect(() => { // Remember, the first argument of useEffect is a function
    fetch(url)
    .then(response => response.json())
    .then(setStoreList)
  } ,[])

  function handleNewStoreFormSubmit(event) {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newStore.name,
        image: newStore.image,
        season: newStore.season,
        episode: newStore.episode
      })
    })
    .then(response => response.json())
    .then(addStoreToList)
  }
  
  function addStoreToList(store) {
    const updatedStoreList = [...storeList, store]
    updatedStoreList.sort((a, b) => {
      // Sort by season first
      if (a.season < b.season) return -1;
      if (a.season > b.season) return 1;
      // Sort by episode if the seasons are the same
      return a.episode - b.episode;
    })
    setStoreList(updatedStoreList);
  }
  // .some() will iterate through an array and return true if the callback function returns true for an element
  const filteredStoreList = storeList.filter(store => store.name.toLowerCase().split(" ").some(word => word.startsWith(filter.toLowerCase())));

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search filter={filter} setFilter={setFilter} />
      <NewStoreForm newStore={newStore} setNewStore={setNewStore} handleNewStoreFormSubmit={handleNewStoreFormSubmit} />
      <StoreList stores={filteredStoreList} />
    </div>
  );
}

export default App;
