import { Menu, Button, TextInput, Group, SimpleGrid, Text } from "@mantine/core";
import { IconChevronDown, IconCheck, IconSearch } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import "../../utils/styles/Shop.scss";
import Banner from "../../utils/banner/Banner";
import shopsData from "../../http/hotels";
import ShopCard from "./ShopCard";
import Footer from "../../utils/footer/Footer";

export default function Shop() {
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

  const processedShops = useMemo(() => {
    let list = [...shopsData];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.location.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
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

  const visibleShops = processedShops.slice(0, visibleCount);

  return (
    <>
      <Banner />
      <div className="shops">
        <div className="container">
          <div className="shops-banner">
            <div className="shops-banner-inner">
              <div className="shops-banner-inner-sub">
                <h1>Shop</h1>
                <p>Eng yaxshi do'konlarni toping</p>
              </div>

              <div className="shops-banner-search">
                <TextInput
                  placeholder="Do'kon qidirish..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setVisibleCount(9);
                  }}
                  leftSection={<IconSearch size={18} />}
                  radius="md"
                />
              </div>

              <div className="shops-banner-filter">
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
                        rightSection={
                          sortValue === item.value ? <IconCheck size={16} /> : null
                        }
                      >
                        <Text fw={sortValue === item.value ? 600 : 400}>
                          {item.label}
                        </Text>
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
          </div>

          <div className="shops-list">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {visibleShops.map((shop) => (
                <ShopCard key={shop.id} shop={shop} />
              ))}
            </SimpleGrid>

            {processedShops.length > 9 && (
              <Group justify="center" mt="xl">
                {visibleCount < processedShops.length ? (
                  <Button
                    variant="outline"
                    radius="md"
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                  >
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
