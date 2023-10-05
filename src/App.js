import "./App.css";
import HotelDetails from "./components/HotelDetails";
import Hotels from "./components/Hotels";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Hotels></Hotels>,
    },
    {
      path: `/hotel-detail/:id`,
      element: <HotelDetails></HotelDetails>,
    },
  ]);
  return (
    <div className="h-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
