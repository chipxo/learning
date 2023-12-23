import {
  faClock,
  faInbox,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import { Formik } from "formik";
import Button from "../common/Button";
import Logo from "../common/Logo";
import SectionsTitle from "../common/SectionsTitle";
import Social from "../socialBar/Social";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (name.length == 0) {
      alert("Invalid Form, First Name can not be empty");
      return;
    }

    // Check if the Email is an Empty string or not.

    if (email.length == 0) {
      alert("Invalid Form, Email Address can not be empty");
      return;
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0;
    // variable to count lowercase characters in the password.
    let countLowerCase = 0;
    // variable to count digit characters in the password.
    let countDigit = 0;
    // variable to count special characters in the password.
    let countSpecialCharacters = 0;

    alert("Form is valid");
  }

  return (
    <div className="mx-auto grid max-w-[770px] gap-y-5 pb-[200px] pt-10">
      <div className="relative -top-[10rem] bg-white px-12 py-16">
        <div className="title">
          <SectionsTitle
            isBgDark={false}
            isTitle={true}
            text={"Get in touch"}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="info grid gap-y-4 font-[Montserrat] text-[18px] text-black">
            <a href="#" className="relative ml-6">
              <span className="text-mid-purple absolute -left-6 top-1 text-[15px]">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              91 Nolan Extensions Suite 670
            </a>
            <a href="#" className="relative ml-6">
              <span className="text-mid-purple absolute -left-6 top-1 text-[15px]">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +001 356-868-2454
            </a>
            <a href="#" className="relative ml-6">
              <span className="text-mid-purple absolute -left-6 top-1 text-[15px]">
                <FontAwesomeIcon icon={faInbox} />
              </span>
              montichello@service.com
            </a>
            <a href="#" className="relative ml-6">
              <span className="text-mid-purple absolute -left-6 top-1 overflow-hidden text-[15px]">
                <FontAwesomeIcon icon={faClock} />
              </span>
              From 07:05AM to 19:30PM
            </a>
          </div>
          <form
            action="#"
            method="post"
            className="grid gap-y-4 font-[Montserrat] text-black"
          >
            <label htmlFor="userName">
              <input
                onChange={(e) => setName(e.target.value)}
                name="userName"
                id="userName"
                type="text"
                placeholder="Your name"
                className="input input-primary w-full rounded-none border-none bg-white"
              />
            </label>
            <label htmlFor="email">
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                type="email"
                placeholder="Your email"
                className="input input-primary w-full rounded-none border-none bg-white"
              />
            </label>
            <div className="justify-self-end">
              <Button
                text={"Submit"}
                onClick={() => {
                  validateForm();
                }}
                href={"https://pornhub.com"}
              />
            </div>
          </form>
        </div>
      </div>
      <nav className="grid grid-cols-2 text-white">
        <div className="grid gap-y-10">
          <Logo href={"#aboutUs"} />
          <p className="font-[Montserrat]">Copyrights © 2020 Montichello</p>
        </div>
        <ul className="justify-self-end">
          <Social />
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
