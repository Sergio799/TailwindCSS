import Image from "next/image";
import Cards from "./Pages/Landingpage";
import UnorderedList from "./Pages/Unorderedlist";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full rounded-b-lg bg-white">
        <Cards />
        <UnorderedList />
      </div>
    </div>
  );
}
