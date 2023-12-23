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
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const submitForm = (values, { setSubmitting, resetForm }) => {
  setSubmitting(false);
  resetForm();
};

const Footer = () => {
  return (
    <div className="mx-auto max-w-[770px] px-4 pb-[200px]">
      <div className="relative -top-[10rem] bg-white px-4 py-10 shadow-2xl md:px-10 md:py-14 lg:px-12">
        {/* TITLE */}

        <div>
          <SectionsTitle
            isBgDark={false}
            isTitle={true}
            text={"Get in touch"}
          />
        </div>
        <div className="grid gap-y-6 md:grid-cols-2 ">
          {/* LINKS */}

          <div className="info grid justify-items-center gap-y-10 font-[Montserrat] text-[15px] text-black md:justify-items-start md:gap-y-4  md:text-[18px]">
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
          {/* FORM */}

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
                    className="input input-primary relative w-full rounded-none border-none bg-white"
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
                    className="input input-primary relative w-full rounded-none border-none bg-white"
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
      {/* NAV */}

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
  );
};

export default Footer;
