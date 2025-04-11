 import { useLocation, useNavigate } from 'react-router-dom';
 
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
        <main className="h-screen flex flex-col justify-center items-center">
            <div>
                <h1 
                onClick={() => navigate(-1)}
                className="cursor-pointer text-blue-600 hover:underline"
                >
                    Home
                </h1>
                <h1>The key of: { key.title }</h1>
            </div>
        </main>
    )
 }

 export default KeyScreen;