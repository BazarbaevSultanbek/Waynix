import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../utils/banner/Banner";
import Footer from "../../utils/footer/Footer";
import "../../utils/styles/Catalog.scss";

const sortOptions = ["Default", "Hudud", "Mashhurlik", "Nomi"];

export default function ListPage({ title, data, basePath, popularTitle }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Default");
  const [viewMode, setViewMode] = useState("list");
  const [openFilter, setOpenFilter] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const itemsPerPage = 5;

  const categories = useMemo(() => {
    const set = new Set(data.map((item) => item.type));
    return ["All", ...Array.from(set)];
  }, [data]);

  const toggleFilter = (key) => {
    setOpenFilter((prev) => (prev === key ? null : key));
  };

  const searched = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return data;
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
    );
  }, [search, data]);

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return searched;
    return searched.filter((item) => item.type === selectedCategory);
  }, [selectedCategory, searched]);

  const sorted = useMemo(() => {
    const copy = [...filtered];
    if (selectedSort === "Nomi") {
      copy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "Mashhurlik") {
      copy.sort((a, b) => b.popularity - a.popularity);
    } else if (selectedSort === "Hudud") {
      copy.sort((a, b) => a.region.localeCompare(b.region));
    }
    return copy;
  }, [filtered, selectedSort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / itemsPerPage));

  const paged = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return sorted.slice(start, start + itemsPerPage);
  }, [sorted, page]);

  const popularList = useMemo(
    () => [...data].sort((a, b) => b.rating - a.rating).slice(0, 4),
    [data]
  );

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  return (
    <>
      <Banner />

      <section className="catalog-page">
        <div className="catalog-wrap">
          <div className="catalog-header">
            <h2 className="catalog-title">{title}</h2>

            <div className="catalog-filters">
              <div className="search-wrap">
                <input
                  type="text"
                  placeholder="Qidirish..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                />
              </div>

              <div className={`filter-group ${openFilter === "category" ? "is-open" : ""}`}>
                <button
                  className="icon-pill"
                  onClick={() => toggleFilter("category")}
                  type="button"
                  aria-label="Filter by category"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                </button>
                <div className="filter-menu">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`filter-item ${selectedCategory === cat ? "is-active" : ""}`}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setPage(1);
                        setOpenFilter(null);
                      }}
                      type="button"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`filter-group ${openFilter === "sort" ? "is-open" : ""}`}>
                <button
                  className="icon-pill"
                  onClick={() => toggleFilter("sort")}
                  type="button"
                  aria-label="Sort"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21 16-4 4-4-4"></path>
                    <path d="M17 20V4"></path>
                    <path d="m3 8 4-4 4 4"></path>
                    <path d="M7 4v16"></path>
                  </svg>
                </button>
                <div className="filter-menu">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      className={`filter-item ${selectedSort === opt ? "is-active" : ""}`}
                      onClick={() => {
                        setSelectedSort(opt);
                        setPage(1);
                        setOpenFilter(null);
                      }}
                      type="button"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === "list" ? "is-active" : ""}`}
                  onClick={() => setViewMode("list")}
                  type="button"
                >
                  List
                </button>
                <button
                  className={`view-btn ${viewMode === "grid" ? "is-active" : ""}`}
                  onClick={() => setViewMode("grid")}
                  type="button"
                >
                  Grid
                </button>
              </div>
            </div>
          </div>

          <div className={`catalog-list ${viewMode}`}>
            {paged.map((item) => (
              <article className="catalog-card" key={item.id}>
                <div className="catalog-card__media">
                  <img src={item.image} alt={item.name} />
                  <span className="catalog-card__rating">★ {item.rating}</span>
                </div>

                <div className="catalog-card__body">
                  <h3 className="catalog-card__name">{item.name}</h3>
                  <p className="catalog-card__tag">{item.type}</p>
                  <p className="catalog-card__desc">{item.desc}</p>
                  <p className="catalog-card__place">Joylashuv: {item.location}</p>
                </div>

                <div className="catalog-card__action">
                  <button className="catalog-card__save" type="button">
                    🔖 Saqlash
                  </button>
                  <button className="catalog-card__btn" type="button">
                    <Link to={`${basePath}/${item.id}`}>Batafsil</Link>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="catalog-pagination">
            <button className="page-btn" onClick={() => goToPage(page - 1)}>
              ‹
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  className={`page-btn ${p === page ? "is-active" : ""}`}
                  onClick={() => goToPage(p)}
                >
                  {p}
                </button>
              );
            })}
            <button className="page-btn" onClick={() => goToPage(page + 1)}>
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="popular-catalog">
        <div className="popular-catalog__wrap">
          <div className="popular-catalog__head">
            <h3 className="popular-catalog__title">{popularTitle}</h3>
          </div>

          <div className="popular-catalog__grid">
            {popularList.map((item) => (
              <article className="popular-card" key={item.id}>
                <div className="popular-card__media">
                  <img src={item.image} alt={item.name} />
                  <span className="popular-card__rating">★ {item.rating}</span>
                </div>
                <div className="popular-card__body">
                  <p className="popular-card__tag">{item.type}</p>
                  <h4 className="popular-card__name">{item.name}</h4>
                  <p className="popular-card__desc">{item.desc}</p>
                  <div className="popular-card__bottom">
                    <span className="popular-card__place">{item.location}</span>
                    <Link className="popular-card__link" to={`${basePath}/${item.id}`}>
                      Batafsil →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
