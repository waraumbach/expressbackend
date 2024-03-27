import axios from "axios";

const restaurantData = () => {
  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  apiCall();

  //options
  /*const myRestaurants = [
  {
    id: 1,
    name: "KFC",
    menu: "American",
    location: "Thailand",
  },
  {
    id: 1,
    name: "KFC",
    menu: "American",
    location: "Thailand",
  },
  {
    id: 1,
    name: "KFC",
    menu: "American",
    location: "Thailand",
  },
  {
    id: 1,
    name: "KFC",
    menu: "American",
    location: "Thailand",
  },
  {
    id: 1,
    name: "KFC",
    menu: "American",
    location: "Thailand",
  },
];*/

  return <div></div>;
};

export default restaurantData;
