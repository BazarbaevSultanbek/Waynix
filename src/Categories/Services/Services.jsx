import { Menu, Button, TextInput, Group, SimpleGrid, Text } from "@mantine/core";
import { IconChevronDown, IconCheck, IconSearch } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import "../../utils/styles/Services.scss";
import Banner from "../../utils/banner/Banner";
import Footer from "../../utils/footer/Footer";
import services from "../../http/ServicesData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [sortValue, setSortValue] = useState("default");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const sortOptions = [
    { label: "Saralashsiz", value: "default" },
    { label: "Reyting bo'yicha", value: "rating" },
    { label: "Joylashuv bo'yicha", value: "location" },
    { label: "Nomi bo'yicha", value: "name" },
  ];

  const activeLabel =
    sortOptions.find((opt) => opt.value === sortValue)?.label || "Saralash";

  const processedServices = useMemo(() => {
    let list = [...services];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.location.toLowerCase().includes(q) ||
          s.type.toLowerCase().includes(q)
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
      <div className="services-page">
        <div className="container">
          <div className="services-banner">
            <div className="services-banner-inner">
              <div className="services-banner-inner-sub">
                <h1>Servislar</h1>
                <p>Notarius, advokat va bank xizmatlarini toping</p>
              </div>

              <div className="services-banner-search">
                <TextInput
                  placeholder="Qidirish..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setVisibleCount(9);
                  }}
                  leftSection={<IconSearch size={18} />}
                  radius="md"
                />
              </div>

              <div className="services-banner-filter">
                <Menu width={240} position="bottom-start" shadow="md" radius="md">
                  <Menu.Target>
                    <Button
                      variant="default"
                      radius="md"
                      rightSection={<IconChevronDown size={16} />}
                    >
                      {activeLabel}
                    </Button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    {sortOptions.map((item) => (
                      <Menu.Item
                        key={item.value}
                        onClick={() => {
                          setSortValue(item.value);
                          setVisibleCount(9);
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

          <div className="services-list">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {processedServices.slice(0, visibleCount).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </SimpleGrid>

            {processedServices.length > 9 && (
              <Group justify="center" mt="xl">
                {visibleCount < processedServices.length ? (
                  <Button variant="outline" radius="md" onClick={() => setVisibleCount((prev) => prev + 6)}>
                    Ko'proq ko'rsatish
                  </Button>
                ) : (
                  <Button variant="outline" radius="md" onClick={() => setVisibleCount(9)}>
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
