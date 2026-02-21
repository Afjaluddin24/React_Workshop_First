import { useState } from 'react'
import './App.css'

function App() {

  const [count, setcount] = useState(0);
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  // Fetch data from API
  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      console.error('Error fetching fact:', error);
      setFact('Error loading fact');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button type='button' style={{color:'white', background:'blue'}} onClick={() => setcount(count + 1)}>
        count : {count}
      </button>
      
      <button 
        type='button' 
        style={{color:'white', background:'green', marginLeft: '10px', padding: '8px 15px'}} 
        onClick={fetchFact}
      >
        {loading ? 'Loading...' : 'Get Random Fact'}
      </button>

      {fact && (
        <div style={{marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '500px'}}>
          <h3>Random Fact:</h3>
          <p>{fact}</p>
        </div>
      )}
    </>
  )
}

export default App
