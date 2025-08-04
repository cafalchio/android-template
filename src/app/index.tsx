import { Button } from "@/components/ui/button"
import useExampleStore from "@/stores/example"

function App() {
  const counter = useExampleStore((state) => state.counter)
  const addCounter = useExampleStore((state) => state.addCounter)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind + React + Tauri 🚀
      </h1>

      <p className="mt-4 text-2xl text-gray-800">
        Counter: {counter}
      </p>

      <Button
        onClick={addCounter}
        className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
      >
        Click Me
      </Button>
    </div>
  )
}

export default App
