import { ProfileForm } from "@/components/form"
import { Button } from "@/components/ui/button"
import useExampleStore from "@/stores/example"
import { User } from "@/types/users";
import Database from '@tauri-apps/plugin-sql';

const db = await Database.load('sqlite:mydatabase.db');
const users: [] = await db.select("SELECT * FROM users");

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
        Count
      </Button>
      <ProfileForm  />
      <div>
        {users && users.map((user: User) => {
          return <div id={'${user.name}_${user.id}'}>{user.name}</div>
        })}      
      </div>
    </div>
  )
}

export default App;