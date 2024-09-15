import React from "react";

const Contacts: React.FC = () => {
  return (
    <main className="min-h-screen bg-white p-8 mt-14">
      <h2 className="bg-white text-3xl font-semibold text-primary mb-4">
        Контакти
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        {" "}
        Зв&apos;яжіться з нами для отримання додаткової інформації.
      </p>
      <form className="space-y-4 max-w-lg ">
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

