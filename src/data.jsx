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

import WristWatch from "./images/TopSelling/WristWatch.jpg";
import PowerBank from "./images/TopSelling/PowerBank.jpg";
import PowerBank2 from "./images/TopSelling/PowerBank2.jpg";
import Device from "./images/TopSelling/Device.jpg";
import Earpods from "./images/TopSelling/EarPods.jpg";
import Shirts from "./images/TopSelling/Shirts.jpg";

import Collection1 from "./images/Collection/Appliances.jpg";
import Collection2 from "./images/Collection/Phones.jpg";
import Collection3 from "./images/Collection/Fashion.jpg";
import Collection4 from "./images/Collection/Beauty.jpg";
import Collection5 from "./images/Collection/home.png";
import Collection6 from "./images/Collection/Supermarket.jpg";
import Collection7 from "./images/Collection/computing.jpg";
import Collection8 from "./images/Collection/Mobile_Accessories.jpg";
import Collection9 from "./images/Collection/Gaming.jpg";
import Collection10 from "./images/Collection/Power_Deals.jpg";
import Collection11 from "./images/Collection/Kids_Corner.jpg";
import Collection12 from "./images/Collection/Electronic.jpg";

import Official1 from "./images/Official Store/NIVEA.png";
import Official2 from "./images/Official Store/adidas.png";
import Official3 from "./images/Official Store/binatone.png";
import Official4 from "./images/Official Store/diageo.png";
import Official5 from "./images/Official Store/haier-thermocool.png";
import Official6 from "./images/Official Store/infinix.png";
import Official7 from "./images/Official Store/itel.png";
import Official8 from "./images/Official Store/loreal.png";
import Official9 from "./images/Official Store/oraimo.png";
import Official10 from "./images/Official Store/pernord-ricard.png";
import Official11 from "./images/Official Store/xiaomi.png";
import Official12 from "./images/Official Store/tecno.png";

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

export const topSellingItems = [
  { id: 1, name: "Wristwatch", pic: WristWatch },
  { id: 2, name: "Power Bank", pic: PowerBank },
  { id: 3, name: "Power Bank 2", pic: PowerBank2 },
  { id: 4, name: "Device", pic: Device },
  { id: 5, name: "Earpods", pic: Earpods },
  { id: 6, name: "Shirts", pic: Shirts },
];

export const pictures = [
  {
    id: 1,
    category: "Shop from our collection",
    data: [
      { name: "Appliance Deals", pic: Collection1 },
      { name: "Phone Deals", pic: Collection2 },
      { name: "Fashion Deals", pic: Collection3 },
      { name: "Beauty Deals", pic: Collection4 },
      { name: "Home Entertainment", pic: Collection5 },
      { name: "Supermarket Deals", pic: Collection6 },
      { name: "Computing Deals", pic: Collection7 },
      { name: "Accessories Deals", pic: Collection8 },
      { name: "Gaming Deals", pic: Collection9 },
      { name: "Power Deals", pic: Collection10 },
      { name: "Kids Corner", pic: Collection11 },
      { name: "Home & Office", pic: Collection12 },
    ],
  },
  {
    id: 2,
    category: "Official Store",
    data: [
      { pic: Official1 },
      { pic: Official2 },
      { pic: Official3 },
      { pic: Official4 },
      { pic: Official5 },
      { pic: Official6 },
      { pic: Official7 },
      { pic: Official8 },
      { pic: Official9 },
      { pic: Official10 },
      { pic: Official11 },
      { pic: Official12 },
    ],
  },
];
