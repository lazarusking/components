import {
  Facebook,
  GitHub,
  Icon,
  Instagram,
  Linkedin,
  Twitter,
} from "react-feather";
import "./App.css";

const colors = [
  "bg-violet-500",
  "bg-violet-600",
  "bg-violet-700",
  "bg-purple-600",
];
const profile = {
  src: "/images/profile.png",
  alt: "Cartoonized version of myself",
};
type SocialType = {
  name: string;
  link: string;
  icon: Icon;
}[];

const socials: SocialType = [
  {
    name: "Github",
    link: "https://github.com/lazarusking",
    icon: GitHub,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/lazarusking",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/_accelx",
    icon: Twitter,
  },
  {
    name: "Facebook",
    link: "https://facebook.com/lazaruskking",
    icon: Facebook,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/badass_accel/",
    icon: Instagram,
  },
];

export default function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-700 to-blue-700">
        <section className="w-4/5 sm:w-auto lg:p-8 font-text">
          <div className="flex flex-col p-4 py-8 text-white border border-purple-600 rounded-lg shadow-lg ring-2 sm:flex-row">
            <div className="relative flex flex-col items-center w-full mx-auto divide-y-2 divide-indigo-500 rounded-lg ">
              <div className="flex justify-center">
                <div className="pt-2">
                  <img
                    aria-label="profile image"
                    className={"rounded-full size-[114px]"}
                    src={profile.src}
                    alt={profile.alt}
                  />
                  <h1 className="text-xl font-bold">King Lazarus</h1>
                </div>
              </div>

              <ul className="flex flex-col w-full m-3 text-xs font-medium leading-loose uppercase sm:w-80 ">
                {socials.map((social) => (
                  <li
                    key={social.name}
                    className={`${
                      colors[Math.floor(Math.random() * colors.length)]
                    } transition ease-in-out duration-300 hover:scale-105 flex tracking-widest px-6 rounded-md justify-between items-center self-center bg-violet-500 m-1.5 h-12 w-full lg:w-80 max-w-md`}
                  >
                    <a
                      href={social.link}
                      aria-label={social.name}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between w-full"
                    >
                      <span>{social.name}</span>
                      {
                        <social.icon
                          aria-label={`${social.name}`}
                          className={`h-6 w-6 rounded-md`}
                        />
                      }
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col text-xl font-bold ">
              <div
                className="navbar-menu hidden rounded-lg shadow .ring .border border-violet-500 lg:ml-20 h-full md:w-96 py-4"
                id="dropdown-email"
              >
                <form
                  action="https://send.pageclip.co/inZffAtdzjft7liPKHBdhOWuQvHG2SdG/contact-form"
                  method="post"
                  className="grid h-full grid-cols-1 gap-6 p-4 pageclip-form"
                >
                  <label className="">
                    <span>Full Name</span>
                    <input
                      type="text"
                      name="subject"
                      className="block w-full mt-1 text-black border-gray-300 rounded-md form-input focus:ring-purple-200"
                    />
                  </label>
                  <label className="">
                    <span>Email</span>
                    <input
                      type="text"
                      name="email"
                      className="block w-full mt-1 text-black border-gray-300 rounded-md form-input focus:ring-purple-200"
                    />
                  </label>
                  <label className="">
                    <span>Message</span>
                    <textarea className="block w-full h-24 mt-1 text-black border-gray-300 rounded-md form-textarea focus:ring-purple-200"></textarea>
                  </label>
                  <button
                    aria-label="submit"
                    type="submit"
                    value="email-message"
                    className="rounded-md bg-primary pageclip-form__submit"
                  >
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-col flex-wrap items-center justify-center hidden px-4 rounded-lg shadow"></div>
        </section>
      </div>
      {/* </ThemeSwitcher> */}
    </>
  );
}
