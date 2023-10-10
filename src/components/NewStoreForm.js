import React from "react"

function NewStoreForm({newStore, setNewStore, handleNewStoreFormSubmit}) {

    function updateStoreForm(event) {
        const {id, value} = event.target; // Destructure the id and value from the event target
        setNewStore({...newStore, [id]: value});
    }
    return(
        <form onSubmit={handleNewStoreFormSubmit}>
            <input type="text" id="name" placeholder="Store Name" value={newStore.name} onChange={updateStoreForm} />
            <input type="text" id="image" placeholder="Image URL" value={newStore.image} onChange={updateStoreForm} />
            <input type="number" id="season" placeholder="Season" step="1" value={newStore.season} onChange={updateStoreForm} />
            <input type="number" id="episode" placeholder="Episode" step="1" value={newStore.episode} onChange={updateStoreForm} />
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;