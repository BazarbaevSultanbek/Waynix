import {
  IconStarFilled,
  IconPhone,
  IconExternalLink,
  IconStarHalfFilled,
  IconStar,
  IconClock,
} from "@tabler/icons-react";
import { Card, Image, Group, Button, Text, Anchor, Badge } from "@mantine/core";
import "../../utils/styles/gover.scss";

function getIsOpen(hours) {
  const [start, end] = hours.split("-");
  if (!start || !end) return false;

  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const startMin = sh * 60 + sm;
  const endMin = eh * 60 + em;

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

export default function GovernmentCard({ item }) {
  const isOpen = getIsOpen(item.hours);

  return (
    <Card radius="lg" withBorder shadow="sm" className="gov-card">
      <Card.Section className="gov-card__media">
        <Image src={item.image} height={220} alt={item.name} />
        <Group className="gov-card__stars" gap={5}>
          {renderStars(item.rating)}
        </Group>
      </Card.Section>

      <Text fw={600} size="lg" mt="md">
        {item.name}
      </Text>

      <Text size="sm" c="dimmed" mt={4}>
        {item.type} • {item.location}
      </Text>

      <Text size="sm" c="dimmed" mt={6}>
        {item.description}
      </Text>

      <Group mt="sm" gap={8}>
        <IconClock size={16} color="#667085" />
        <Text size="sm">{item.hours}</Text>
        <Badge color={isOpen ? "green" : "red"} variant="light">
          {isOpen ? "Open" : "Closed"}
        </Badge>
      </Group>

      <Anchor
        href={`https://www.google.com/maps/search/${encodeURIComponent(item.location)}`}
        target="_blank"
        mt="sm"
        size="sm"
      >
        📍 {item.location}
      </Anchor>

      <Group mt="md">
        <Group gap={5}>
          <IconStarFilled size={16} color="#FFC107" />
          <Text fw={500}>{item.rating}</Text>
        </Group>
      </Group>

      <Group mt="md" grow>
        <Button
          component="a"
          href={`tel:${item.phone}`}
          variant="outline"
          color="dark"
          leftSection={<IconPhone size={16} />}
          className="gov-card__call-btn"
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
