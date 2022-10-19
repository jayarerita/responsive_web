import './App.css';
import MyComponent from './MyComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          API token call to http://10.20.0.118/api/auth/login/
        </p>
        <MyComponent></MyComponent>

      </header>
    </div>
  );
}

export default App;
