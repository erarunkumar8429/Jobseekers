interface Props {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}

const CategoryFilter = ({ categories, selected, onSelect }: Props) => {
  return (
    <div style={{
      display: "flex",
      gap: "10px",
      overflowX: "auto",
      padding: "10px 16px"
    }}>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            padding: "6px 14px",
            borderRadius: "20px",
            border: "none",
            background: selected === cat ? "#e63946" : "#f1f1f1",
            color: selected === cat ? "#fff" : "#000",
            cursor: "pointer",
            whiteSpace: "nowrap"
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
