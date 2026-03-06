import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../../utils/banner/Banner";
import Footer from "../../utils/footer/Footer";
import "../../utils/styles/Catalog.scss";
import $api from "../../http/axios";
import { useI18n } from "../../i18n/I18nProvider";
import {
  translateCatalogDesc,
  translateCatalogLocation,
} from "../../i18n/catalogText";
import { showNotification } from "@mantine/notifications";
import getCookie from "../../utils/getCookie";

const sortOptions = ["Default", "Hudud", "Mashhurlik", "Nomi"];

const API_ORIGIN =
  import.meta.env.VITE_API_ORIGIN || "https://waynix-server.vercel.app";

const categoryLabel = {
  tours: "Turobyektlar",
  shop: "Savdo markazlari",
  cafe: "Ovqatlanish joylari",
  hotels: "Mehmonxonalar",
  services: "Servislar",
  entertainment: "Entertainment",
  medical: "Tibbiyot",
  government: "Davlat idoralari",
  education: "Ta'lim",
};

const toCardShape = (item) => ({
  id: item._id || item.id,
  name: item.name,
  type: item.type || categoryLabel[item.category] || item.category,
  desc: item.description || item.desc || "",
  fullDescription: item.description || item.fullDescription || "",
  location: item.location || "",
  address: item.location || "",
  region: item.region || "",
  popularity: item.popularity || 0,
  rating: Number(item.rating || 4.5),
  image: item.images?.[0]
    ? item.images[0].startsWith("http")
      ? item.images[0]
      : `${API_ORIGIN}${item.images[0]}`
    : item.image,
  images: Array.isArray(item.images)
    ? item.images.map((img) =>
        img.startsWith("http") ? img : `${API_ORIGIN}${img}`
      )
    : item.images,
  phone: item.phones?.[0] || item.phone || "",
  hours: item.workingHours || item.hours || "",
  socials: item.socialLinks || item.socials || {},
});

export default function ListPage({
  title,
  data,
  basePath,
  popularTitle,
  categoryKey,
}) {
  const { t, language } = useI18n();
  const navigate = useNavigate();
  const [submittedPlaces, setSubmittedPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Default");
  const [viewMode, setViewMode] = useState("list");
  const [openFilter, setOpenFilter] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const itemsPerPage = 5;

  useEffect(() => {
    let isMounted = true;
    const loadPlaces = async () => {
      try {
        const { data: places } = await $api.get("/places/public", {
          params: { category: categoryKey },
        });
        if (!isMounted) return;
        setSubmittedPlaces((places || []).map(toCardShape));
      } catch (err) {
        if (isMounted) setSubmittedPlaces([]);
      }
    };
    loadPlaces();
    return () => {
      isMounted = false;
    };
  }, [categoryKey]);

  const mergedData = useMemo(
    () => [...submittedPlaces, ...data].map(toCardShape),
    [submittedPlaces, data]
  );

  const categories = useMemo(() => {
    const set = new Set(mergedData.map((item) => item.type));
    return [t("catalog.all"), ...Array.from(set)];
  }, [mergedData, t]);

  const toggleFilter = (key) => {
    setOpenFilter((prev) => (prev === key ? null : key));
  };

  const searched = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return mergedData;
    return mergedData.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
    );
  }, [search, mergedData]);

  const filtered = useMemo(() => {
    if (selectedCategory === t("catalog.all")) return searched;
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
    () => [...mergedData].sort((a, b) => b.rating - a.rating).slice(0, 4),
    [mergedData]
  );

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  const localizedTitle = title || `${t("catalog.popular")} ${categoryLabel[categoryKey] || ""}`;
  const localizedPopularTitle = popularTitle || `${t("catalog.popular")} ${categoryLabel[categoryKey] || ""}`;
  const categoryTitleMap = {
    tours: t("banner.catTours"),
    shop: t("banner.catShop"),
    cafe: t("banner.catCafe"),
    hotels: t("banner.catHotels"),
    services: t("banner.catServices"),
    entertainment: t("banner.catEntertainment"),
    medical: t("banner.catMedical"),
    government: t("banner.catGovernment"),
    education: t("banner.catEducation"),
  };
  const resolvedTitle = categoryTitleMap[categoryKey] || localizedTitle;
  const resolvedPopularTitle = `${t("catalog.popular")} ${categoryTitleMap[categoryKey] || ""}`.trim();
  const translateDesc = (item) => {
    if (item?.translations?.desc?.[language]) return item.translations.desc[language];
    return translateCatalogDesc(item.desc, language);
  };
  const translateLocation = (item) => {
    if (item?.translations?.location?.[language]) {
      return item.translations.location[language];
    }
    return translateCatalogLocation(item.location, language);
  };
  const isLoggedIn = Boolean(getCookie("accessToken") || getCookie("currentUser"));
  const requireLogin = () => {
    if (isLoggedIn) return true;
    showNotification({
      title: t("banner.login"),
      message: t("catalog.loginRequired"),
      color: "orange",
    });
    return false;
  };

  return (
    <>
      <Banner />

      <section className="catalog-page">
        <div className="catalog-wrap">
          <div className="catalog-header">
            <h2 className="catalog-title">{resolvedTitle}</h2>

            <div className="catalog-filters">
              <div className="search-wrap">
                <input
                  type="text"
                  placeholder={t("catalog.search")}
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
                  {t("catalog.list")}
                </button>
                <button
                  className={`view-btn ${viewMode === "grid" ? "is-active" : ""}`}
                  onClick={() => setViewMode("grid")}
                  type="button"
                >
                  {t("catalog.grid")}
                </button>
              </div>
            </div>
          </div>

          <div className={`catalog-list ${viewMode}`}>
            {paged.map((item) => (
              <article
                className="catalog-card"
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => navigate(`${basePath}/${item.id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(`${basePath}/${item.id}`);
                  }
                }}
              >
                <div className="catalog-card__media">
                  <img src={item.image} alt={item.name} />
                  <span className="catalog-card__rating">★ {item.rating}</span>
                </div>

                <div className="catalog-card__body">
                  <h3 className="catalog-card__name">{item.name}</h3>
                  <p className="catalog-card__tag">{item.type}</p>
                  <p className="catalog-card__desc">{translateDesc(item)}</p>
                  <p className="catalog-card__place">
                    {t("catalog.location")}: {translateLocation(item)}
                  </p>
                </div>

                <div className="catalog-card__action">
                  <button
                    className="catalog-card__save"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!requireLogin()) return;
                    }}
                  >
                    🔖 {t("catalog.save")}
                  </button>
                  <Link
                    className="catalog-card__btn"
                    to={`${basePath}/${item.id}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t("catalog.detail")}
                  </Link>
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
            <h3 className="popular-catalog__title">{resolvedPopularTitle || localizedPopularTitle}</h3>
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
                    <span className="popular-card__place">{translateLocation(item)}</span>
                    <Link className="popular-card__link" to={`${basePath}/${item.id}`}>
                      {t("catalog.detail")} →
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
