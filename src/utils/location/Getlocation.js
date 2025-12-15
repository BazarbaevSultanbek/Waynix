navigator.geolocation.getCurrentPosition(async (pos) => {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
});


async function fetchCityCountry(lat, lng) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    city: data.address.city || data.address.town || data.address.village,
    country: data.address.country
  };
}


export { fetchCityCountry };