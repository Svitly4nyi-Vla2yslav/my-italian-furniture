import React from "react";
import ImageBackground from "../component/ImageBackground";

const Contacts: React.FC = () => {
  return (
    <main className="w-full h-screen min-h-screen bg-transparent
     flex flex-col mt-20 ml-0 
    mr-auto items-center">
      <ImageBackground/>
      <h2 className="bg-transparent text-3xl font-semibold text-primary mb-4">
        Контакти
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        {" "}
        Зв&apos;яжіться з нами для отримання додаткової інформації.
      </p>
      <form className="space-y-4 w-96">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 "
          >
            Ім&lsquo;я
          </label>{" "}
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Повідомлення
          </label>
          <textarea
            name=""
            id="message"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder="Ваше повідомлення"
          />
        </div>
         <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md"
          >
          Відправити
          </button> 
      </form>
    </main>
  );
};

export default Contacts;

