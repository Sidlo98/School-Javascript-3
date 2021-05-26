import './App.css';
import Person from './components/Person'
function App() {

  const onClick = (text) => {
    console.log('yaay du tryckte på knappen!', text);
  }


  return (
   <div>
    <h1>Hello</h1>
    <button onClick={() => onClick('hej')}>Tryck här</button>
    <Person name="Joakim" age="34" />
    <Person name="Jeanette" age="33" />
    <Person name="Hans" age="36" />
   </div>
  );
}

export default App;
