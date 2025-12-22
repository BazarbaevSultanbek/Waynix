import { Carousel } from "@mantine/carousel";
import { Title, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import classes from "../../utils/styles/New.module.scss";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

const slides = [
  {
    title: "Yangi Fashion Center ochildi",
    subtitle: "Katta ochilish marosimi",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  },
  {
    title: "Yangi chegirmalar boshlandi",
    subtitle: "50% gacha aksiyalar",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
  {
    title: "Shaharning eng mashhur joylari",
    subtitle: "Top restoranlar va dam olish maskanlari",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
  },
];

export default function News() {
  const autoplay = Autoplay({ delay: 3000 });

  return (
    <section className={classes.newsSection}>
      <Title order={2} className={classes.sectionTitle}>
        Yangiliklar va Aksiyalar
      </Title>

      <Carousel
        withIndicators
        height={420}
        slideSize="100%"
        slidesToScroll={1}
        plugins={[autoplay]}
        onMouseEnter={autoplay.stop}
        onMouseLeave={autoplay.reset}
        className={classes.carousel}
        classNames={{
          indicator: classes.indicator,
          indicators: classes.indicators,
          control: classes.control,
        }}
        emblaOptions={{ loop: true, dragFree: true, align: "center" }}
      >
        {slides.map((slide, index) => (
          <Carousel.Slide key={index}>
            <div
              className={classes.slide}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={classes.overlay} />
              <div className={classes.content}>
                <Title order={1}>{slide.title}</Title>
                <Text>{slide.subtitle}</Text>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
}
