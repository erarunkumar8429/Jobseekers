// import "./CategoryFilter.css";

interface Props {
  categories: string[];
  selected: string;
  onSelect: (c: string) => void;
}

const CategoryFilter: React.FC<Props> = ({
  categories,
  selected,
  onSelect,
}) => {
  return (
    <div className="category-filter">
      {["All", ...categories].map((c) => (
        <button
          key={c}
          className={selected === c ? "active" : ""}
          onClick={() => onSelect(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
