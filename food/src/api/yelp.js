import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer bjqEJvsQFejJ8gCQ2-5JJ5G8AgepTGyeEVtkXZ5H5PLDPulC5YD5lLyl6l7gGAs4vl0-7SRQCmOoJhyUnGCERSIXswRozF6Y2k5yg3BAvZUW1mJDhPdt8Ph1UN8hYHYx",
  },
});
