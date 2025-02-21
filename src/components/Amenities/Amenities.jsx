import React, { useState, useEffect } from "react";
import Skeleton from "../Skeleton";
import {
  FaWifi,
  FaDoorOpen,
  FaBath,
  FaFan,
  FaCoffee,
  FaUtensils,
  FaUtensilSpoon,
  FaParking,
  FaHotTub,
  FaRecycle,
  FaBed,
} from "react-icons/fa";
import "./amenities.css";
import {
  FaBucket,
  FaKitchenSet,
  FaPeopleRoof,
  FaTemperatureFull,
} from "react-icons/fa6";
import { RiFridgeFill, RiHomeOfficeFill } from "react-icons/ri";
import { PiOvenFill } from "react-icons/pi";
import {
  MdBrunchDining,
  MdCoffeeMaker,
  MdFamilyRestroom,
  MdLocalLaundryService,
  MdMicrowave,
  MdTableBar,
  MdYard,
} from "react-icons/md";
import { TbAirConditioning, TbCooker, TbPlayFootball } from "react-icons/tb";
import {
  BiCloset,
  BiSolidBlanket,
  BiSolidCabinet,
  BiSolidFridge,
  BiSolidWasher,
} from "react-icons/bi";
import { GiPillow, GiWaterSplash, GiWoodBeam } from "react-icons/gi";
import { LuAlarmSmoke } from "react-icons/lu";
import { IoTvSharp } from "react-icons/io5";
import { IoIosWater } from "react-icons/io";

const properties = [
  {
    name: "10951 Mustang Spring",
    amenities: [
      { icon: <TbAirConditioning />, label: "Air Conditioning" },
      { icon: <IoTvSharp />, label: "Cable Ready" },
      { icon: <BiSolidWasher />, label: "Washer/Dryer" },
      { icon: <FaTemperatureFull />, label: "Heating" },
      { icon: <MdCoffeeMaker />, label: "Coffee Maker" },
      { icon: <FaFan />, label: "Ceiling Fans" },
      { icon: <FaWifi />, label: "Wifi" },
      { icon: <GiWaterSplash />, label: "Sprinkler" },
      { icon: <LuAlarmSmoke />, label: "Smoke Alarm" },
      { icon: <FaBath />, label: "Tub/Shower" },
      { icon: <MdLocalLaundryService />, label: "Dishwasher" },
      { icon: <FaRecycle />, label: "Disposal" },
      { icon: <MdMicrowave />, label: "Microwave" },
      { icon: <FaKitchenSet />, label: "Kitchen" },
      { icon: <FaKitchenSet />, label: "Granite Countertops" },
      { icon: <RiFridgeFill />, label: "Refrigerator" },
      { icon: <FaUtensilSpoon />, label: "Stainless Steel Appliances" },
      { icon: <BiSolidFridge />, label: "Freezer" },
      { icon: <FaKitchenSet />, label: "Pantry" },
      { icon: <MdYard />, label: "Yard" },
      { icon: <GiWoodBeam />, label: "Hardwood Floors" },
      { icon: <BiCloset />, label: "Walk-in Closets" },
      { icon: <FaPeopleRoof />, label: "Attic" },
      { icon: <MdBrunchDining />, label: "Dining Room" },
      { icon: <MdFamilyRestroom />, label: "Family Room" },
      { icon: <BiSolidBlanket />, label: "Linen Closet" },
      { icon: <RiHomeOfficeFill />, label: "Office" },
      { icon: <FaBed />, label: "Large Bedrooms" },
      { icon: <GiPillow />, label: "Extra Pillows & Blankets" },
      { icon: <IoIosWater />, label: "Water" },
    ],
  },
  {
    name: "6308 Green Top Dr",
    amenities: [
      { icon: <TbAirConditioning />, label: "Air Conditioning" },
      { icon: <IoTvSharp />, label: "Cable Ready" },
      { icon: <BiSolidWasher />, label: "Washer/Dryer" },
      { icon: <FaTemperatureFull />, label: "Heating" },
      { icon: <MdCoffeeMaker />, label: "Coffee Maker" },
      { icon: <FaFan />, label: "Ceiling Fans" },
      { icon: <FaWifi />, label: "Wifi" },
      { icon: <GiWaterSplash />, label: "Sprinkler" },
      { icon: <LuAlarmSmoke />, label: "Smoke Alarm" },
      { icon: <FaBath />, label: "Tub/Shower" },
      { icon: <MdLocalLaundryService />, label: "Dishwasher" },
      { icon: <FaRecycle />, label: "Disposal" },
      { icon: <MdMicrowave />, label: "Microwave" },
      { icon: <FaKitchenSet />, label: "Kitchen" },
      { icon: <FaKitchenSet />, label: "Granite Countertops" },
      { icon: <RiFridgeFill />, label: "Refrigerator" },
      { icon: <FaUtensilSpoon />, label: "Stainless Steel Appliances" },
      { icon: <BiSolidFridge />, label: "Freezer" },
      { icon: <FaKitchenSet />, label: "Pantry" },
      { icon: <MdYard />, label: "Yard" },
      { icon: <GiWoodBeam />, label: "Hardwood Floors" },
      { icon: <BiCloset />, label: "Walk-in Closets" },
      { icon: <FaPeopleRoof />, label: "Attic" },
      { icon: <MdBrunchDining />, label: "Dining Room" },
      { icon: <MdFamilyRestroom />, label: "Family Room" },
      { icon: <BiSolidBlanket />, label: "Linen Closet" },
      { icon: <RiHomeOfficeFill />, label: "Office" },
      { icon: <FaBed />, label: "Large Bedrooms" },
      { icon: <GiPillow />, label: "Extra Pillows & Blankets" },
      { icon: <IoIosWater />, label: "Water" },
    ],
  },
  {
    name: "7613 Agave Bnd",
    amenities: [
      { icon: <FaKitchenSet />, label: "Kitchen" },
      { icon: <MdMicrowave />, label: "Microwave" },
      { icon: <TbPlayFootball />, label: "Outdoor Playground" },
      { icon: <PiOvenFill />, label: "Oven" },
      { icon: <FaDoorOpen />, label: "Private Entrance" },
      { icon: <RiFridgeFill />, label: "Refrigerator" },
      { icon: <LuAlarmSmoke />, label: "Smoke Alarm" },
      { icon: <TbCooker />, label: "Stove" },
      { icon: <IoTvSharp />, label: "TV" },
      { icon: <TbAirConditioning />, label: "Air Conditioning" },
      { icon: <MdYard />, label: "Backyard" },
      { icon: <FaBath />, label: "Bathtub" },
      { icon: <BiSolidBlanket />, label: "Bed Linens" },
      { icon: <FaFan />, label: "Ceiling Fan" },
      { icon: <FaBucket />, label: "Cleaning Products" },
      { icon: <BiSolidCabinet />, label: "Clothing Storage" },
      { icon: <FaCoffee />, label: "Coffee" },
      { icon: <MdCoffeeMaker />, label: "Coffee Maker" },
      { icon: <FaUtensils />, label: "Cooking Basics" },
      { icon: <MdTableBar />, label: "Dining Table" },
      { icon: <FaUtensilSpoon />, label: "Dishes and Silverware" },
      { icon: <MdLocalLaundryService />, label: "Dishwasher" },
      { icon: <GiPillow />, label: "Extra Pillows & Blankets" },
      { icon: <FaParking />, label: "Free Parking on Premises" },
      { icon: <BiSolidFridge />, label: "Freezer" },
      { icon: <FaTemperatureFull />, label: "Heating" },
      { icon: <FaHotTub />, label: "Hot Water" },
      { icon: <BiSolidWasher />, label: "Washer/Dryer" },
      { icon: <FaWifi />, label: "Wifi" },
    ],
  },
];

const Amenities = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="amenities-section">
      <h2>Amenities</h2>
      <p>
        Hello there! Enjoy our top-tier amenities designed to enhance your
        comfort and convenience. From modern living spaces to well-equipped
        facilities, we ensure a seamless and enjoyable experience.
      </p>
      <p className="description">
        Explore our carefully curated features that make every moment at home
        truly special.
      </p>
      <div className="amenities-grid">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="property-card">
                <Skeleton
                  type="text"
                  height="30px"
                  width="80%"
                  style={{ marginBottom: "10px" }}
                />
                {Array.from({ length: 8 }).map((_, idx) => (
                  <Skeleton
                    key={idx}
                    type="text"
                    height="20px"
                    width="100%"
                    style={{ marginBottom: "5px" }}
                  />
                ))}
              </div>
            ))
          : properties.map((property, index) => (
              <div key={index} className="property-card">
                <h3>{property.name}</h3>
                <ul>
                  {property.amenities.map((amenity, idx) => (
                    <li key={idx} className="amenity-item">
                      {amenity.icon} <span>{amenity.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Amenities;
