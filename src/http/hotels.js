const hotels = [
  {
    id: 1,
    name: "Grand Nukus Hotel",
    description: "Zamonaviy mehmonxona shahar markazida joylashgan",
    location: "Nukus markazi",
    rating: 4.8,
    price: 250000,
    image:
      "https://images.unsplash.com/photo-1634041441461-a1789d008830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc1OTUwODgzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Oybek Palace",
    description: "Shinam va qulay mehmonxona barcha qulayliklar bilan",
    location: "Nukus markaziy qism",
    rating: 4.6,
    price: 180000,
    image:
      "https://images.unsplash.com/photo-1695706807850-8c66b24b3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc1OTQ5MjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Amu Daryo Resort",
    description: "Daryoda dam olish uchun mukammal joy",
    location: "Amu Daryo sohili",
    rating: 2.7,
    price: 320000,
    image:
      "https://images.unsplash.com/photo-1631049035115-f96132761a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTk0ODQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Grand Nukus Hotel",
    description: "Zamonaviy mehmonxona shahar markazida joylashgan",
    location: "Nukus markazi",
    rating: 4.8,
    price: 250000,
    image:
      "https://images.unsplash.com/photo-1634041441461-a1789d008830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc1OTUwODgzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    name: "Oybek Palace",
    description: "Shinam va qulay mehmonxona barcha qulayliklar bilan",
    location: "Nukus markaziy qism",
    rating: 4.6,
    price: 180000,
    image:
      "https://images.unsplash.com/photo-1695706807850-8c66b24b3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc1OTQ5MjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    name: "Amu Daryo Resort",
    description: "Daryoda dam olish uchun mukammal joy",
    location: "Amu Daryo sohili",
    rating: 2.7,
    price: 320000,
    image:
      "https://images.unsplash.com/photo-1631049035115-f96132761a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTk0ODQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    name: "Grand Nukus Hotel",
    description: "Zamonaviy mehmonxona shahar markazida joylashgan",
    location: "Nukus markazi",
    rating: 4.8,
    price: 250000,
    image:
      "https://images.unsplash.com/photo-1634041441461-a1789d008830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc1OTUwODgzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    name: "Oybek Palace",
    description: "Shinam va qulay mehmonxona barcha qulayliklar bilan",
    location: "Nukus markaziy qism",
    rating: 4.6,
    price: 180000,
    image:
      "https://images.unsplash.com/photo-1695706807850-8c66b24b3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc1OTQ5MjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 9,
    name: "Amu Daryo Resort",
    description: "Daryoda dam olish uchun mukammal joy",
    location: "Amu Daryo sohili",
    rating: 2.7,
    price: 320000,
    image:
      "https://images.unsplash.com/photo-1631049035115-f96132761a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTk0ODQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 10,
    name: "Grand Nukus Hotel",
    description: "Zamonaviy mehmonxona shahar markazida joylashgan",
    location: "Nukus markazi",
    rating: 4.8,
    price: 250000,
    image:
      "https://images.unsplash.com/photo-1634041441461-a1789d008830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc1OTUwODgzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 11,
    name: "Oybek Palace",
    description: "Shinam va qulay mehmonxona barcha qulayliklar bilan",
    location: "Nukus markaziy qism",
    rating: 4.6,
    price: 180000,
    image:
      "https://images.unsplash.com/photo-1695706807850-8c66b24b3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc1OTQ5MjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 12,
    name: "Amu Daryo Resort",
    description: "Daryoda dam olish uchun mukammal joy",
    location: "Amu Daryo sohili",
    rating: 2.7,
    price: 320000,
    image:
      "https://images.unsplash.com/photo-1631049035115-f96132761a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTk0ODQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];


export default hotels;