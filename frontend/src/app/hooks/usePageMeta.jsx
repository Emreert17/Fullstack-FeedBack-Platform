import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { routeMeta } from "../data/data";

export default function usePageMeta() {
  const pathName = usePathname();

  useEffect(() => {
    const meta = routeMeta[pathName];

    if (!meta) return;

    document.title = meta.title;
    const desc = document.querySelector("meta[name='description']");
    if (desc) {
      desc.setAttribute("content", meta.description);
    }
  }, [pathName]);
}
