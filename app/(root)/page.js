import QueryResetForm from "@/components/QueryResetForm";
import { Search, X } from "lucide-react";
import Card from "@/components/Card";


export default async function Home({ searchParams }) {
  // Extracting the query from searchParams if needed
   const query = (await searchParams).query ;

   const post = {
    id: 1,
    title: "Interpreneur Platform",
    author: { id: 1, name: "John Doe" },
    date: new Date().toLocaleDateString(),
    views: 100,
    category: "Technology",
    description: "A platform to connect interpreneurs and translators.",
    image: "https://placehold.co/400x300.png?text=Interpreneur+Image",
   }

  return (
    <>
      <div className="w-full h-[200px] flex items-center justify-center flex-col bg-blue-500 md:h-[250px] lg:h-[300px] relative">
        <div className="w-[600px] h-[100px] bg-white rounded-lg shadow-lg flex items-center justify-center flex-col md:w-[700px] lg:w-[800px] hover:shadow-xl transition-shadow duration-300 hover:scale-105 transition-transform-duration-300 ">
          <h2 className="text-xl font-sans hover:text-blue-800">Connect With interpreneurs and translators around the world.</h2>
        </div>
        <p className=" text-xl mt-4">Submit your ideas and get noticed</p>
        <form className="form" action="/" name="form" >
          <div className="relative w-[600px] md:w-[700px] lg:w-[800px] mt-4">
            <input

              name="query"
              type="text"
              defaultValue={query || ""}
              placeholder="Search for ideas, translators, or interpreneurs..."
              className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            {query && (
              <QueryResetForm/>
            )}
            <button type="submit">
            <Search className="absolute right-1 top-7 transform -translate-y-1/2 text-gray-500" />
            </button>
            
          </div>
        </form>
        
      </div>
      <div className="flex items-center justify-center mt-10">
        {query ? (
          <h1 className="text-2xl font-bold">Results for Query </h1>
        ): (
          <h1 className="text-2xl font-bold">Welcome to the Interpreneur Platform</h1>
        )}
      </div>
      <div className="flex items-center justify-center mt-10">
        {/* Assuming Card is a component that displays the results */}
        <div className="grid grid-cols-1 p-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <Card post = {post} /> 
      </div>
      </div>
    </>
  );
}
