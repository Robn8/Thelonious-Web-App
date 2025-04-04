import Navbar from "./components/Navbar"
import KeyList from "./components/KeyList"

function App() {
  

  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/p5.jpg')" }}>
        <KeyList />
      </div>
    </main>
  )
}

export default App
