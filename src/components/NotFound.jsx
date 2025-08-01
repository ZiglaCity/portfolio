
export default function NotFound({type, setSearchBlog}){
  const number = Math.round(Math.random() * 10) % 5;
  if (!type){
    type = number;
  }
	if(type == 1){
		return (
			<div className="text-center py-20 px-4">
				<h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-300">
					Damn. Nothing here but tumbleweeds. 🌵
				</h1>
				<p className="text-lg text-gray-400 mb-8">
					Either I haven’t written that blog yet... or you just made it up 😅<br />
					Try a different search — or just vibe with what’s already here.
				</p>
				<button
					className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          onClick={()=>setSearchBlog(null)}
				>
					Back to Blogs
				</button>
				<p className="text-sm italic text-gray-400 mt-12">
					Manifested by Zigla 💜
				</p>
			</div>
		)
  }
  else if(type == 2){
    return (
      <div className="text-center py-6 px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-300 mb-6">
          💀 Lost in the Sauce 💀
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-4">
          You just searched for something that doesn't even exist on my planet...
        </p>
        <p className="text-md sm:text-lg text-gray-400 mb-4 italic">
          ...or maybe I’m not woke enough to have written it yet 🤷🏽‍♂️
        </p>
        <p className="text-sm text-gray-500 mb-10">
          Either way, deep breath. Realign your chakra. Try again.
        </p>
{/* 
        <div className="mb-10">
          <img
            src="https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif"
            alt="Confused vibe"
            className="mx-auto w-72 sm:w-96 rounded-xl shadow-lg"
          />
        </div> */}

        <button
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          onClick={()=>setSearchBlog(null)}
        >
          Back to Blogs
        </button>

        <p className="mt-10 text-xs text-gray-400">
          Manifested by Zigla. 💜
        </p>
      </div>
    )
  }
  else if(type == 3){
    return (
      <div className="text-center py-1 px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-300 mb-3">
          🌪️ You’ve fallen into the void!
        </h1>
        <p className="text-lg text-gray-400 mb-4">
          Searching for something that doesn't exist?  
          Could be a glitch in my code… or in the Matrix.
        </p>
        <p className="text-md italic text-gray-500 mb-8">
          But hey — even chaos needs rest. Try again?
        </p>

        <div className="mb-8">
          <img
            src="https://media.giphy.com/media/3o7TKtk6RmG64NRWak/giphy.gif"
            alt="Mind-blown chaotic vibe"
            className="mx-auto w-80 sm:w-96 rounded-lg shadow-md"
          />
        </div>

        <button
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-110 transition-all duration-300"
          onClick={()=>setSearchBlog(null)}        >
          Return to Blog
        </button>

        <p className="mt-8 text-xs text-gray-400">
          Manifested in chaos by Zigla. 💜
        </p>
      </div>
    )
  }
  else {
    return (
      <div className="text-center py-20 px-6 text-white font-mono glitch-effect">
        <h1 className="text-6xl font-black tracking-widest mb-6">
          LOST.404
        </h1>
        <p className="text-xl mb-4">
          You typed a blog name that’s thinner than my RAM during builds.
        </p>
        <p className="text-lg italic mb-6">
          Either I’ve not written that blog, or… you’re in an alternate Zigla dimension.
        </p>

        <div className="mb-6 space-x-2">
          {[">>>", "***", "///", "@@@"].map((ch, i) => (
            <span
              key={i}
              className={`inline-block animate-flicker delay-${i * 100}`}
            >
              {ch}
            </span>
          ))}
        </div>

        <button
          className="px-8 py-4 bg-purple-700 rounded-md uppercase tracking-wider hover:bg-purple-800 transition"
          onClick={()=>setSearchBlog(null)}
        >
          Back to Blog Realm
        </button>

        <p className="mt-8 text-sm text-gray-400">
          Powered by raw vibes & console.logs. 🖤 Zigla
        </p>
      </div>
    )
  }
}