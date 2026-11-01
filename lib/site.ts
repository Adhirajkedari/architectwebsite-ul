/**
 * Central, editable content for the studio website.
 * Values in [square brackets] are placeholders to be replaced with verified details.
 * Projects and journal entries are sample concepts, not completed client work.
 */

export const site = {
  name: 'Ar. Dipti Khaire',
  shortName: 'Dipti Khaire',
  tagline: 'Architecture Beyond Boundaries.',
  email: '[studio@yourdomain.com]',
  phone: '[+00 000 000 0000]',
  address: '[Studio Address, City, Country]',
  city: '[City, Country]',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'Behance', href: '#' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '/#top' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Journal', href: '/#journal' },
  { label: 'Contact', href: '/#contact' },
]

export type Project = {
  slug: string
  title: string
  category: string
  location: string
  description: string
  image: string
  alt: string
  width: number
  height: number
}

export const projects: Project[] = [
  {
    slug: 'the-serenity-residence',
    title: 'The Serenity Residence',
    category: 'Residential Architecture',
    location: '[Location]',
    description:
      'A contemporary residential concept focused on natural light, open spaces and material harmony.',
    image: '/images/project-serenity.png',
    alt: 'Concept visualisation of a white rendered house with timber screens around a planted courtyard',
    width: 1408,
    height: 768,
  },
  {
    slug: 'the-urban-pavilion',
    title: 'The Urban Pavilion',
    category: 'Commercial Architecture',
    location: '[Location]',
    description:
      'A modern commercial architecture concept combining functionality and refined geometry.',
    image: '/images/project-pavilion.png',
    alt: 'Concept visualisation of a geometric concrete pavilion with a thin flat roof in a city plaza',
    width: 768,
    height: 1376,
  },
  {
    slug: 'the-minimalist-retreat',
    title: 'The Minimalist Retreat',
    category: 'Interior Design',
    location: '[Location]',
    description:
      'A calm interior concept using natural textures, warm materials and minimalist detailing.',
    image: '/images/project-retreat.png',
    alt: 'Concept visualisation of a calm living room with lime-washed walls, oak floor and linen sofa',
    width: 1408,
    height: 768,
  },
  {
    slug: 'the-horizon-villa',
    title: 'The Horizon Villa',
    category: 'Luxury Residential',
    location: '[Location]',
    description:
      'An architectural concept exploring indoor-outdoor living and contemporary spatial design.',
    image: '/images/project-horizon.png',
    alt: 'Concept visualisation of a hillside villa with an infinity pool and open glass walls at golden hour',
    width: 1408,
    height: 768,
  },
]

export const services = [
  {
    title: 'Architectural Design',
    description:
      'Complete architectural design from site analysis and massing to detailed drawings, shaped around context, climate and the way you live or work.',
  },
  {
    title: 'Interior Architecture',
    description:
      'Interiors conceived as an extension of the architecture — spatial flow, joinery, lighting and a considered palette of natural materials.',
  },
  {
    title: 'Residential Planning',
    description:
      'Homes planned for daily ritual and long-term change, balancing privacy, openness, light and efficient use of space.',
  },
  {
    title: 'Commercial Spaces',
    description:
      'Workplaces, retail and hospitality environments where functional clarity and brand character are resolved in built form.',
  },
  {
    title: 'Landscape Design',
    description:
      'Gardens, courtyards and outdoor rooms that soften the threshold between building and site, using native and climate-appropriate planting.',
  },
  {
    title: 'Renovation and Restoration',
    description:
      'Sensitive adaptation of existing buildings — retaining character and embodied value while bringing them to contemporary standards.',
  },
]

export const principles = [
  {
    title: 'Context and Surroundings',
    description: 'Every design begins with the site — its climate, orientation, history and neighbours.',
  },
  {
    title: 'Natural Light',
    description: 'Daylight is treated as a material, choreographed to shape mood across the day.',
  },
  {
    title: 'Material Selection',
    description: 'Honest, tactile materials chosen for how they age, feel and belong to place.',
  },
  {
    title: 'Sustainability',
    description: 'Passive strategies, durable construction and responsible sourcing from the outset.',
  },
  {
    title: 'Functionality',
    description: 'Clear planning that supports how people actually move, gather and rest.',
  },
  {
    title: 'Timeless Design',
    description: 'Restraint over trend — spaces intended to remain relevant for generations.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: "Understanding the client's vision, site and requirements.",
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Developing architectural concepts and spatial ideas.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Refining layouts, materials and technical details.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Preparing the final design and project documentation.',
  },
]

export type Article = {
  slug: string
  title: string
  excerpt: string
  date: string
  dateTime: string
  category: string
  image: string
  alt: string
}

export const articles: Article[] = [
  {
    slug: 'contemporary-architecture-trends',
    title: 'Contemporary Architecture Trends',
    excerpt: 'Where restraint, adaptability and climate are steering the next generation of buildings.',
    date: '[Publish Date]',
    dateTime: '',
    category: 'Perspective',
    image: '/images/journal-trends.png',
    alt: 'Curved white concrete facade fins casting rhythmic shadows',
  },
  {
    slug: 'sustainable-building-materials',
    title: 'Sustainable Building Materials',
    excerpt: 'A closer look at earth, timber, lime and stone — and why they are worth reconsidering.',
    date: '[Publish Date]',
    dateTime: '',
    category: 'Materials',
    image: '/images/journal-materials.png',
    alt: 'Samples of travertine, oak, rammed earth and lime plaster arranged on linen',
  },
  {
    slug: 'the-importance-of-natural-light',
    title: 'The Importance of Natural Light',
    excerpt: 'How orientation, aperture and surface turn daylight into the defining quality of a room.',
    date: '[Publish Date]',
    dateTime: '',
    category: 'Light',
    image: '/images/journal-light.png',
    alt: 'Afternoon sunlight casting geometric window shadows on a plaster wall',
  },
  {
    slug: 'modern-residential-design',
    title: 'Modern Residential Design',
    excerpt: 'Rethinking the contemporary home around flexibility, privacy and connection to landscape.',
    date: '[Publish Date]',
    dateTime: '',
    category: 'Residential',
    image: '/images/journal-residential.png',
    alt: 'Dark timber-clad house with large glazing among tall grasses',
  },
]

export const projectTypes = [
  'Residential Architecture',
  'Commercial Architecture',
  'Interior Design',
  'Landscape Architecture',
  'Architectural Planning',
  'Renovation and Restoration',
  'Other',
]

export const budgetRanges = [
  'To be discussed',
  '[Budget range 1]',
  '[Budget range 2]',
  '[Budget range 3]',
  '[Budget range 4]',
]
