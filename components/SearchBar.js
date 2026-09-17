"use client";

export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  // TODO: Build your controlled SearchBar component here
  return (
    <div className="search-bar-wrapper">
      <span className="search-icon">🔍</span>
      {/* TODO: Add input connected to value and onChange */}
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className="search-clear-btn"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
