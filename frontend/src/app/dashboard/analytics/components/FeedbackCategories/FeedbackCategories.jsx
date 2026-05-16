import Categories from "./Categories";

export default function RecentCategories({ data }) {
  const total = data?.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl p-6">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-800">Top Categories</h3>
        <p className="text-[12px] text-slate-400 mt-0.5">By mention volume</p>
      </div>

      <div className="flex flex-col gap-1">
        {data?.map((item) => (
          <Categories key={item._id} item={item} total={total} />
        ))}
      </div>
    </div>
  );
}
