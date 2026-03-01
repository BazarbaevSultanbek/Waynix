import { useMemo, useState } from "react";
import { Button, Notification, Select, TextInput, Textarea } from "@mantine/core";
import Banner from "../utils/banner/Banner";
import Footer from "../utils/footer/Footer";
import $api from "../http/axios";
import { useI18n } from "../i18n/I18nProvider";
import "./addPlace.scss";

const categoryOptions = [
  { value: "tours", label: "Turobyektlar" },
  { value: "shop", label: "Savdo markazlari" },
  { value: "cafe", label: "Ovqatlanish joylari" },
  { value: "hotels", label: "Mehmonxonalar" },
  { value: "services", label: "Servislar" },
  { value: "entertainment", label: "Entertainment" },
  { value: "medical", label: "Tibbiyot" },
  { value: "government", label: "Davlat idoralari" },
  { value: "education", label: "Ta'lim" },
];

export default function AddPlace() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: "",
    category: "",
    region: "",
    district: "",
    location: "",
    workingHours: "",
    phone: "",
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

  const isAuth = useMemo(() => document.cookie.includes("accessToken="), []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isAuth) {
      setState({ type: "error", message: t("addPlace.authRequired") });
      return;
    }

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) fd.append(key, value);
    });
    if (form.phone) fd.append("phones", form.phone);
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
        region: "",
        district: "",
        location: "",
        workingHours: "",
        phone: "",
        email: "",
        description: "",
        mapUrl: "",
        instagram: "",
        telegram: "",
        facebook: "",
        website: "",
      });
      setFiles([]);
    } catch (err) {
      setState({
        type: "error",
        message: err?.response?.data?.message || "Xatolik yuz berdi",
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
          <h1>{t("addPlace.title")}</h1>
          <p className="subtitle">{t("addPlace.subtitle")}</p>

          <form className="add-place-card" onSubmit={onSubmit}>
            <div className="card-head">{t("addPlace.section")}</div>
            <div className="card-body">
              {state.message && (
                <Notification color={state.type === "error" ? "red" : "green"} mb="md">
                  {state.message}
                </Notification>
              )}
              <TextInput
                label={`${t("addPlace.name")} *`}
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                required
              />
              <div className="grid-2">
                <Select
                  label={`${t("addPlace.category")} *`}
                  data={categoryOptions}
                  value={form.category}
                  onChange={(value) => setForm((s) => ({ ...s, category: value || "" }))}
                  required
                />
                <TextInput
                  label={t("addPlace.district")}
                  value={form.district}
                  onChange={(e) => setForm((s) => ({ ...s, district: e.target.value }))}
                />
              </div>
              <TextInput
                label={`${t("addPlace.address")} *`}
                value={form.location}
                onChange={(e) => setForm((s) => ({ ...s, location: e.target.value }))}
                required
              />
              <TextInput
                label={t("addPlace.workingHours")}
                value={form.workingHours}
                onChange={(e) => setForm((s) => ({ ...s, workingHours: e.target.value }))}
              />
              <div className="grid-2">
                <TextInput
                  label={`${t("addPlace.phone")} *`}
                  value={form.phone}
                  onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                  required
                />
                <TextInput
                  label={`${t("addPlace.email")} *`}
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  required
                />
              </div>
              <Textarea
                label={`${t("addPlace.description")} *`}
                minRows={3}
                value={form.description}
                onChange={(e) =>
                  setForm((s) => ({ ...s, description: e.target.value }))
                }
                required
              />
              <TextInput
                type="file"
                label={t("addPlace.images")}
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
              <TextInput
                label={t("addPlace.mapUrl")}
                value={form.mapUrl}
                onChange={(e) => setForm((s) => ({ ...s, mapUrl: e.target.value }))}
              />

              <div className="grid-2">
                <TextInput
                  label={t("addPlace.instagram")}
                  value={form.instagram}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, instagram: e.target.value }))
                  }
                />
                <TextInput
                  label={t("addPlace.telegram")}
                  value={form.telegram}
                  onChange={(e) => setForm((s) => ({ ...s, telegram: e.target.value }))}
                />
              </div>
              <div className="grid-2">
                <TextInput
                  label={t("addPlace.facebook")}
                  value={form.facebook}
                  onChange={(e) => setForm((s) => ({ ...s, facebook: e.target.value }))}
                />
                <TextInput
                  label={t("addPlace.website")}
                  value={form.website}
                  onChange={(e) => setForm((s) => ({ ...s, website: e.target.value }))}
                />
              </div>

              <div className="submit-row">
                <Button type="submit" loading={submitting}>
                  {t("addPlace.submit")}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

