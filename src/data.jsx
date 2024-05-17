import bath1 from "./images/Bathing_soap.png";
import bath2 from "./images/shampoo.png";
import bath3 from "./images/Makeup.png";
import bath4 from "./images/shampoo.png";
import bath5 from "./images/Hair_accessories.png";
import bath6 from "./images/Face_care.png";
import fashion1 from "./images/Fashion1.png";
import fashion2 from "./images/Fashion2.png";
import fashion3 from "./images/fashion3.png";
import fashion4 from "./images/Fashion4.png";
import fashion5 from "./images/Fashion5.png";
import fashion6 from "./images/Fashion6.png";
import food1 from "./images/Rice.png";
import food2 from "./images/Toiletries.png";
import food3 from "./images/Juices.png";
import food4 from "./images/Liquor.png";
import food5 from "./images/Wines.png";
import food6 from "./images/Soft_Drinks.png";
import mobile1 from "./images/CellPhone.png";
import mobile2 from "./images/Mobile6.png";
import mobile3 from "./images/iphones.png";
import mobile4 from "./images/Phones5.png";
import mobile5 from "./images/smartphones.png";
import mobile6 from "./images/Tablets.png";

import clearance from "./images/clearance sales/Clearance Sales.png";
import specialOffers from "./images/clearance sales/Special Offers.png";
import phonesAndTablets from "./images/clearance sales/Phones $ Tablets.png";
import televisions from "./images/clearance sales/Televisions.png";
import fashionDeals from "./images/clearance sales/Fashion Deals.png";
import refrigerators from "./images/clearance sales/Refrigerators.png";
import buyNow from "./images/clearance sales/BUY-NOW-PAY-LATER_GIF-2.gif";
import grocery from "./images/clearance sales/Grocery deals.png";
import computingDeals from "./images/clearance sales/Computing Deals.png";
import mobile from "./images/clearance sales/Mobile Assesories.png";
import generators from "./images/clearance sales/Generators.png";
import home from "./images/clearance sales/Home Essentials.png";

import { LuApple } from "react-icons/lu";
import { CgHome } from "react-icons/cg";
import { PiCookingPot } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiMonitor } from "react-icons/ci";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { FaShirt } from "react-icons/fa6";
import { LuBaby } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiWeightLiftingUp } from "react-icons/gi";
import { CiCircleMore } from "react-icons/ci";

export const allPictures = [
  {
    id: 1,
    category: "Toiletries",
    data: [
      { name: "bathsoap", pic: bath1 },
      { name: "fragrance", pic: bath2 },
      { name: "toiletries", pic: bath3 },
      { name: "shampoo", pic: bath4 },
      { name: "hair care", pic: bath5 },
      { name: "face care", pic: bath6 },
    ],
  },
  {
    id: 2,
    category: "fashion wears",
    data: [
      { name: "women's wears", pic: fashion1 },
      { name: "kiddies", pic: fashion2 },
      { name: "men's shoes", pic: fashion3 },
      { name: "wristwatches", pic: fashion4 },
      { name: "men's wears", pic: fashion5 },
      { name: "women's shoes", pic: fashion6 },
    ],
  },
  {
    id: 3,
    category: "Food and Drinks",
    data: [
      { name: "rice", pic: food1 },
      { name: "household cleaning", pic: food2 },
      { name: "juice", pic: food3 },
      { name: "liquor", pic: food4 },
      { name: "wines", pic: food5 },
      { name: "soft drinks", pic: food6 },
    ],
  },
  {
    id: 4,
    category: "Phones and Gadgets",
    data: [
      { name: "cellphones", pic: mobile1 },
      { name: "phone accessories", pic: mobile2 },
      { name: "iphones", pic: mobile3 },
      { name: "mobile phones", pic: mobile4 },
      { name: "smartphones", pic: mobile5 },
      { name: "tablets", pic: mobile6 },
    ],
  },
];

export const clearanceSales = [
  { id: 1, name: "Clearance Sales", pic: clearance },
  { id: 2, name: "Special Offers", pic: specialOffers },
  { id: 3, name: "Phones and Tablets", pic: phonesAndTablets },
  { id: 4, name: "Televisions", pic: televisions },
  { id: 5, name: "Fashion Deals", pic: fashionDeals },
  { id: 6, name: "Refrigerators", pic: refrigerators },
  { id: 7, name: "Buy Now, Pay Later", pic: buyNow },
  { id: 8, name: "Grocery Deals", pic: grocery },
  { id: 9, name: "Computing Deals", pic: computingDeals },
  { id: 10, name: "Mobile Assesories", pic: mobile },
  { id: 11, name: "Generators", pic: generators },
  { id: 12, name: "Home Essentials", pic: home },
];

export const asideData = [
  { icon: <LuApple />, iconText: "superMarket" },
  { icon: <CgHome />, iconText: "health $ beauty" },
  { icon: <PiCookingPot />, iconText: "Home $ Office" },
  { icon: <IoIosPhonePortrait />, iconText: "Appliencies" },
  { icon: <CiMonitor />, iconText: "phones & tablet" },
  { icon: <PiTelevisionSimpleLight />, iconText: "computing" },
  { icon: <FaShirt />, iconText: "Electronics" },
  { icon: <IoGameControllerOutline />, iconText: "Fashion" },
  { icon: <LuBaby />, iconText: "Baby Products" },
  { icon: <IoGameControllerOutline />, iconText: "Gaming" },
  { icon: <GiWeightLiftingUp />, iconText: "Sporting Goods" },
  { icon: <CiCircleMore />, iconText: "Other Categories" },
];
