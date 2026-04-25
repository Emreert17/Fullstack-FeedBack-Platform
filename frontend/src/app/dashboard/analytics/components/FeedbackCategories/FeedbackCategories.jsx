import Categories from "./Categories";

export default function RecentCategories({ data }) {
  const total = data?.reduce((acc, curr) => acc + curr.count, 0);
  return (
    <div className="border border-stone-200 rounded-xl p-6 bg-white shadow-sm">
      <h4 className="text-md font-semibold text-stone-800">Top categories</h4>
      <p className="text-xs font-medium text-stone-500 mb-4">
        By mention volume
      </p>

      <div className="flex flex-col gap-4">
        {data?.map((item) => (
          <Categories key={item._id} item={item} total={total} />
        ))}
      </div>
    </div>
  );
}
