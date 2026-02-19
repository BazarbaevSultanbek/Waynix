import {
  IconStarFilled,
  IconPhone,
  IconExternalLink,
  IconStarHalfFilled,
  IconStar,
} from "@tabler/icons-react";
import { Card, Image, Group, Button, Text, Anchor } from "@mantine/core";
import "./shop.scss";

const shopImages = [
  "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555529902-5261145633bf?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
];

export default function ShopCard({ shop }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;

    return [...Array(5)].map((_, i) => {
      if (i < fullStars)
        return <IconStarFilled key={i} size={16} color="#FFC107" />;
      if (i === fullStars && hasHalf)
        return <IconStarHalfFilled key={i} size={16} color="#FFC107" />;
      return <IconStar key={i} size={16} color="#ddd" />;
    });
  };

  const imageSrc = shopImages[(shop.id - 1) % shopImages.length];

  return (
    <Card radius="lg" withBorder shadow="sm" className="shop-card">
      <Card.Section className="shop-card__media">
        <Image src={imageSrc} height={220} alt={shop.name} />

        <Group className="shop-card__stars" gap={5}>
          {renderStars(shop.rating)}
        </Group>
      </Card.Section>

      <Text fw={600} size="lg" mt="md">
        {shop.name}
      </Text>

      <Text size="sm" c="dimmed" mt={4}>
        {shop.description}
      </Text>

      <Anchor
        href={`https://www.google.com/maps/search/${encodeURIComponent(shop.location)}`}
        target="_blank"
        mt="sm"
        size="sm"
      >
        📍 {shop.location}
      </Anchor>

      <Group mt="md" justify="flex-start">
        <Group gap={5}>
          <IconStarFilled size={16} color="#FFC107" />
          <Text fw={500}>{shop.rating}</Text>
        </Group>
      </Group>

      <Group mt="md" grow>
        <Button
          variant="outline"
          color="dark"
          leftSection={<IconPhone size={16} />}
          className="shop-card__call-btn"
        >
          Qo'ng'iroq
        </Button>

        <Button color="orange" rightSection={<IconExternalLink size={16} />}>
          Batafsil
        </Button>
      </Group>
    </Card>
  );
}
