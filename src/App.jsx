import { motion } from "framer-motion"

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen grid place-content-center">
      <div className="grid grid-cols-4 gap-4 w-96 h-96">
        <div className="bg-zinc-700 col-span-2 row-span-2 rounded-lg"></div>
        <motion.div whileHover={{scale: 1.1, rotate: 5}} className="bg-zinc-700 rounded-lg"></motion.div>
        <motion.div whileHover={{scale: 1.1, rotate: 5}} className="bg-zinc-700 rounded-lg"></motion.div>
        <motion.div whileHover={{scale: 1.1, rotate: 5}} className="bg-zinc-700 rounded-lg"></motion.div>
        <motion.div whileHover={{scale: 1.1, rotate: 5}} className="bg-zinc-700 rounded-lg"></motion.div>
        <div className="bg-zinc-700 col-span-full rounded-lg"></div>
        <div className="bg-zinc-700"></div>
        <div className="bg-zinc-700 col-span-3 rounded-lg"></div>
      </div>
    </div>
  )
}

export default App
