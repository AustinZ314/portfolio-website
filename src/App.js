import Isometric from "./components/IsometricComponent";

function App() {
  return (
    <div className="flex items-end justify-center relative p-8">
      <div className="absolute left-0 top-0 translate-x-[60%] translate-y-[100%]">
        <div className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold">Hi, I'm Austin!</h1>
          <div className="absolute left-4 bottom-[-7px] w-4 h-4 bg-purple-600 rotate-45 rounded-sm shadow-lg"></div>
        </div>
      </div>
      <div className="transform translate-x-[9rem]">
        <Isometric className="w-[30rem] h-auto" />
      </div>
    </div>
  );
}

export default App;
