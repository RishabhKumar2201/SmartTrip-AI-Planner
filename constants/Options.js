export const SelectTravelerList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "✈️", // Example icon name for a single user
    people: "1",
  },
  {
    id: 2,
    title: "Couple",
    desc: "Two people sharing the journey",
    icon: "🥂", // Example icon name for a couple or two people
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A family adventure",
    icon: "🏠", // Example icon name representing a family or home
    people: "3+",
  },
  {
    id: 4,
    title: "Friends",
    desc: "Exploring with friends",
    icon: "🍸", // Another example for a group of friends
    people: "2-5",
  },
  {
    id: 5,
    title: "Group",
    desc: "A large group trip",
    icon: "⛴️", // Example icon for a large group
    people: "5+",
  },
];
export const SelectBudgetList = [
  {
    id: 1,
    title: "Cheap",
    desc: "Budget-friendly travel.",
    icon: "💸", // Example icon representing cheap or budget travel
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Great value travel.",
    icon: "💰", // Example icon representing moderate budget
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Premium experiences.",
    icon: "💎", // Example icon representing luxury or premium travel
  },
  {
    id: 4,
    title: "Adventure",
    desc: "Thrilling adventures.",
    icon: "⛰️", // Example icon representing adventure travel
  },
  {
    id: 5,
    title: "Business",
    desc: "Work-focused trips.",
    icon: "📊", // Example icon representing business travel
  },
];

export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days and {totalNights} Nights for {traveler} with {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON format'