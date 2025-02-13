    import React from "react";
    import { FaSwimmer, FaCar, FaTree, FaWifi, FaDumbbell, FaShieldAlt, FaDoorOpen, FaBath, FaFan, FaCoffee, FaUtensils, FaUtensilSpoon, FaParking, FaTemperatureHigh, FaHotTub } from "react-icons/fa";
    import "./amenities.css";
import { FaBucket, FaKitchenSet } from "react-icons/fa6";
import { RiFridgeFill } from "react-icons/ri";
import { PiOvenFill } from "react-icons/pi";
import { MdCoffeeMaker, MdLocalLaundryService, MdMicrowave, MdTableBar, MdYard } from "react-icons/md";
import { TbAirConditioning, TbCooker, TbPlayFootball } from "react-icons/tb";
import { BiSolidBlanket, BiSolidCabinet, BiSolidDryer, BiSolidFridge, BiSolidWasher } from "react-icons/bi";
import { GiPillow } from "react-icons/gi";
import { LuAlarmSmoke } from "react-icons/lu";
import { IoTvSharp } from "react-icons/io5";

    const properties = [
    {
        name: "10951 Mustang Spring",
        amenities: [
        { icon: <FaSwimmer />, label: "Swimming Pool" },
        { icon: <FaCar />, label: "Parking Garage" },
        { icon: <FaTree />, label: "Garden Area" },
        ],
    },
    {
        name: "6308 Green Top Dr",
        amenities: [
        { icon: <FaWifi />, label: "High-Speed WiFi" },
        { icon: <FaDumbbell />, label: "Gym & Fitness" },
        { icon: <FaShieldAlt />, label: "24/7 Security" },
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
        { icon: <BiSolidDryer />, label: "Dryer" },
        { icon: <GiPillow />, label: "Extra Pillows and Blankets" },
        { icon: <FaParking />, label: "Free Parking on Premises" },
        { icon: <BiSolidFridge />, label: "Freezer" },
        { icon: <FaTemperatureHigh />, label: "Heating" },
        { icon: <FaHotTub />, label: "Hot Water" },
        { icon: <BiSolidWasher />, label: "Washer" },
        { icon: <FaWifi />, label: "Wifi" },



        ],
    },
    ];

    const Amenities = () => {
    return (
        <section className="amenities-section">
        <h2>Amenities</h2>
        <div className="amenities-grid">
            {properties.map((property, index) => (
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
