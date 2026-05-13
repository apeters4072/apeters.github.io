// To change from a static image to an AGOL webmap, change 'type: "image"' to 'type: "agol"'
// Additionally, change 'src:' to 'itemId:' and input web map itemID

const projects = [
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
      "- OpenStreetMap vector data",
      "- NaturalEarth vector and raster data",
      "- wafflehouse.com for store locations",
      "- USGS Elevation data",
      "- USGS Hydrography data",
      "- Wikipedia text information",
    ],
      
  }

  //*******************************************************************************
  
  {
    // Project Information
    id: "himalayas",
    title: "The Himalayas",
    description: "Mapping the highest peaks in the world",
    hero: {
      type: "image",
      src: "assets/projects/The Himalayas/The Himalayas.png",
      caption: "The Himalayas"
    },
    category: [
      "carto",
      "school"
    ],
    tags: [
      "ArcGIS Pro",
      "Cartography"
    ],
    githubLink: null,
    featured: false,
    year: 2024,

    // Project Page elements
    summary: "This map visualizes the Himalayas using John Nelson's 'Imhof Style' and provides information on the highest peaks within the mountain range.",
    time: "One week",
    role: "Individual",
    deliverable: "Softcopy static map",

    objective: "This map was created for a weekly assignment in GIS-302: Cartography. The objective of the lab was to create a 'Cool Map' using an ArcGIS style from the ArcGIS Pro Styles 'Creative Styles' selection. The content of the map was open-ended, and left to the map-maker to decide.",
 
    links: [
      {
        label: "ArcGIS Pro Styles - Creative Styles",
        url: "https://esri-styles.maps.arcgis.com/home/group.html?sortField=modified&sortOrder=desc&id=7b1f5383c2c340acb08bdd5d69bf24df#content"
      },

      {
        label: "Imhof Style by John Nelson",
        url: "https://esri-styles.maps.arcgis.com/home/item.html?id=1f25b31793cd4e7391b0cd51b9b79783"
      },
    ],

    gallery: [
      {
        type: "image",
        src: "assets/projects/The Himalayas/The Himalayas.png",
        caption: "The Himalayas"
      },    
    ],

    method: null,
    
    sources: [
      "- Imhof Style | ESRI, John Nelson",
      "- Mountain Range Boundary | Zendodo.org",
      "- Peak Information | Wikipedia",
      "- Terrain Data | Earthstar Geographics, ESRI",
    ],
      
  }
];
