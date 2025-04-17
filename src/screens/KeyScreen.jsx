 import { useLocation, useNavigate } from 'react-router-dom';
 import Navbar from '../components/Navbar';
 
 const KeyScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const key = location.state; 

    if (!key) {
        return (
          <main className="h-screen flex flex-col justify-center items-center">
            <h1>No key selected.</h1>
            <p>You probably navigated here directly without selecting a key.</p>
            <p>This should take you home:</p>
            <button 
              className="cursor-pointer mt-15 p-15 transform hover:scale-175 border rounded-md shadow-md bg-blue-100"
              onClick={() => navigate(-1)}
            >
              HOME
            </button>
          </main>
        );
      }

    return (
      <>
        <Navbar />
        <main className="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/p1.jpg')" }}>
            <div className="flex flex-col justify-center items-center mb-2">
                <h1 className="text-9xl mb-4  text-white underline">{ key.title }</h1>
                <h1 className="text-white text-4xl mb-2">Chords of {key.title} Major: </h1>
                <h1 className="p-15 text-4xl border rounded-md shadow-md bg-white">{ key.chords }</h1>
            </div>
            <h1 
                onClick={() => navigate(-1)}
                className="cursor-pointer text-white hover:underline hover:text-blue-400"
                >
                    Home
                </h1>
        </main>
      </>
    )
 }

 export default KeyScreen;