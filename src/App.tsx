import "./App.css";
import Note from "./components/note/note";
import { Notes } from "./components/note/data";
function App() {
  return (
    <div className="App">
      <h1>Notes App</h1>
      <div>
        {
          Notes.map(note => <Note key={note.id} text={note.text} priority={note.priority} />)
        }
        
      </div>
    </div>
  );
}

export default App;
