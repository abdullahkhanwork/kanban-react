import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline mt-7">
                Hello world!
                <FontAwesomeIcon icon={faFacebook}/>
            </h1>
        </div>
    );
}

export default App;
