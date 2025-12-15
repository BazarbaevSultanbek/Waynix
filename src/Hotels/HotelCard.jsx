import {
  IconStarFilled,
  IconPhone,
  IconExternalLink,
  IconStarHalfFilled,
  IconStar
} from "@tabler/icons-react";
import { Card, Image, Group } from "@mantine/core";
import { Button, Text, Anchor } from "@mantine/core";
import "../utils/styles/Hotels.scss";

export default function HotelCard({hotel}) {



  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;

    return (
      <>
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <IconStarFilled key={i} size={16} color="#FFC107" />;
          }
          if (i === fullStars && hasHalf) {
            return <IconStarHalfFilled key={i} size={16} color="#FFC107" />;
          }
          return <IconStar key={i} size={16} color="#ddd" />;
        })}
      </>
    );
  };
  return (
    <Card key={hotel.id} radius="lg" withBorder shadow="sm">
      <Card.Section style={{ position: "relative" }}>
        <Image src={hotel.image} height={220} alt={hotel.name} />

        <Group
          spacing={4}
          style={{
            position: "absolute",
            top: 12,
            left: 10,
            background: "transparent",
            padding: "4px 5px",
            borderRadius: 8,
            gap: "5px",
          }}
        >
          {renderStars(hotel.rating)}
        </Group>
      </Card.Section>

      {/* Title */}
      <Text fw={600} size="lg" mt="md">
        {hotel.name}
      </Text>

      {/* Description */}
      <Text size="sm" c="dimmed" mt={4}>
        {hotel.description}
      </Text>

      {/* Location (LINK) */}
      <Anchor
        href={`https://www.google.com/maps/search/${hotel.location}`}
        target="_blank"
        mt="sm"
        size="sm"
      >
        📍 {hotel.location}
      </Anchor>

      {/* Rating number & Price */}
      <Group justify="space-between" mt="md">
        <Group spacing={6} style={{ gap: "5px" }}>
          <IconStarFilled key={19823} size={16} color="#FFC107" />
          <Text fw={500}>{hotel.rating}</Text>
        </Group>

        <Text fw={700} size="lg">
          {hotel.price.toLocaleString()} so'm/kecha
        </Text>
      </Group>

      {/* Actions */}
      <Group mt="md" grow>
        <Button
          variant="outline"
          color="dark"
          style={{
            borderColor: "#0000001a",
          }}
          leftSection={<IconPhone size={16} />}
        >
          Qo'ng'iroq qilish
        </Button>

        <Button color="orange" rightSection={<IconExternalLink size={16} />}>
          Batafsil
        </Button>
      </Group>
    </Card>
  );
}
