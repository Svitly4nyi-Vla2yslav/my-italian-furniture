import React from "react";

const Contacts: React.FC = () => {
  return (
    <main className="min-h-screen bg-white p-8">
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
      </form>
    </main>
  );
};

export default Contacts;

// main.min-h-screen.bg-white.p-8>h1.text-3xl.font-semibold.text-primary.mb-4{Контакти}+p.text-lg.
// text-gray-600.mb-6{Зв'яжіться з нами для отримання додаткової інформації.}+form.space-y-4.max-w-lg>
//   (div>label[for="name"].block.text-sm.font-medium.text-gray-700{Ім'я}+
//     input#name[type="text"].mt-1.block.w-full.p-2.border.border-gray-300.rounded-md[placeholder="Ваше ім'я"])+
//     !(div>label[for="email"].block.text-sm.font-medium.text-gray-700{Email}+input#email[type="email"]
//       .mt-1.block.w-full.p-2.border.border-gray-300.rounded-md[placeholder="Ваш email"])+(div>label[for="message"]
//         .block.text-sm.font-medium.text-gray-700{Повідомлення}+textarea#message.mt-1.block.w-full.p-2.border
//         .border-gray-300.rounded-md[rows=4][placeholder="Ваше повідомлення"])+button[type="submit"].w-full.bg-primary
//         .text-white.py-2.px-4.rounded.hover\:bg-primary-dark.transition-colors{Надіслати}
