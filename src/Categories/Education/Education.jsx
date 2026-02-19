import { Menu, Button, TextInput, Group, SimpleGrid, Text } from "@mantine/core";
import { IconChevronDown, IconCheck, IconSearch } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import Banner from "../../utils/banner/Banner";
import Footer from "../../utils/footer/Footer";
import education from "../../http/education";
import EducationCard from "./EduCard";
import "./education.scss";

export default function Education() {
  const [sortValue, setSortValue] = useState("default");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const sortOptions = [
    { label: "Saralashsiz", value: "default" },
    { label: "Reyting bo'yicha", value: "rating" },
    { label: "Joylashuv bo'yicha", value: "location" },
    { label: "Nomi bo'yicha", value: "name" },
  ];

  const activeLabel =
    sortOptions.find((opt) => opt.value === sortValue)?.label || "Saralash";

  const processed = useMemo(() => {
    let list = [...education];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.location.toLowerCase().includes(q) ||
          e.type.toLowerCase().includes(q)
      );
    }

    if (sortValue === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === "location") {
      list.sort((a, b) => a.location.localeCompare(b.location));
    } else if (sortValue === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [search, sortValue]);

  return (
    <>
      <Banner />
      <div className="education-page">
        <div className="container">
          <div className="education-banner">
            <div className="education-banner-inner">
              <div className="education-banner-inner-sub">
                <h1>Ta'lim</h1>
                <p>Maktablar, bog'chalar va litseylar ro'yxati</p>
              </div>

              <div className="education-banner-search">
                <TextInput
                  placeholder="Qidirish..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setVisibleCount(6);
                  }}
                  leftSection={<IconSearch size={18} />}
                  radius="md"
                />
              </div>

              <div className="education-banner-filter">
                <Menu width={240} position="bottom-start" shadow="md" radius="md">
                  <Menu.Target>
                    <Button variant="default" radius="md" rightSection={<IconChevronDown size={16} />}>
                      {activeLabel}
                    </Button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    {sortOptions.map((item) => (
                      <Menu.Item
                        key={item.value}
                        onClick={() => {
                          setSortValue(item.value);
                          setVisibleCount(6);
                        }}
                        rightSection={sortValue === item.value ? <IconCheck size={16} /> : null}
                      >
                        <Text fw={sortValue === item.value ? 600 : 400}>{item.label}</Text>
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
          </div>

          <div className="education-list">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {processed.slice(0, visibleCount).map((item) => (
                <EducationCard key={item.id} item={item} />
              ))}
            </SimpleGrid>

            {processed.length > 6 && (
              <Group justify="center" mt="xl">
                {visibleCount < processed.length ? (
                  <Button variant="outline" radius="md" onClick={() => setVisibleCount((v) => v + 6)}>
                    Ko'proq ko'rsatish
                  </Button>
                ) : (
                  <Button variant="outline" radius="md" onClick={() => setVisibleCount(6)}>
                    Kamroq ko'rsatish
                  </Button>
                )}
              </Group>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
