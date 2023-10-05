import { useDispatch, useSelector } from "react-redux";
import { fetchHotelByIdAsync, selectHotelById } from "../features/HotelsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
];

export default function HotelDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const hotel = useSelector(selectHotelById);

  useEffect(() => {
    dispatch(fetchHotelByIdAsync(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="bg-white h-[100vh] overflow-y-auto">
      {hotel && (
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-2 text-gray-500">{hotel.overview}</p>
            <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </div>
          </div>
          <ul key={hotel.id}>
            <li className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src={hotel.photo2}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100 w-auto"
              />
              <img
                src={hotel.photo1}
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100 w-auto"
              />
              <img
                src={hotel.photo3}
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100 w-auto"
              />
              <img
                src={hotel.photo4}
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100 h-full w-auto"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
