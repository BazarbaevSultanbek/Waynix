import { useEffect, useState } from "react";
import {
  Text,
  Group,
  Stack,
  Card,
  SimpleGrid,
  ActionIcon,
  Loader,
} from "@mantine/core";
import { IconCloud, IconX, IconMapPin } from "@tabler/icons-react";
import "../weather.scss";
import { useI18n } from "../../i18n/I18nProvider";

export default function Weather() {
  const { t, language } = useI18n();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState(null);
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1️⃣ Get user location
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      () => {
        setCoords({
          lat: 42.46,
          lon: 59.61,
        });
        setCity("Nukus");
      }
    );
  }, []);

  // 2️⃣ Fetch weather when coords ready
  useEffect(() => {
    if (!coords) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            coords.lat
          }&lon=${coords.lon}&units=metric&lang=${language === "ru" ? "ru" : language === "en" ? "en" : "uz"}&appid=${
            import.meta.env.VITE_WEATHER_KEY
          }`
        );
        const json = await res.json();
        if (!res.ok) throw new Error("API error");
        setData(json);
        setCity(json.name);
      } catch {
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [coords]);

  return (
    <>
      {/* Button */}
      <ActionIcon
        className="weather-fab"
        size={56}
        radius="xl"
        onClick={() => setOpen(true)}
      >
        <IconCloud size={26} />
      </ActionIcon>

      {open && (
        <div className="weather-overlay" onClick={() => setOpen(false)} />
      )}

      <aside className={`weather-panel ${open ? "open" : ""}`}>
        <ActionIcon
          variant="light"
          radius="xl"
          className="close-btn"
          onClick={() => setOpen(false)}
        >
          <IconX size={18} />
        </ActionIcon>

        {loading ? (
          <Loader mt="xl" />
        ) : data?.main ? (
          <Stack>
            <Group spacing={6}>
              <IconMapPin size={16} />
              <Text fw={700}>{city}</Text>
            </Group>

            <Text size="xs" c="dimmed">
              {new Date().toLocaleString()}
            </Text>

            <Group align="end">
              <Text size="64px" fw={700}>
                {Math.round(data.main.temp)}°
              </Text>
              <Text>{data.weather[0].description}</Text>
            </Group>

            <SimpleGrid cols={2} spacing="sm">
              <Stat label={t("weather.humidity")} value={`${data.main.humidity}%`} />
              <Stat label={t("weather.wind")} value={`${data.wind.speed} m/s`} />
              <Stat label={t("weather.pressure")} value={`${data.main.pressure} hPa`} />
              <Stat label={t("weather.visibility")} value={`${data.visibility / 1000} km`} />
            </SimpleGrid>

            <Text size="xs" ta="center" c="dimmed">
              🟢 {t("weather.locationBased")}
            </Text>
          </Stack>
        ) : (
          <Text c="red">{t("weather.notAvailable")}</Text>
        )}
      </aside>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <Card radius="lg" className="stat-card">
      <Text size="xs" c="dimmed">
        {label}
      </Text>
      <Text fw={600}>{value}</Text>
    </Card>
  );
}
