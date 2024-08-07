import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { Plan } from "../types/types";
import { AddOn } from "../types/types";

export let plansData: Plan[] = [
  {
    icon: arcadeIcon,
    title: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    selected: true,
  },
  {
    icon: advancedIcon,
    title: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    selected: false,
  },
  {
    icon: proIcon,
    title: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    selected: false,
  },
];

export let addOnsData: AddOn[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
    selected: false,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
    selected: false,
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
    selected: false,
  },
];
