"use client";
import { Accordion, AccordionItem, Input } from "@nextui-org/react";

import { AiFillFacebook } from "react-icons/ai";
import { BsGoogle, BsPinterest } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { PiInstagramLogoFill, PiPhone } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { SlEnvolope, SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { MailIcon } from "../../../assets/icons/MailIcon";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-50 pb-16 md:pb-0">
      <div className="bg-indigo-500 w-full h-40">
        <div className="flex flex-col md:flex-row py-5 md:py-0 items-center h-full md:h-40 w-full justify-between md:gap-4 md:max-w-[1480px] md:mx-auto">
          <div className="md:w-[30%]">
            <h2 className="text-white font-medium md:text-3xl text-2xl flex items-center">
              <span>
                <FaPaperPlane className="text-white mr-3" />
              </span>
              Sign up to Newsletter
            </h2>
          </div>
          <div className="md:w-[35%]">
            <p className="text-white md:text-lg text-xs">
              Get our emails for info on new items, sales and more.
            </p>
          </div>
          <div className="md:w-4/12 w-9/12 mx-auto">
            <Input
              type="email"
              placeholder="you@example.com"
              size="lg"
              labelPlacement="outside"
              endContent={
                <MailIcon className="text-2xl cursor-pointer text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
        </div>
      </div>
      <div className="container py-6 px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="md:grid hidden grid-cols-4 gap-5">
          <div className="pb-6 md:pb-0 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center justify-center space-x-3 md:justify-start md:-ml-1.5"
            >
              <div className="flex items-center justify-center rounded-full">
                <img
                  draggable
                  src="/src/assets/images/logo.png"
                  alt="Champso Logo"
                  className="w-48"
                />
              </div>
            </a>
            <div className=" text-center md:text-left mt-5">
              <div className="text-sm">
                <p className="my-8 font-bold">
                  All Rights Reserved © 2024 Champso Developed by{" "}
                  <span className="text-indigo-500">Mezanur Rahman</span>
                </p>
                <p className="my-6">Got Question? Call us 24/7</p>
                <p className="my-6 text-2xl text-indigo-500 font-semibold flex items-center">
                  <span>
                    <PiPhone className="mr-2" />
                  </span>
                  +88-018-2856-9660
                </p>
                <p className="my-6 flex items-center">
                  <span>
                    <SlLocationPin className="mr-2" />
                  </span>
                  Mirpur 10, Dhaka, Bangladesh
                </p>
                <p className="my-6 flex items-center">
                  {" "}
                  <span>
                    <SlEnvolope className="mr-2" />
                  </span>{" "}
                  mezanurrahman200212@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left mt-5">
            <p className="pb-1 md:text-lg text-sm font-bold">
              Customer Service
            </p>
            <ul className="flex flex-col items-start">
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Privacy Policy
                </Link>
              </li>
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Refund Policy
                </Link>
              </li>
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Shipping & Return
                </Link>
              </li>
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Term & Conditions
                </Link>
              </li>
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Advanced Search
                </Link>
              </li>
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Store Locations
                </Link>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-left mt-5">
            <p className="pb-1 md:text-lg text-sm font-bold">
              Shop By Categories
            </p>
            <ul className="flex flex-col items-start">
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Smartphone
                </Link>
              </li>
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Headphones
                </Link>
              </li>
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Computer & Desktop
                </Link>
              </li>
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Cameras & Photos
                </Link>
              </li>
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Laptop & Ipad
                </Link>
              </li>
              <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                <Link to="/" className="">
                  Airpods
                </Link>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-left mt-5">
            <div>
              <p className="pb-1 md:text-lg text-sm font-bold">Follow Us</p>
            </div>
            <div className="pt-6 lg:pt-0">
              <div className="mt-4 flex flex-col gap-y-5">
                <div>
                  <Link to="/" className="flex items-center text-xl">
                    <PiInstagramLogoFill />
                    <p className="ml-2">Instagram</p>
                  </Link>
                </div>
                <div>
                  <Link to="/" className="flex items-center text-xl">
                    <AiFillFacebook />
                    <p className="ml-2">Facebook</p>
                  </Link>
                </div>
                <div>
                  <Link to="/" className="flex items-center text-xl">
                    <RiTwitterXFill />
                    <p className="ml-2">Twitter</p>
                  </Link>
                </div>
                <div>
                  <Link to="/" className="flex items-center text-xl">
                    <BsGoogle />
                    <p className="ml-2">Google</p>
                  </Link>
                </div>
                <div>
                  <Link to="/" className="flex items-center text-xl">
                    <BsPinterest />
                    <p className="ml-2">Pinterest</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Customer Service"
              title="Customer Service"
            >
              <ul className="flex flex-col items-start">
                <li className="mb-6 hover:translate-x-5 inline-block duration-500">
                  <Link to="/" className="">
                    Privacy Policy
                  </Link>
                </li>
                <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                  <Link to="/" className="">
                    Refund Policy
                  </Link>
                </li>
                <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                  <Link to="/" className="">
                    Shipping & Return
                  </Link>
                </li>
                <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                  <Link to="/" className="">
                    Term & Conditions
                  </Link>
                </li>
                <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                  <Link to="/" className="">
                    Advanced Search
                  </Link>
                </li>
                <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                  <Link to="/" className="">
                    Store Locations
                  </Link>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Shop By Categories"
              title="Shop By Categories"
            >
              <ul className="flex flex-col items-start">
                <li className="mb-6 hover:translate-x-5 inline-block duration-500">
                  <Link to="/" className="">
                    Smartphone
                  </Link>
                </li>
                <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                  <Link to="/" className="">
                    Headphones
                  </Link>
                </li>
                <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                  <Link to="/" className="">
                    Computer & Desktop
                  </Link>
                </li>
                <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                  <Link to="/" className="">
                    Cameras & Photos
                  </Link>
                </li>
                <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                  <Link to="/" className="">
                    Laptop & Ipad
                  </Link>
                </li>
                <li className="my-4 hover:text-indigo-500 hover:translate-x-4 inline-block duration-500">
                  <Link to="/" className="">
                    Airpods
                  </Link>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Follow Us"
              title="Follow Us"
              className=""
            >
              <div className="pb-8 md:py-0">
                <div className="flex flex-col gap-y-5">
                  <div>
                    <Link to="/" className="flex items-center text-xl">
                      <PiInstagramLogoFill />
                      <p className="ml-2">Instagram</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className="flex items-center text-xl">
                      <AiFillFacebook />
                      <p className="ml-2">Facebook</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className="flex items-center text-xl">
                      <RiTwitterXFill />
                      <p className="ml-2">Twitter</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className="flex items-center text-xl">
                      <BsGoogle />
                      <p className="ml-2">Google</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className="flex items-center text-xl">
                      <BsPinterest />
                      <p className="ml-2">Pinterest</p>
                    </Link>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Contact Us"
              title="Contact Us"
              className="-mb-5"
            >
              <p className="my-6">Got Question? Call us 24/7</p>
              <p className="my-6 text-2xl text-indigo-500 font-semibold flex items-center">
                <span>
                  <PiPhone className="mr-2" />
                </span>
                +88-018-2856-9660
              </p>
              <p className="my-6 flex items-center">
                <span>
                  <SlLocationPin className="mr-2" />
                </span>
                Mirpur 10, Dhaka, Bangladesh
              </p>
              <p className="my-6 flex items-center">
                {" "}
                <span>
                  <SlEnvolope className="mr-2" />
                </span>{" "}
                mezanurrahman200212@gmail.com
              </p>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>© 2024 Champso. All Rights Reserved.</span>
            <Link to="/" className="mt-5 md:mt-0">
              <span>Privacy policy</span>
            </Link>
            <Link to="/" className="my-2 md:my-0">
              <span>Terms of service</span>
            </Link>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Email"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Twitter"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="GitHub"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
