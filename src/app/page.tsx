import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 ">
      <header className="bg-white shadow-md py-4 fixed w-full">
        <h1 className="text-3xl font-bold text-center text-primary">
          Italien Furniture
        </h1>
      </header>
      <main className="mt-14">
        <section className="text-center mb-8">
          <h2 className="text-2xl">
            Ласкаво просимо на сайт італійських меблів
          </h2>
          <p className="text-primary mt-2">Це ваша головна сторінка</p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-screen">
          {/* Карточки продуктів */}
          <div className="bg-slate-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2"> Product №1</h3>
            <p className="text-primary"> About product</p>
          </div>
          <div className="bg-slate-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2"> Product №1</h3>
            <p className="text-primary"> About product</p>
          </div>
          <div className="bg-slate-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2"> Product №1</h3>
            <p className="text-primary"> About product</p>
          </div>
          <div className="bg-slate-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2"> Product №1</h3>
            <p className="text-primary"> About product</p>
          </div>
          <div className="bg-slate-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2"> Product №1</h3>
            <p className="text-primary"> About product</p>
          </div>
          <div className="bg-slate-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2"> Product №1</h3>
            <p className="text-primary"> About product</p>
          </div>
          {/* Додаткові продукти */}
        </section>
      </main>
      <footer className="bg-white shadow-md py-4 text-center mt-4">
        <p>© 2024 Italian Furniture</p>
      </footer>
    </div>
  );
};

export default HomePage;
