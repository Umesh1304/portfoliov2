export default function StartScreen({ onStart }) {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <button
        onClick={onStart}
        className="px-10 py-4 border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition-all text-xl tracking-widest"
      >
        ▶ START SYSTEM
      </button>
    </div>
  )
}