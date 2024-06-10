import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
    return (
        <main className="menu bg-white flex flex-col p-4">

            <div className="container flex flex-col m-auto gap-4">
                <div className="flex justify-center w-full bg-light-yellow p-8 sticky top-0">
                    <Link href="/">
                        <Image
                            className=" "
                            src="/flavor-bakery-logo.png"
                            width={250}
                            height={100}
                            alt=""
                        />
                    </Link>
                </div>

                <div className="menu-col-list flex bg-black ">

                    <div className="bg-brown">
                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-yellow">
                            Hot Espresso Based Beverage
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">ESPRESSO</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.90</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Strong Black Coffee){" "}
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">DOPPIO</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.100</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Double Shots of espresso)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">ESPRESSO MACCHIATO</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.100</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso with creamy milk foam)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">ESPRESSO AFOGATO</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.150</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso with vanilla ice cream)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">AMERICANO</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.100/110</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Single/Double Shots of espresso with hot water)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">CAFE LATTE</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.130</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Single/Double Shots of espresso with hot water)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">CAPPUCCINO</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.130</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso, milk with deep layer of creamy milk foam)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">CAFE MOCHA</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.180</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso, chocolate, milk with foam)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">HONEY LATTE</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.180</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso, honey, milk with foam)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">HONEY LATTE</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.180</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso, honey, milk with foam)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">CARAMEL LATTE</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.180</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso, caramel syrup, milk topped with caramel sauce)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">CAFÉ MOCHA MADNESS</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.200</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso, caramel syrup, chocolate, milk topped with caramel
                                and chocolate)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">FLAVORED COFFEE</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.180</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Cappuccino with choice of flavor)
                            </div>
                        </div>

                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-yellow">
                            Hot Coffee Alternatives
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">HOT CHOCOLATE</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.120</span>
                            </div>
                            <div className="c-light-yellow text-sm">(Chocolate and milk)</div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">HONEY HOT LEMON</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.90</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Honey, lemon and hot water)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">HOT LEMON</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.30</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Fresh lemon juice with hot water)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">GREEN TEA/BLACK TEA</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.40/30</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Cappuccino with choice of flavor)
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow">
                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-brown">
                            Iced/Blended Espresso Based Beverage
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">ICED AMERICANO</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.130</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso pour on ice cubes serve with sugar syrup)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">ICED LATTE</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.150</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso, milk pour in ice cubes serve with sugar syrup)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">ICED MOCHA</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.180</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Chocolate, espresso, milk pour topped with whipped cream)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">ICED CARAMEL</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.180</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Caramel, espresso, milk pour topped with whipped cream)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">BLENDED COFFEE</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.200</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso, cold water blended with water)
                            </div>
                        </div>

                        <h1 className="menu-head-brown">Cold Coffee Alternatives</h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">ICED TEA</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.150</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso pour on ice cubes serve with sugar syrup)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">ICED LATTE</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.150</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Espresso, milk pour in ice cubes serve with sugar syrup)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">ICED LEMONADE</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.180</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Lemon foster, ice cubes blended with chilled water)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">COLD DRINKS</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.60</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">MINERAL WATER</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.25</span>
                            </div>
                        </div>

                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-brown">
                            Iced Blended Frappe
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">MOCHA FRAPPE</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.200</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Chocolate, espresso, blended with ice cubes and topped with
                                ice-cream)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">CARAMEL FRAPPE</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.200</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Caramel, espresso, blended with ice cubes and topped with
                                ice-cream)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">VANILLA FRAPPE</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.200</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Vanilla, espresso, blended with ice cubes and topped with
                                ice-cream)
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">OREO FRAPPE</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.200</span>
                            </div>
                            <div className="c-light-yellow text-sm">
                                (Chocolate, espresso, oreo, blended with ice cubes and topped
                                with ice-cream and oreo)
                            </div>
                        </div>

                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-brown">
                            Milk Shakes
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">
                                    Chocolate/Vanilla/Strawberry Milk Shakes
                                </span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.160</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="menu-col-list flex bg-black">

                    <div className="bg-brown">
                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-yellow">
                            Pastries
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Black Forest</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.80</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">White Forest</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.80</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Mango</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.90</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Blueberry</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.90</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Chocolate</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.100</span>
                            </div>
                        </div>

                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-yellow">
                            Donuts
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Plain</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.30</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Blueberry</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.40</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Chocolate</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.40</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Mango</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.40</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Butter Scotch</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.40</span>
                            </div>
                        </div>

                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-yellow">
                            Savoury Items
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Veg Patties</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.50</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Chicken Patties</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.70</span>
                            </div>
                        </div>

                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-yellow">
                            Birthday Cakes
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Black Forest</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.500</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">White Forest</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.550</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">White Chocolate</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.650</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Chocolate</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.750</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Blueberry/Pineapple</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.800</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Butterscotch</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.800</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Mocha</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.800</span>
                            </div>
                        </div>
                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Red Velvet</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.900</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Devil</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.1200</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">NOTE: EGGLESE EXTRA</span>
                                <span className="menu-line"></span>
                                <span className="c-yellow font-semibold text-xl">Rs.150</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow">
                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-brown">
                            Dry Cakes
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Brownies</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.100</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">
                                    Brownies with Icecream
                                </span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.160</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Fruits Cake</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.80</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Muffins</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.30</span>
                            </div>
                        </div>

                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-brown">
                            Bread Items
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Danish</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.50</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Croissant</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.50</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Cream Roll</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.30</span>
                            </div>
                        </div>

                        <h1 className="menu-head-yellow text-3xl font-semibold pt-5  pb-2  c-brown">
                            Cookies
                        </h1>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Little Hearts</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs. 60 packet</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Coconut Cookies</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs. 60 packet</span>
                            </div>
                        </div>

                        <div className="border-b border-[#996351] py-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Cookies per piece</span>
                                <span className="menu-line"></span>
                                <span className="c-brown font-semibold text-xl">Rs.15</span>
                            </div>
                        </div>

                        <div className="text-center grid gap-5 justify-center w-full bg-white p-10 my-10 rounded-2xl">
                            <Image
                                className=" "
                                src="/fonepay.png"
                                width={200}
                                height={100}
                                alt=""
                            />
                            <p className="text-black font-semibold text-xl">FLAVOR BAKERY UDHYOG</p>


                            <Image
                                className=" "
                                src="/qrcode.svg"
                                width={300}
                                height={100}
                                alt=""
                            />
                            <p className="text-black">Code : #2108250353</p>
                            <p className="text-black">Terminal: #491304</p>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    );
};

export default Menu;
