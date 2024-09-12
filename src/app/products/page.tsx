import React from 'react';

const Products: React.FC = () => {
  return (
    <main className='min-h-screen bg-gray-50 p-8'>
      <h1 className='text-3xl font-semibold text-primary mb-4'>Products</h1>
      <p className='text-lg text-gray-600'>Ми пропонуємо високоякісні італійські меблі.</p>
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
  );
};

export default Products;
