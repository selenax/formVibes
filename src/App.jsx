import Sidebar from './components/Sidebar';
import FormEditor from './components/FormEditor';
function App() {
  return (
    <div>
      <div className="flex justify-center p-10">
        <div className="w-full max-w-5xl flex gap-4">
          <div className="w-1/3">
            <Sidebar />
          </div>
              <div className="w-2/3">
          <FormEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
