import axios from "axios"

function App() {
  const getApi = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/`);
      const data = await response.data;
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <button onClick={() => getApi()}>Fetch Data</button>
    </>
  )
}

export default App
