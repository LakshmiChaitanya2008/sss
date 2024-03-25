import { FaInstagram, FaPhone, FaPhoneAlt } from "react-icons/fa";
export default function App() {
  return (
    <>
      <header className="text-gray-600 body-font scroll-smooth">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2} 
      className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
      viewBox="0 0 24 24"d
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg> */}
            <img src="/logo.jpg" className=" text-white h-20 rounded-full" />
            <span className="ml-3 text-xl">S SECURE SURVEILENCE</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center  text-xl justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer" href="#home">
              Home
            </a>
            <a
              className="mr-5 hover:text-gray-900 cursor-pointer"
              href="#about"
            >
              About
            </a>
            <a
              className="mr-5 hover:text-gray-900 cursor-pointer"
              href="#services"
            >
              Services
            </a>
            <a
              className="mr-5 hover:text-gray-900 cursor-pointer"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <section className="text-gray-600 body-font" id="home">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Make your space safe and secure with us.
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Welcome to S SECURE SURVEILLANCE, where safety meets innovation.
              Our cutting-edge solutions ensure peace of mind, always. With our
              user-friendly interfaces, managing your security has never been
              easier. Experience unparalleled protection with SSS today!
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.cctvsecuritypros.com/product_images/uploaded_images/workplace-cctv-camera.jpg"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font" id="about">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Based in Vijayawada, we specialize in providing quality CCTV
              services for schools and offices, ensuring optimal security. Our
              experienced team employs cutting-edge technology to deliver
              reliable surveillance solutions tailored to the unique needs of
              each client. With our commitment to excellence, we strive to offer
              peace of mind and safeguard the environments where our systems are
              deployed.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.britannica.com/72/239172-050-AAC4A91E/security-CCTV-camera.jpg"
            />
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font" id="services">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-2">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-2">
              Our Services
            </h1>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">CCTV Sales</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">CCTV Service</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Networking</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Video Door Alarms</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  Fixing and Configuration
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font" id="contact">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Contact Us!
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              For inquiries feel free to reach out to us. We're always eager to
              connect with our clients and explore new opportunities.
              Additionally, you can stay updated with our latest news and
              updates by following us on our social media channels below. We
              look forward to hearing from you!
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/s_secure_surveillance/"
                className="inline-flex text-white bg-indigo-500 items-center border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="tel:7032361182"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                <FaPhoneAlt />
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/hero.jpg"
            />
          </div>
          <span className="italic">Satya Naidu</span>
        </div>
      </section>
    </>
  );
}
