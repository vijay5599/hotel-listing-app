//To fetch all data
export function fetchAllHotels() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:9090/hotels");
    const data = await response.json();
    resolve({ data });
  });
}

//To fetch data by id
export function fetchHotelById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:9090/hotels/" + id);
    const data = await response.json();
    resolve({ data });
  });
}
