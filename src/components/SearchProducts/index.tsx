"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

export default function SearchProducts() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(() => searchParams.get("q") || "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);

    if (newSearch.trim()) {
      router.push(pathname + "?" + createQueryString("q", newSearch));
    } else {
      router.push(pathname);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search products.."
        className="w-full border border-gray-300 rounded-md p-2 max-w-sm"
      />
    </div>
  );
}
