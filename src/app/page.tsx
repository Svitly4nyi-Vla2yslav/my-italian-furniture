import React from "react";
import HomeBackground from "./component/HomeBackground";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HomeBackground />
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
        </section>
      </main>
    </div>
  );
};

export default HomePage;
