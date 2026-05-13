// To change from a static image to an AGOL webmap, change 'type: "image"' to 'type: "agol"'
// Additionally, change 'src:' to 'itemId:' and input web map itemID

const project = [
  {
    // Project Information
    id: "mapping-challenge-2025",
    title: "2025 Mapping Challenge",
    description: "A series of maps created during the #30DayMapChallenge",
    hero: {
      type: "image",
      src: "assets/projects/2025 Mapping Challenge/2025 Mapping Challenge_Day 2_Lines.png",
      caption: "Day 2: Lines - Depicts all major roads in the continental United States."
    },
    category: [
      "carto"
    ],
    tags: [
      "ArcGIS Pro",
      "Cartography"
    ],
    githubLink: null,
    featured: true,
    year: 2025,

    // Project Page elements
    summary: "The #30DayMappingChallenge is an opportunity to express your mapping skills and creativity. I participated in 2025, creating a series of unique maps.",
    time: "One map a day, for 30 days",
    role: "Individual",
    deliverable: "Softcopy static maps",

    objective: null,
 
    links: [
      {
        label: "30 Day Mapping Challenge",
        url: "https://30daymapchallenge.com/"
      }
    ],

    gallery: [
      {
        type: "image",
        src: "assets/projects/2025 Mapping Challenge/2025 Mapping Challenge_Day 1_Points.png",
        caption: "Day 1: Points - Cities Along the Prime Meridian"
      },

      {
        type: "image",
        src: "assets/projects/2025 Mapping Challenge/2025 Mapping Challenge_Day 2_Lines.png",
        caption: "Day 2: Lines - 4 Million Miles of Roads"
      },

      {
        type: "image",
        src: "assets/projects/2025 Mapping Challenge/2025 Mapping Challenge_Day 3_Polygons.png",
        caption: "Day 3: Polygons - Proximity to Waffle House"
      },

      {
        type: "image",
        src: "assets/projects/2025 Mapping Challenge/2025 Mapping Challenge_Day 4_My Data.png",
        caption: "Day 4: My Data - Mapping My Travels Through the Air"
      },
   
      {
        type: "image",
        src: "assets/projects/2025 Mapping Challenge/2025 Mapping Challenge_Day 5_Earth.png",
        caption: "Day 5: Earth - The Gila Mountains"
      },
    ],

    method: null,
    
    sources: [
      "OSM",
    ],
      
  }
];
