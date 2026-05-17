import Categories from "./Categories";

export default function RecentCategories({ data }) {
  const total = data?.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-[15px] font-semibold text-slate-900 leading-none">
            Top Categories
          </h3>
          <p className="text-[12px] text-slate-500 mt-1.5">By mention volume</p>
        </div>
        {total > 0 && (
          <span className="text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200/60 px-2.5 py-1.5 rounded-lg tabular-nums select-none">
            {total} total
          </span>
        )}
      </div>

      <div className="flex flex-col divide-y divide-slate-100">
        {data?.map((item) => (
          <Categories key={item._id} item={item} total={total} />
        ))}
      </div>
    </div>
  );
}
