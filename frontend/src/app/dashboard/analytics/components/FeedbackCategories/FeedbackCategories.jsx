import Categories from "./Categories";

export default function RecentCategories() {
  const data = [
    { label: "Feature", value: 24 },
    { label: "Bug", value: 18 },
    { label: "UI", value: 12 },
    { label: "Performance", value: 9 },
    { label: "UX", value: 6 },
  ];

  const max = Math.max(...data.map((item) => item.value));

  return (
    <div className="border border-stone-200 rounded-xl p-6 bg-white shadow-sm">
      <h4 className="text-md font-semibold text-stone-800">Top categories</h4>
      <p className="text-xs font-medium text-stone-500 mb-4">
        By mention volume
      </p>

      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <Categories
            key={item.label}
            label={item.label}
            value={item.value}
            max={max}
          />
        ))}
      </div>
    </div>
  );
}
