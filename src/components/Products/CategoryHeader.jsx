const CategoryHeader = ({ category, total }) => {
  return (
    <div className="border-b pb-4">
      <h1 className="text-3xl font-[var(--font-title)] uppercase">
        {category}
      </h1>

      <p className="text-sm text-gray-500 mt-2">{total} productos</p>
    </div>
  );
};

export default CategoryHeader;
