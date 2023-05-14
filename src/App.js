import './App.css';
import TopBar from './components/TopBar';
import Column from './components/Column';

function App() {
    return (
        <>
            <div className="absolute w-screen">
                <TopBar />
            </div>
            <div className="bg-gray-100 h-screen mx-auto px-4 pt-24 pb-12 sm:px-6 lg:px-8 flex gap-5 overflow-x-scroll">
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
            </div>
        </>
    );
}

export default App;
