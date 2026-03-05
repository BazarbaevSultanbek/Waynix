import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  IconBuildingStore,
  IconChevronDown,
  IconClock,
  IconMapPin,
  IconPhoto,
  IconPhone,
  IconSearch,
  IconUpload,
} from "@tabler/icons-react";
import Banner from "../utils/banner/Banner";
import Footer from "../utils/footer/Footer";
import $api from "../http/axios";
import { useI18n } from "../i18n/I18nProvider";
import "./addPlace.scss";

export default function AddPlace() {
  const { t } = useI18n();
  const currentUser = useSelector((state) => state.user.user);
  const [form, setForm] = useState({
    name: "",
    category: "",
    district: "",
    location: "",
    workingHours: "",
    phone: "",
    phone2: "",
    email: "",
    description: "",
    mapUrl: "",
    instagram: "",
    telegram: "",
    facebook: "",
    website: "",
  });
  const [files, setFiles] = useState([]);
  const [state, setState] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [showExtraPhone, setShowExtraPhone] = useState(false);
  const [showMapInput, setShowMapInput] = useState(false);

  const categoryOptions = useMemo(
    () => [
      { value: "tours", label: t("banner.catTours") },
      { value: "shop", label: t("banner.catShop") },
      { value: "cafe", label: t("banner.catCafe") },
      { value: "hotels", label: t("banner.catHotels") },
      { value: "services", label: t("banner.catServices") },
      { value: "entertainment", label: t("banner.catEntertainment") },
      { value: "medical", label: t("banner.catMedical") },
      { value: "government", label: t("banner.catGovernment") },
      { value: "education", label: t("banner.catEducation") },
    ],
    [t],
  );

  const isAuth = useMemo(() => Boolean(currentUser), [currentUser]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isAuth) {
      setState({ type: "error", message: t("addPlace.authRequired") });
      return;
    }

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (!value) return;
      if (key === "phone" || key === "phone2") return;
      fd.append(key, value);
    });
    if (form.phone) fd.append("phones", form.phone);
    if (form.phone2) fd.append("phones", form.phone2);
    Array.from(files || []).forEach((file) => fd.append("images", file));

    try {
      setSubmitting(true);
      await $api.post("/places", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setState({ type: "success", message: t("addPlace.success") });
      setForm({
        name: "",
        category: "",
        district: "",
        location: "",
        workingHours: "",
        phone: "",
        phone2: "",
        email: "",
        description: "",
        mapUrl: "",
        instagram: "",
        telegram: "",
        facebook: "",
        website: "",
      });
      setFiles([]);
      setShowExtraPhone(false);
      setShowMapInput(false);
    } catch (err) {
      setState({
        type: "error",
        message: err?.response?.data?.message || t("addPlace.error"),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Banner />
      <section className="add-place-page">
        <div className="add-place-wrap">
          <h1 className="add-title">{t("addPlace.title")}</h1>
          <p className="add-subtitle">{t("addPlace.subtitle")}</p>

          <form className="add-place-card" onSubmit={onSubmit}>
            <div className="add-head">
              <IconBuildingStore size={18} />
              <span>{t("addPlace.section")}</span>
            </div>

            <div className="add-body">
              {state.message && (
                <div className={`add-alert ${state.type}`}>{state.message}</div>
              )}

              <label className="line-field">
                <span className="line-label">{t("addPlace.name")} *</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  placeholder={t("addPlace.namePlaceholder")}
                  required
                />
                <IconChevronDown size={18} className="line-icon" />
              </label>

              <div className="line-grid">
                <label className="line-field">
                  <span className="line-label">
                    {t("addPlace.category")} *
                  </span>
                  <div className="search-input-wrap">
                    <IconSearch size={18} />
                    <select
                      value={form.category}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, category: e.target.value }))
                      }
                      required
                    >
                      <option value="">{t("addPlace.categoryPlaceholder")}</option>
                      {categoryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <IconChevronDown size={18} className="line-icon" />
                </label>

                <label className="line-field">
                  <span className="line-label">
                    {t("addPlace.district")} *
                  </span>
                  <div className="search-input-wrap">
                    <IconSearch size={18} />
                    <input
                      value={form.district}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, district: e.target.value }))
                      }
                      placeholder={t("addPlace.districtPlaceholder")}
                      required
                    />
                  </div>
                  <IconChevronDown size={18} className="line-icon" />
                </label>
              </div>

              <label className="line-field">
                <span className="line-label">
                  <IconMapPin size={17} /> {t("addPlace.address")} *
                </span>
                <input
                  value={form.location}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, location: e.target.value }))
                  }
                  placeholder={t("addPlace.addressPlaceholder")}
                  required
                />
                <IconChevronDown size={18} className="line-icon" />
              </label>

              <label className="line-field">
                <span className="line-label">
                  <IconClock size={17} /> {t("addPlace.workingHours")}
                </span>
                <input
                  value={form.workingHours}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, workingHours: e.target.value }))
                  }
                  placeholder={t("addPlace.hoursPlaceholder")}
                />
                <IconChevronDown size={18} className="line-icon" />
              </label>

              <div className="phones-block">
                <div className="line-label">
                  <IconPhone size={17} /> {t("addPlace.phone")} *
                </div>
                <div className="required-chip">{t("addPlace.required")}</div>
                <input
                  value={form.phone}
                  onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                  placeholder="+998 XX XXX XX XX"
                  required
                />
                {showExtraPhone && (
                  <input
                    value={form.phone2}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, phone2: e.target.value }))
                    }
                    placeholder="+998 XX XXX XX XX"
                  />
                )}
                <button
                  className="ghost-add-btn"
                  type="button"
                  onClick={() => setShowExtraPhone((v) => !v)}
                >
                  + {t("addPlace.addPhone")}
                </button>
              </div>

              <label className="line-field">
                <span className="line-label">{t("addPlace.description")} *</span>
                <textarea
                  rows={4}
                  value={form.description}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, description: e.target.value }))
                  }
                  placeholder={t("addPlace.descriptionPlaceholder")}
                  required
                />
                <IconChevronDown size={18} className="line-icon" />
              </label>

              <div className="upload-block">
                <div className="line-label">
                  <IconPhoto size={17} /> {t("addPlace.images")} *
                </div>
                <div className="upload-info">{t("addPlace.coverHint")}</div>
                <label className="upload-drop">
                  <IconUpload size={48} />
                  <p>{t("addPlace.dropHint")}</p>
                  <span>{t("addPlace.chooseImages")}</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setFiles(e.target.files || [])}
                  />
                </label>
              </div>

              <div className="map-block">
                <div className="line-label">
                  <IconMapPin size={17} /> {t("addPlace.mapUrl")} *
                </div>
                <div className="map-placeholder">
                  <IconMapPin size={50} />
                  <p>{t("addPlace.mapHint")}</p>
                  <button
                    type="button"
                    onClick={() => setShowMapInput((v) => !v)}
                  >
                    {t("addPlace.pickLocation")}
                  </button>
                </div>
                {showMapInput && (
                  <input
                    className="map-input"
                    value={form.mapUrl}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, mapUrl: e.target.value }))
                    }
                    placeholder="https://maps.google.com/..."
                    required
                  />
                )}
              </div>

              <div className="social-head">
                <span>{t("addPlace.socialOptional")}</span>
                <IconChevronDown size={18} />
              </div>

              <div className="contact-box">
                <h4>{t("addPlace.contactTitle")} *</h4>
                <div className="line-grid">
                  <label>
                    <span>{t("addPlace.phone")} *</span>
                    <input
                      value={form.phone}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, phone: e.target.value }))
                      }
                      placeholder="+998 XX XXX XX XX"
                      required
                    />
                  </label>
                  <label>
                    <span>{t("addPlace.email")} *</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, email: e.target.value }))
                      }
                      placeholder="example@gmail.com"
                      required
                    />
                  </label>
                </div>
              </div>

              <div className="line-grid socials-grid">
                <input
                  value={form.instagram}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, instagram: e.target.value }))
                  }
                  placeholder={t("addPlace.instagram")}
                />
                <input
                  value={form.telegram}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, telegram: e.target.value }))
                  }
                  placeholder={t("addPlace.telegram")}
                />
                <input
                  value={form.facebook}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, facebook: e.target.value }))
                  }
                  placeholder={t("addPlace.facebook")}
                />
                <input
                  value={form.website}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, website: e.target.value }))
                  }
                  placeholder={t("addPlace.website")}
                />
              </div>

              <div className="submit-row">
                <button type="submit" disabled={submitting}>
                  {submitting ? t("addPlace.submitting") : t("addPlace.submit")}
                </button>
              </div>
            </div>
          </form>

          <div className="note-box">
            <h4>{t("addPlace.noteTitle")}</h4>
            <p>{t("addPlace.noteText")}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
