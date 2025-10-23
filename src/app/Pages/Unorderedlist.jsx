// UnorderedList Component
const UnorderedList = () => {
  return (
    <div className="bg-gray-100">
      <ul className="mx-auto my-8 px-6 w-full max-w-lg rounded-lg bg-white sm:p-10 shadow-xl shadow-indigo-500/45 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <li className="text-2xl leading-relaxed first:text-pink-600 odd/custom-class:bg-zinc-400 text-zinc-600 font-medium">
          Sai Prakash Reddy
        </li>
        <li className="text-2xl leading-relaxed text-zinc-600 font-medium">
          Sai Prathap Reddy
        </li>
        <li className="text-2xl leading-relaxed first:text-blue-300 odd/custom-class:bg-zinc-400 font-medium">
          Subba Reddy
        </li>
        <li className="text-2xl leading-relaxed text-zinc-600 font-medium">
          Suneetha Reddy
        </li>
      </ul>
    </div>
  );
};

export default UnorderedList;
