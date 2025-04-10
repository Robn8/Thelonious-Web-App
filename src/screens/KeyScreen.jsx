 import { useLocation, useNavigate } from 'react-router-dom';
 
 const KeyScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const key = location.state; 

    if (!key) {
        return (
          <main>
            <h1>No key selected.</h1>
            <p>You probably navigated here directly without selecting a key.</p>
          </main>
        );
      }

    return (
        <main>
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