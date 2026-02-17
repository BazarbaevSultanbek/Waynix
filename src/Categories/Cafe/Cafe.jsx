import { useMemo, useState } from "react";
import Banner from "../../utils/banner/Banner";
import Footer from "../../utils/footer/Footer";
import "../../utils/styles/Cafe.scss";
import { Link } from "react-router";
import eatingPlaces from "../../http/CafeData";

const categories = ["All", "Restaurant", "Cafe", "Fast Food"];
const sortOptions = ["Default", "Hudud", "Mashhurlik", "Nomi"];

export default function Cafe() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Default");
  const [viewMode, setViewMode] = useState("list");
  const [openFilter, setOpenFilter] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const itemsPerPage = 6;

  const toggleFilter = (key) => {
    setOpenFilter((prev) => (prev === key ? null : key));
  };

  const normalized = useMemo(
    () =>
      eatingPlaces.map((p, index) => ({
        id: p.id ?? index + 1,
        name: p.name,
        type: p.type || "Cafe",
        desc: p.description || "Ovqatlanish joyi haqida ma'lumot",
        location: p.location,
        rating: p.rating ?? 4.2,
        popularity: p.popularity ?? Math.round((p.rating || 4) * 20),
        region: p.region || p.location || "Unknown",
        image: p.image,
        phone: p.phone,
      })),
    [],
  );

  const searched = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return normalized;
    return normalized.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q),
    );
  }, [search, normalized]);

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return searched;
    return searched.filter((item) => item.type === selectedCategory);
  }, [selectedCategory, searched]);

  const sorted = useMemo(() => {
    const data = [...filtered];
    if (selectedSort === "Nomi") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "Mashhurlik") {
      data.sort((a, b) => b.popularity - a.popularity);
    } else if (selectedSort === "Hudud") {
      data.sort((a, b) => a.region.localeCompare(b.region));
    }
    return data;
  }, [filtered, selectedSort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / itemsPerPage));

  const paged = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return sorted.slice(start, start + itemsPerPage);
  }, [sorted, page]);

  const popularList = useMemo(
    () => [...normalized].sort((a, b) => b.rating - a.rating).slice(0, 4),
    [normalized],
  );

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  return (
    <>
      <Banner />

      <section className="cafe-objects">
        <div className="cafe-objects__wrap">
          <div className="cafe-objects__header">
            <h2 className="cafe-objects__title">Ovqatlanish joylari</h2>

            <div className="cafe-objects__filters">
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

          <div className={`cafe-objects__list ${viewMode}`}>
            {paged.map((item) => (
              <article className="cafe-card" key={item.id}>
                <div className="cafe-card__media">
                  <img src={item.image} alt={item.name} />
                  <span className="cafe-card__rating">★ {item.rating}</span>
                </div>

                <div className="cafe-card__body">
                  <h3 className="cafe-card__name">{item.name}</h3>
                  <p className="cafe-card__tag">{item.type}</p>
                  <p className="cafe-card__desc">{item.desc}</p>
                  <p className="cafe-card__place">Joylashuv: {item.location}</p>
                </div>

                <div className="cafe-card__action">
                  <button className="cafe-card__save" type="button">🔖 Saqlash</button>
                  <button className="cafe-card__btn" type="button">
                    <Link to="/cafe/id">Batafsil</Link>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="cafe-objects__pagination">
            <button className="page-btn" onClick={() => goToPage(page - 1)}>‹</button>
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
            <button className="page-btn" onClick={() => goToPage(page + 1)}>›</button>
          </div>
        </div>
      </section>

      <section className="popular-cafe">
        <div className="popular-cafe__wrap">
          <div className="popular-cafe__head">
            <h3 className="popular-cafe__title">Mashhur ovqatlanish joylari</h3>
          </div>

          <div className="popular-cafe__grid">
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
                    <button className="popular-card__link">Batafsil →</button>
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
