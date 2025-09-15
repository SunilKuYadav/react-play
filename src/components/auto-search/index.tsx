// https://dummyjson.com/products/search?q=phone

import { useEffect, useState } from "react";

const AutoCompleteSearch = () => {
  const [query, setQuery] = useState<string>("p");
  const [isFocused, setIsFocused] = useState(false);
  const [options, setOptions] = useState<{ id: number; name: string }[]>([]);

  const fetchData = async (query: string) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    const data = await response.json();
    console.log("Fetched data:", data);
    setOptions(data.recipes || []);
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {options.length > 0 && isFocused && (
        <div
          style={{
            border: "1px solid #ccc",
            marginTop: "5px",
            textAlign: "left",
            padding: "10px",
          }}
        >
          {options.map((option) => (
            <p
              style={{
                padding: "5px 0",
              }}
              key={option.id}
            >
              {option.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export { AutoCompleteSearch };
