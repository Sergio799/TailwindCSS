const Cards = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8">
        {/* Card 1 */}
        <div className="w-full max-w-lg rounded-lg bg-white p-6 sm:p-10 shadow-xl shadow-indigo-500/45 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="font-mono text-2xl sm:text-4xl font-bold text-blue-700">
            Nallapareddy's History
          </h2>
          <p className="mb-6 mt-3 leading-relaxed text-zinc-600">
            The history of Nallapareddy is quite different from other histories
            where they migrated from one village to another and became wealthy
            over generations.
          </p>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2 rounded-xl font-medium">
            <button className="w-full rounded-lg bg-indigo-400 px-4 py-2 text-white transition hover:bg-indigo-500">
              Subscribe
            </button>
            <button className="w-full rounded-lg border border-blue-500 bg-white px-4 py-2 text-blue-500 transition hover:bg-blue-100">
              Notifications
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-lg rounded-lg bg-white p-6 sm:p-10 shadow-xl shadow-indigo-500/45 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="font-mono text-2xl sm:text-4xl font-bold text-blue-700">
            Karumuru's History
          </h2>
          <p className="mb-6 mt-3 leading-relaxed text-zinc-600">
            The history of Karumuru is quite different from other histories
            where they migrated from one village to another and became wealthy
            over generations.
          </p>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2 rounded-xl font-medium">
            <button className="w-full rounded-lg bg-indigo-400 px-4 py-2 text-white transition hover:bg-indigo-500">
              Subscribe
            </button>
            <button className="w-full rounded-lg border border-blue-500 bg-white px-4 py-2 text-blue-500 transition hover:bg-blue-100">
              Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
