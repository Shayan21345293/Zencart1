import client from '../../sanityClient';

export default async function Page() {
  // Fetch products data directly inside the component
  const products = await client.fetch(`*[_type == 'product']`);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={product.imagePath} 
              alt={product.name} 
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-500 mb-2">{product.description}</p>
              <p className="text-gray-500 font-semibold mb-2">STOCK: {product.stockLevel}</p>
              <p className="text-blue-500 font-semibold mb-2">CATEGORY: {product.category}</p>
              <h3 className="text-lg font-semibold text-green-600">RS{product.price}</h3>
              <h3 className="text-lg font-semibold text-red-600">{product.discountPercentage}% DISCOUNT</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
