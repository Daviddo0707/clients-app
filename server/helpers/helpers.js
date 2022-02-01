const axios = require("axios");

const findLocation = async (ipAddress) => {
  try {
    const { data } = await axios.get(`http://ip-api.com/json/${ipAddress}`);
    const city = data.city;
    const country = data.country;
    return { city, country };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findLocation,
};
