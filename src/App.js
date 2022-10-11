import './App.css'
import { useState } from 'react'

function App() {

    const [id, setId] = useState(0)

    const [title, setTitle] = useState('')
    const [items, setItems] = useState([])

    const handleAdd = () => {
        if (title != '') {
            const newItem = { id: id, title: title }
            setItems([newItem, ...items])
            setTitle('')
            setId(id + 1)
        } 
    }

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id != id))
    }

    return (
        <div className='app'>
            <div className='container'>
                <div className='input'>
                    <input 
                        value={title} 
                        type='text' 
                        placeholder='Type something...'
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <button onClick={handleAdd}>Add</button>
                </div>
                <div className='box'>
                    {
                        !items.length && <span className='comment'>Here will be your items! Type and enjoy!</span>
                    }
                    {
                        items.map((item, index) => {
                            return (
                                <div key={item.id} className='item'>
                                    <p className='item-title'>{item.title}</p>
                                    <button className='item-delete' onClick={() => handleDelete(item.id)}>✕</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default App