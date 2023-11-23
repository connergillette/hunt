export default function HomePage() {
  const statusColors = {
    'good': 'bg-green-400 text-black',
    'bad': 'bg-red-400 text-black',
    'neutral': 'bg-yellow-200 text-black',
    default: 'bg-transparent'
  }

  return (
    <div className="flex flex-col h-full gap-10">
      <div className="mt-[10%] w-full mx-auto text-center">
        <h1 className="text-9xl max-md:text-4xl font-bold">Hunt</h1>
        <h2 className="text-4xl max-md:text-xl leading-relaxed">Dead-simple job application tracking.</h2>
      </div>
      <div className="flex flex-wrap gap-2 mx-auto w-3/4 max-md:11/12 justify-center h-min relative">
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-red-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-24 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-48 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-green-400 text-black -z-10 w-36 h-5`}></div>
        <div className={`py-1 px-2 rounded-md text-xs bg-yellow-200 text-black -z-10 w-24 h-5`}></div>
        <div className="absolute bottom-0 bg-gradient-to-t from-slate-800 to-transparent h-48 w-full z-20">
          <h3 className="font-bold text-center absolute bottom-0 mx-auto w-full text-2xl -mb-10">Don't get lost in your job apps.</h3>
        </div>
      </div>
    </div>
  )
}