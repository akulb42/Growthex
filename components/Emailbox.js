import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8rgv9po', 'template_dljs3jf', 'Z9gCdhyHy98ZtQ9Rj')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold pb-4">Contact us</h1>
      <p className="pb-4 mx-auto">
        Want to know when Growthex comes out or have any other questions? feel
        free to send us an email for any queries.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <ul>
          <li className="text-black">
            <input
              placeholder="Name"
              className="lg:w-96 md:w-96 w-64 h-12 rounded bg-gray-200 pl-2"
              type="text"
              name="name"
              required
            />
          </li>
          <li className="py-2 mx-auto">
            <input
              placeholder="Email"
              type="email"
              className="lg:w-96 md:w-96 w-64 h-12 rounded bg-gray-200 pl-2"
              name="email"
              required
            />
          </li>
          <li>
            <input
              placeholder="Subject"
              type="text"
              className="lg:w-96 md:w-96 w-64 h-12 rounded bg-gray-200 pl-2"
              name="subject"
              required
            />
          </li>
          <li>
            <textarea
              placeholder="Message"
              name="message"
              className="lg:w-96 md:w-96 w-64 h-12 rounded bg-gray-200 pl-2 mt-2"
              required
            ></textarea>
          </li>
          <li>
            <input
              type="submit"
              className="mt-2 rounded border-solid border h-8  w-24 text-white text-center bg-green-500"
              value="Send"
            />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ContactUs;
