import Sidebar from './components/Sidebar';
import FormEditor from './components/FormEditor';
function App() {
  return (
    <div>
      <div className="flex justify-center p-10">
        <div className="w-full max-w-5xl flex">
          <Sidebar />
          <FormEditor />
        </div>
      </div>
    </div>
  );
}

export default App;
