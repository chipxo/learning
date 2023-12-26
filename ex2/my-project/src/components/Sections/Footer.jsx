import {
  faClock,
  faInbox,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage, Field, Formik } from "formik";
import Logo from "../common/Logo";
import SectionsTitle from "../common/SectionsTitle";
import Social from "../socialBar/Social";

const initialValues = {
  userName: "",
  email: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "Name is required";
  } else if (values.userName.trim().length < 2) {
    errors.userName = "Name must be at least 2 characters long";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())
  ) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const submitForm = ({ setSubmitting, resetForm }) => {
  setSubmitting(false);
  resetForm();
};

let userMap = [
  {
    id: 1,
    icon: faLocationDot,
    text: "91 Nolan Extensions Suite 670",
    link: "https://google.com/maps",
  },
  {
    id: 2,
    icon: faPhone,
    text: "+001 356-868-2454",
    link: "tel:+001356-868-2454 ",
  },
  {
    id: 3,
    icon: faInbox,
    text: "montichello@service.com",
    link: "mailto:montichello@service.com",
  },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-footer scroll-mt-[6.8rem] bg-cover bg-center md:scroll-mt-[50vh]"
    >
      <div className="mx-auto grid max-w-[770px] gap-y-8 p-4 md:pb-[200px]">
        <div className="relative bg-white px-4 py-10 md:-top-[10rem] md:px-10 md:py-14 lg:px-12">
          {/* Title */}
          <SectionsTitle
            isBgDark={false}
            isTitle={true}
            text={"Get in touch"}
          />
          <div className="grid gap-y-6 md:grid-cols-2">
            {/* Links */}
            <div className="info grid justify-items-center gap-y-10 font-[Montserrat] text-[15px] text-black md:justify-items-start md:gap-y-4  md:text-[18px]">
              {userMap.map(({ id, icon, text, link }) => (
                <a key={id} href={link} className="relative md:ml-6">
                  <span className="text-mid-purple absolute -left-6 top-[1px] overflow-hidden text-[15px] md:top-[2px]">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  {text}
                </a>
              ))}
              <p className="relative font-[Montserrat] md:ml-6">
                <span className="text-mid-purple absolute -left-6 top-[1px] overflow-hidden text-[15px] md:top-[2px]">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                From 07:05AM to 19:30PM
              </p>
            </div>

            {/* Form */}
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={submitForm}
            >
              {({ isValid, handleSubmit }) => (
                <form
                  onSubmit={handleSubmit}
                  className="grid gap-y-8 font-[Montserrat] text-black"
                >
                  <div className="relative">
                    <Field
                      type="text"
                      placeholder="Your name"
                      name="userName"
                      className="input input-primary relative w-full rounded-none border-none bg-white transition duration-100 hover:scale-105"
                    />
                    <ErrorMessage
                      name="userName"
                      component="div"
                      className="absolute top-12 text-red-600"
                    />
                  </div>

                  <div className="relative">
                    <Field
                      type="text"
                      placeholder="Your email"
                      name="email"
                      className="input input-primary relative w-full rounded-none border-none bg-white transition duration-100 hover:scale-105"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="absolute top-12 text-red-600"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={!isValid}
                      className="to-light-blue from-mid-purple border px-6 py-2 font-[Montserrat] uppercase transition-all hover:bg-gradient-to-br hover:text-white md:px-10 md:py-3"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col-reverse items-center gap-y-6 text-white md:grid md:grid-cols-2">
          <div className="grid gap-y-10">
            <Logo href={"#aboutUs"} />
            <p className="font-[Montserrat]">Copyrights © 2020 Montichello</p>
          </div>
          <ul className="justify-self-end">
            <Social isHeader={false} />
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
