import Link from "next/link"
 import NavBar from "../componennts/NavBar"
import SearchSideBar from "./components/SearchSideBar"
import Header from "./components/Header"
import RestaurantCar from "./components/ReastaurantCard"
import RestaurantCard from "../componennts/RestaurantCard"

export default function Search(){
    return(
        <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
         <NavBar/>
          <Header />
          <div className="flex py-4 m-auto w-2/3 justify-between items-start">
             <SearchSideBar />
            <div className="w-5/6">
            <RestaurantCard />
            </div>
          </div>
        </main>
      </main>
       
    )
}