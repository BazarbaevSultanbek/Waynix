import {
  IconStarFilled,
  IconPhone,
  IconExternalLink,
  IconStarHalfFilled,
  IconStar,
  IconClock,
} from "@tabler/icons-react";
import { Card, Image, Group, Button, Text, Anchor, Badge } from "@mantine/core";
import "./cafe.scss";

function getIsOpen(hours) {
  const [start, end] = hours.split("-");
  if (!start || !end) return false;

  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const startMin = sh * 60 + sm;
  const endMin = eh * 60 + em;

  // Handles overnight ranges like 10:00-01:00
  if (endMin < startMin) return nowMin >= startMin || nowMin <= endMin;
  return nowMin >= startMin && nowMin <= endMin;
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return [...Array(5)].map((_, i) => {
    if (i < fullStars) return <IconStarFilled key={i} size={16} color="#FFC107" />;
    if (i === fullStars && hasHalf)
      return <IconStarHalfFilled key={i} size={16} color="#FFC107" />;
    return <IconStar key={i} size={16} color="#ddd" />;
  });
}

export default function CafeCard({ place }) {
  const isOpen = getIsOpen(place.hours);

  return (
    <Card radius="lg" withBorder shadow="sm" className="eating-card">
      <Card.Section className="eating-card__media">
        <Image src={place.image} height={220} alt={place.name} />
        <Group className="eating-card__stars" gap={5}>
          {renderStars(place.rating)}
        </Group>
      </Card.Section>

      <Text fw={600} size="lg" mt="md">
        {place.name}
      </Text>

      <Text size="sm" c="dimmed" mt={4}>
        {place.type} • {place.location}
      </Text>

      <Text size="sm" c="dimmed" mt={6}>
        {place.description}
      </Text>

      <Group mt="sm" gap={8}>
        <IconClock size={16} color="#667085" />
        <Text size="sm">{place.hours}</Text>
        <Badge color={isOpen ? "green" : "red"} variant="light">
          {isOpen ? "Open" : "Closed"}
        </Badge>
      </Group>

      <Anchor
        href={`https://www.google.com/maps/search/${encodeURIComponent(place.location)}`}
        target="_blank"
        mt="sm"
        size="sm"
      >
        📍 {place.location}
      </Anchor>

      <Group mt="md" justify="space-between">
        <Group gap={5}>
          <IconStarFilled size={16} color="#FFC107" />
          <Text fw={500}>{place.rating}</Text>
        </Group>
      </Group>

      <Group mt="md" grow>
        <Button
          component="a"
          href={`tel:${place.phone}`}
          variant="outline"
          color="dark"
          leftSection={<IconPhone size={16} />}
          className="eating-card__call-btn"
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
