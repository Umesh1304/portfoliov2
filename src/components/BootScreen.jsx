import { useEffect, useState } from "react"

export default function BootScreen({ onFinish }) {
  const [lines, setLines] = useState([])

  const bootLines = [
    "Initializing Tech Support and Dev...",
    "Loading core modules...",
    "Establishing secure connection...",
    "Injecting cyber protocols...",
    "Access Granted ✔",
    "Launching system..."
  ]

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      setLines(prev => [...prev, bootLines[i]])
      i++

      if (i === bootLines.length) {
        clearInterval(interval)
        setTimeout(onFinish, 1000)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen bg-black text-red-500 font-mono flex flex-col justify-center px-10">
      {lines.map((line, index) => (
        <p key={index} className="mb-2">
          {"> " + line}
        </p>
      ))}
    </div>
  )
}