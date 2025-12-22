import { Menu, Button, Text, TextInput, Anchor } from "@mantine/core";
import { IconChevronDown, IconCheck, IconSearch } from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";
import { Group, SimpleGrid } from "@mantine/core";
import "../utils/styles/Hotels.scss";
import Banner from "../Main/components/Banner";
import hotels from "../http/hotels";
import HotelCard from "./HotelCard";

export default function Hotels() {
  const [value, setValue] = useState("default");
  const [search, setSearch] = useState("");

  ////. FILTER STYLES //////
  const options = [
    { label: "Saralashsiz", value: "default" },
    { label: "Reyting bo'yicha", value: "rating" },
    { label: "Narx bo'yicha", value: "price" },
    { label: "Joylashuv bo'yicha", value: "location" },
  ];

const activeLabel =
  options.find((opt) => opt.value === value)?.label || "Saralash";


  ////// FILTERING /////
  const processedHotels = useMemo(() => {
    let list = [...hotels];

    // 🔍 SEARCH
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.location.toLowerCase().includes(q)
      );
    }

    // 🔃 SORT
    if (value === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (value === "price") {
      list.sort((a, b) => a.price - b.price);
    } else if (value === "location") {
      list.sort((a, b) => a.location.localeCompare(b.location));
    }

    return list;
  }, [hotels, search, value]);

  const [visibleCount, setVisibleCount] = useState(9);
  const visibleHotels = processedHotels.slice(0, visibleCount);

  return (
    <>
      <Banner />
      <div className="hotels">
        <div className="container">
          <div className="hotels-banner">
            <div className="hotels-banner-inner">
              <div className="hotels-banner-inner-sub">
                <h1>Mehmonxonalar</h1>
                <p>Eng yaxshi mehmonxonalarni toping</p>
              </div>

              <div className="hotels-banner-search">
                <TextInput
                  placeholder="Qidirish..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  leftSection={<IconSearch size={18} />}
                  radius="md"
                />
              </div>

              <div className="hotels-banner-filter">
                <Menu
                  width={220}
                  position="bottom-start"
                  shadow="md"
                  radius="md"
                >
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
                    {options.map((item) => (
                      <Menu.Item
                        key={item.value}
                        onClick={() => setValue(item.value)}
                        rightSection={
                          value === item.value ? <IconCheck size={16} /> : null
                        }
                      >
                        <Text fw={value === item.value ? 500 : 400}>
                          {item.label}
                        </Text>
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
          </div>
          <div className="hotels-list">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {processedHotels.slice(0, visibleCount).map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </SimpleGrid>

            {processedHotels.length > 9 && (
              <Group justify="center" mt="xl">
                {visibleCount < processedHotels.length ? (
                  <Button
                    variant="outline"
                    radius="md"
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                  >
                    Ko‘proq ko‘rsatish
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    radius="md"
                    onClick={() => setVisibleCount(9)}
                  >
                    Kamroq ko‘rsatish
                  </Button>
                )}
              </Group>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
