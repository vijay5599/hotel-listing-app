import "./Hotels.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav";
import { fetchAllHotelsAsync, selectAllHotels } from "../features/HotelsSlice";
import { Link } from "react-router-dom";

export default function Hotels() {
  const dispatch = useDispatch();
  const [page, setPage] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);
  const hotels = useSelector(selectAllHotels);

  useEffect(() => {
    dispatch(fetchAllHotelsAsync());
    setPage(hotels);
  }, []);

  const loadMore = () => {
    setVisibleCards(visibleCards + 3);
  };

  return (
    <>
      <div className="h-screen overflow-y-auto bg-white p-6">
        <Nav></Nav>
        <div className="flex flex-wrap -mx-1 lg:-mx-4 ">
          {hotels.slice(0, visibleCards).map((hotel) => (
            <div
              className="py-0 px-1 w-auto h-auto md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 m-0"
              key={hotel.id}
            >
              <article className="relative rounded-lg shadow-lg bg-blue-100">
                <button className="absolute text-blue-700 font-bold rounded-3xl text-xs bg-white p-2 px-3 top-8 left-8">
                  For Rent
                </button>
                <button className="absolute text-blue-700 font-bold rounded-3xl text-xs bg-white p-2 pb-1 top-8 left-80 ml-10">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>
                <a>
                  <img
                    alt={hotel.hotel_name}
                    className="block h-60 w-full p-4 pb-0 "
                    src={hotel.photo1}
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-2">
                  <div className="p-2 ">
                    <div className="flex space-x-2">
                      <ion-icon name="location-outline"></ion-icon>
                      <span className="hotel-item-text text-sm">4 People</span>
                    </div>
                    <h1 className="text-md p-2">
                      <h4 className="no-underline text-black">
                        {hotel.hotel_name}
                      </h4>
                    </h1>
                  </div>
                </header>
                <ul class="flex w-full justify-between pl-7 pr-7">
                  <li class="hotel-list-item">
                    <ion-icon name="business-outline"></ion-icon>
                    <br></br>
                    <span className="hotel-item-text text-sm">4 People</span>
                  </li>
                  <li class="hotel-list-item">
                    <ion-icon name="bed-outline"></ion-icon>
                    <br></br>
                    <span className="hotel-item-text text-sm">
                      {hotel.star_rating} Beds
                    </span>
                  </li>
                  <li class="hotel-list-item">
                    <ion-icon name="speedometer-outline"></ion-icon>
                    <br></br>
                    <span className="hotel-item-text text-sm">
                      {hotel.city}
                    </span>
                  </li>

                  <li class="hotel-list-item">
                    <ion-icon name="move-outline"></ion-icon>
                    <br></br>
                    <span className="hotel-item-text text-sm">
                      {hotel.chain_id}
                    </span>
                  </li>
                </ul>
                <hr></hr>

                <div className="flex justify-between p-0 pl-4 items-center hotel-price-wrapper">
                  <p className="hotel-price font-bold">
                    <strong className="font-bold text-lg text-blue-800">
                      $440
                    </strong>
                    /month
                  </p>
                  <p className="flex justify-between items-center">
                    <Link to={`/hotel-detail/${hotel.id}`} key={hotel.id}>
                      <button className="btn font-bold text-sm w-auto h-auto bg-white text-blue-700 border border-blue-600 border-solid rounded-3xl p-2 pl-4 pr-4 m-3 ">
                        Read more
                      </button>
                    </Link>
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
        {/* <button onClick={handleLoadMore}>Load more</button> */}
        {visibleCards < hotels.length && (
          <div className="flex items-center justify-center">
            <div
              onClick={loadMore}
              className="flex justify-between text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
            >
              <p className="mr-2 mt-1">
                <ion-icon name="hourglass-outline"></ion-icon>
              </p>
              Load more
            </div>
          </div>
        )}
      </div>
    </>
  );
}
