import { imgs } from "../assets/images";

export const celestialObjects = [
  {
    id: "planet",
    title: "Planets",
    image: imgs.planets,
    kind: "PLANETARY WORLDS",
    description:
      "Worlds orbiting stars, from rocky terrestrial planets to massive gas giants.",
    facts: [
      "Rocky, icy and gaseous worlds",
      "Form through accretion in planetary systems",
      "Studied with imaging, spectroscopy and orbital dynamics",
    ],
    body: "Planets are large bodies that orbit stars and are shaped by gravity, chemistry and their formation history. Comparing planets across our solar system and beyond helps researchers understand how planetary systems form and evolve.",
  },
  {
    id: "star",
    title: "Stars",
    image: imgs.stars,
    kind: "STELLAR BODIES",
    description: "The luminous engines that forge elements and shape galaxies.",
    facts: [
      "Powered by nuclear fusion",
      "Mass determines stellar evolution",
      "End states include white dwarfs, neutron stars and black holes",
    ],
    body: "Stars are enormous spheres of plasma held together by gravity. Their internal fusion creates energy and synthesizes elements that later become part of planets, atmospheres and life.",
  },
  {
    id: "galaxy",
    title: "Galaxies",
    image: imgs.galaxies,
    kind: "MACRO STRUCTURES",
    description: "Vast gravitational structures containing billions of stars.",
    facts: [
      "Contain stars, gas, dust and dark matter",
      "Range from dwarf galaxies to giant ellipticals",
      "Interact and merge over cosmic time",
    ],
    body: "Galaxies are gravitationally bound systems containing stars, gas, dust and dark matter. Their shapes and histories preserve clues about how large-scale cosmic structure grows.",
  },
  {
    id: "nebula",
    title: "Nebulae",
    image: imgs.nebulae,
    kind: "GAS & DUST",
    description: "Clouds of gas and dust where stars are born and transformed.",
    facts: [
      "Can be stellar nurseries",
      "Often glow through ionization or reflected light",
      "Enriched by previous generations of stars",
    ],
    body: "Nebulae are interstellar clouds whose gas and dust can collapse into new stars or remain as illuminated remnants of stellar evolution. They are among the most visually rich laboratories in astronomy.",
  },
  {
    id: "blackhole",
    title: "Black Holes",
    image: imgs.galaxies,
    kind: "EXTREME GRAVITY",
    description:
      "Regions where gravity is so strong that spacetime closes around a horizon.",
    facts: [
      "Defined by an event horizon",
      "Can form from massive stellar collapse",
      "Supermassive examples inhabit galaxy centers",
    ],
    body: "Black holes are regions of spacetime where gravity becomes extreme. The event horizon marks the boundary beyond which signals cannot escape to distant observers. Their surroundings can still be observed through radiation from infalling matter.",
  },
];
