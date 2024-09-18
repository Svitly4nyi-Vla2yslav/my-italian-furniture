import React from "react";
import ImageBackground from "../component/ImageBackground";

const RealEstate: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col flex-wrap  p-8 mt-14">
      <ImageBackground/>
      <h2 className="text-3xl text-center font-semibold text-primary mb-4">
        Нерухомість в Італії
      </h2>
      <p className="text-lg text-center text-gray-600">
        {" "}
        Ми пропонуємо елітну нерухомість в найкрасивіших місцях Італії.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold  text-primary">Вілла в Тоскані</h3>
          <p className="text-gray-500">Вражаючий вигляд та спокій.</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold  text-primary">Вілла в Тоскані</h3>
          <p className="text-gray-500">Вражаючий вигляд та спокій.</p>
        </div>{" "}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold  text-primary">Вілла в Тоскані</h3>
          <p className="text-gray-500">Вражаючий вигляд та спокій.</p>
        </div>{" "}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold  text-primary">Вілла в Тоскані</h3>
          <p className="text-gray-500">Вражаючий вигляд та спокій.</p>
        </div>{" "}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold  text-primary">Вілла в Тоскані</h3>
          <p className="text-gray-500">Вражаючий вигляд та спокій.</p>
        </div>{" "}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold  text-primary">Вілла в Тоскані</h3>
          <p className="text-gray-500">Вражаючий вигляд та спокій.</p>
        </div>{" "}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold  text-primary">Вілла в Тоскані</h3>
          <p className="text-gray-500">Вражаючий вигляд та спокій.</p>
        </div>{" "}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold  text-primary">Вілла в Тоскані</h3>
          <p className="text-gray-500">Вражаючий вигляд та спокій.</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold  text-primary">Вілла в Тоскані</h3>
          <p className="text-gray-500">Вражаючий вигляд та спокій.</p>
        </div>
      </div>
    </main>
  );
};

export default RealEstate;
