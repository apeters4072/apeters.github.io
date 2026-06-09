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
    featured: false,
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
      "Roads, Boundaries | OpenStreetMap",
      "Boundaries, Hypso Tint | NaturalEarth",
      "Elevation data | USGS",
      "Hydrography data | USGS",
      "Text Information | Wikipedia",
      "Waffle House locations | wafflehouse.com",
    ],
      
  },

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

    objective: "This map was created for a weekly assignment in GIS-302: Cartography. The objective of the lab was to create a 'Cool Map' using an ArcGIS style from the ArcGIS Pro Styles 'Creative Styles' selection. The content of the map was open-ended and left to the map-maker to decide.",
 
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
      "Imhof Style | ESRI, John Nelson",
      "Mountain Range Boundary | Zendodo.org",
      "Peak Information | Wikipedia",
      "Terrain Data | Earthstar Geographics, ESRI",
    ],
      
  },

  //*******************************************************************************

 {
    // Project Information
    id: "svi-slave-populations",
    title: "Social Vulnerability and Slave Populations",
    description: "Exploring the relationship between Social Vulnerability and historical slave populations",
    hero: {
      type: "image",
      src: "assets/projects/SVI Trends and Slave Populations/SVI Trends Amongst Slave Populations.png",
      caption: "Mapping the Relationship between Slave Populations and Social Vulnerabilty in the Southern States of the United States."
    },
    category: [
      "geo-analysis",
      "school"
    ],
    tags: [
      "ArcGIS Pro",
      "Social Vulnerability",
    ],
    githubLink: null,
    featured: false,
    year: 2025,

    // Project Page elements
    summary: "This project explores the relationship between the CDC's Social Vulnerability Index (SVI) and historical slave populations in the southeastern United States. It categorizes the relationship through a multivirate color scale; darker red represents areas of high risk (According to the SVI) and high concentrations of slaves, and depicts the opposite with light red.",
    time: "One Week",
    role: "Individual",
    deliverable: "Softcopy static map",

    objective: "This map was created for a weekly assignment in REM-202: Intro to Imagery Science. The objective of the lab was to georectify a scanned image of historical map using ArcGIS Pro, and then to explore the relationship between the slave populations depicted on that map and modern Social Vulnerability trends.",
 
    links: [
      {
        label: "Social Vulnerability Index (CDC)",
        url: "https://www.atsdr.cdc.gov/place-health/php/svi/index.html"
      },
    ],

    gallery: [
      {
        type: "image",
        src: "assets/projects/SVI Trends and Slave Populations/SVI Trends Amongst Slave Populations.png",
        caption: "Mapping the Relationship between Slave Populations and Social Vulnerabilty in the Southern States of the United States."
      },    
    ],

    method: [
      "Georectified the 1860 Slave Population map by creating 16 tie points and applying the Spline transformation",
      "Imported the SVI data and symbolized by overall risk",
      "Applied a Hard Light blend mode to darken the shade of each census tract based upon the shading of the county it fell over on the slave population map",
      "Applied general cartographic refinements to improve appearance and readability",
    ],
    
    sources: [
      "Social Vulnerability index | Centers for Disease Control and Prevention/ Agency for Toxic Substances and Disease Registry/ Geospatial Research, Analysis, and Services Program- 2022 Social Vulnerability Index",
      "1860 Slave Populations | Library of Congress",
      "Boundaries | NaturalEarth",
      "Textual information refined with ChatGPT"
    ],
      
  },

  //*******************************************************************************

  {
    // Project Information
    id: "covid-cases-us-colleges",
    title: "Coronavirus Cases at U.S. Colleges and Universities",
    description: "Visualizing college COVID cases across the United States.",
    hero: {
      type: "image",
      src: "assets/projects/College COVID Cases/Coronavirus Cases at US Colleges and Universites.jpg",
      caption: "Coronavirus Cases at U.S. Colleges and Universities in the continental United States."
    },
    category: [
      "carto",
      "school"
    ],
    tags: [
      "ArcGIS Pro",
      "COVID-19",
      "Geocoding",
    ],
    githubLink: null,
    featured: false,
    year: 2024,

    // Project Page elements
    summary: "This map visualizes college and university COVID-19 cases using John Nelson's 'Firefly' style. Additionally, the map portrays the average number of college COVID-19 cases per state.",
    time: "One week",
    role: "Individual",
    deliverable: "Softcopy static map",

    objective: "This map was created for a weekly assignment in GIS-302: Cartography. The objective of the lab was geocode a textual database of college COVID cases and visualize those locations by the number of cases per school.",
 
    links: [
      {
        label: "College COVID-19 Dataset (New York Times)",
        url: "https://github.com/nytimes/covid-19-data/tree/master/colleges"
      },

      {
        label: "Firefly Style by John Neslon",
        url: "https://hub.arcgis.com/content/93a6d9ea3b54478193ba566ab9d8b748/about"
      },
      
    ],

    gallery: [
      {
        type: "image",
        src: "assets/projects/College COVID Cases/Coronavirus Cases at US Colleges and Universites.jpg",
        caption: "Coronavirus Cases at U.S. Colleges and Universities in the continental United States."
      },    
    ],

    method: [
      "Geocoded the college COVID cases database, which only listed the reporting college for location.",
      "Symbolized the quantity of cases per college",
      "Created a normalized histogram that compares the average number of college COVID cases per state",
    ],
    
    sources: [
      "Boundaries | NaturalEarth",
      "COVID-19 at U.S. Colleges and Universities | New York Times",
      "Firefly style | ESRI, John Nelson",
    ],
      
  },

  //*******************************************************************************

  {
    // Project Information
    id: "comparing-interpolation-techniques",
    title: "Comparing Interpolation Tecnhiques",
    description: "Comparing the differences between kriging techniques",
    hero: {
      type: "image",
      src: "assets/projects/Comparing Interpolation Techniques/Peters_M12_Lab_Comparing-Interpolation-Techniques.png",
      caption: "Comparing Interpolation Techniques"
    },
    category: [
      "data-science",
      "geo-analysis",
      "school"
    ],
    tags: [
      "ArcGIS Pro",
      "Geostatistical Analysis",
    ],
    githubLink: null,
    featured: false,
    year: 2025,

    // Project Page elements
    summary: "This project compares the level of accuracy between different interpolation techniques. Three methods were used in this project; simple kriging, empirical bayesian kriging (EBK), and EBK Regression Prediction.",
    time: "One week",
    role: "Individual",
    deliverable: "Softcopy static map",

    objective: "This map was created for a weekly assignment in GIS-461: Geo Math, Algorithms, and Statistics. The objective of the lab was to create a continuous temperature surface using different interpolation techniques and compare the differences. Each temperature surface used the same data source and use the same study area.",
 
    links: [
      {
        label: "How Kriging Works (ESRI)",
        url: "https://pro.arcgis.com/en/pro-app/3.4/tool-reference/spatial-analyst/how-kriging-works.htm"
      },

    ],

    gallery: [
      {
        type: "image",
        src: "assets/projects/Comparing Interpolation Techniques/Peters_M12_Lab_Comparing-Interpolation-Techniques.png",
        caption: "Comparing Interpolation Techniques"
      },    
    ],

    method: [
      "Ingested point feature class that contained temperature data",
      "Interpolated a temperature surface suing simple kriging through the Geostatistical Wizard",
      "Interpolated a temperature surface using empirical bayesian kriging (EBK) through the Geostatistical Wizard",
      "Incoroporated explanatory variables, such as impervious surfaces, with EBK Regression Prediction",
    ],
    
    sources: [
      "Analyze Urban Heat using Kriging | ESRI",
      "NLCD - Impervious Surfaces | USGS",
      "Temperature data | Environmental Data Initiative",
      "Basemap | ESRI",
    ],
      
  },

  //*******************************************************************************

  {
    // Project Information
    id: "metro-phx-temperature-study",
    title: "Metro Phoenix Temperature Study",
    description: "Rising temperatures in the Southeast, compounded by sprawling urban growth",
    hero: {
      type: "image",
      src: "assets/projects/Metro Phoenix Temperature Study/AZ_Desert.jpg",
      caption: "Sonoran Desert, Arizona"
    },
    category: [
      "data-science",
      "geo-analysis",
      "programming",
      "web",
      "school"
    ],
    tags: [
      "ArcGIS Online",
      "ArcGIS Pro",
      "RStudio",
      "Python",
      "Geostatistical Analysis",
    ],
    githubLink: null,
    featured: false,
    year: 2025,

    // Project Page elements
    summary: "This project examines historical temperature trends aorund metro Phoenix and identifies a general temperature increases for the past 20 years. Furthermore, this project explores water infrastructure in the region to gain a better understanding of the challenges the desert faces.",
    time: "One month",
    role: "Lead geospatial analyst and cartographer of a group of 4",
    deliverable: "StoryMap, web maps, charts, graphs, and code scripts",

    objective: "This StoryMap was created for the final examination in GIS-461: Geo Math, Algorithms, and Statistics. The objective of the final was to employ the statical and geostatistical techniques that we learned throughout the semester, and deliver a cohesive view of temperature trends in the region around metro Phoenix.",
 
    links: [
      {
        label: "Metro Phoenix Temperature Study StoryMap",
        url: "https://storymaps.arcgis.com/stories/7fa0d0d8788245f6a91f36ea45620878"
      },
      
      {
        label: "How Kriging Works (ESRI)",
        url: "https://pro.arcgis.com/en/pro-app/3.4/tool-reference/spatial-analyst/how-kriging-works.htm"
      },
    ],

    gallery: [
      {
        type: "arcgis-app",
        url: "https://storymaps.arcgis.com/stories/7fa0d0d8788245f6a91f36ea45620878?is_embed=true",
        caption: "Click to View | Metro Phoenix Temperature Study StoryMap"
      },    

      {
        type: "arcgis-map",
        itemId: "8b76725db658489b9813972cc708ff03",
        caption: "Interpolated temperature surface depicting hottest day in metro Phoenix area in 20-year period, July 11, 2022."
      },

      {
        type: "arcgis-map",
        itemId: "c14a8b6ee7d24e8083bb2130975ddc0d",
        caption: "Interpolated rate of change surface depicitng the average rate of change per year in metro Phoenix area."
      },

      {
        type: "arcgis-map",
        itemId: "fb47a6356c734ac390e53121e8e6e7bc",
        caption: "Web map depicting watersheds in Arizona"
      },

      {
        type: "arcgis-map",
        itemId: "e18ee24784cb431990dffcf731a4f1fe",
        caption: "Web map depicting water infrastructure in Arizona"
      },
    ],

    method: [
      "Created a Python script to identify the hottest day recorded amongst any station over a 20-year period. Then, add each station's temperature on that same day to an array.",
      "Using the information identified in Step 1, use those values to inform an interpolation model. Different interpolation techniques were explored using ArcGIS Pro's Geostatistical Wizard and ranked by a custom weighted calculator.",
      "Created a Python script to determine each stations rate of change per station through linear regression, and added those values to a three-dimensional array.",
      "Using the information identified in Step 3, the values inside the three-dimensional array were used to inform an average rate of change surface. Different interpolation techniques were explored using ArcGIS Pro's Geostatistical Wizard and ranked by a custom weighted calculator.",
    ],
    
    sources: [
      "Temperature data | AZMET, University of Arizona Cooperative Extension",
      "Land Use/Land Cover (LULC) | ESRI Living Atlas of the World",
    ],
      
  },

  //*******************************************************************************

  {
    // Project Information
    id: "world-map-political",
    title: "World Map - Political",
    description: "Depicting the Countries of the World",
    hero: {
      type: "image",
      src: "assets/projects/World Map - Political/World_Map_Political.png",
      caption: "World Map - Political"
    },
    category: [
      "carto",
    ],
    tags: [
      "ArcGIS Pro",
      "Cartography",
    ],
    githubLink: null,
    featured: true,
    year: 2026,

    // Project Page elements
    summary: "I created this map to the exact size of my PC monitor, allowing me to set it as the background without compromising resolution. This map depicts country boundaries and includes disputed areas.",
    time: "2 weeks",
    role: "Individual",
    deliverable: "Softcopy static map",

    objective: "Create a world map to a specified size, focusing on improving my cartographic skills by balancing a dense quantity of text information and cartographic symbols.",

    gallery: [
      {
        type: "image",
        src: "assets/projects/World Map - Political/World_Map_Political.png",
        caption: "World Map - Political"
      },    
    ],

    method: [
      "Establish the size of the map and explore data requirements",
      "General cartographic refinements, such as feature class thinning",
      "Convert labels to annotations and manually adjust labels",
      "Ingest supplemental data to fill visual gaps, refine and adjust labels",
      "Create inset maps and complete marginalia",
    ],
    
    sources: [
      "Vector Data | NaturalEarth",
      "Global Hillshade | Esri",
      "Text Info | Reference World Atlas, 11th Edition, DK",
    ],
      
  },

  //*******************************************************************************
  
  {
    // Project Information
    id: "10-week-mapping-challenge",
    title: "10 Week Mapping Challenge",
    description: "Cartographic expression over the course of 10 weeks",
    hero: {
      type: "image",
      src: "assets/projects/10 Week Mapping Challenge/10WMC_Week-2_Lines.png",
      caption: "Week 2: Lines - A Joy Plot depiction of Iran"
    },
    category: [
      "carto",
    ],
    tags: [
      "ArcGIS Pro",
      "Cartography",
    ],
    githubLink: null,
    featured: false,
    year: 2026,

    // Project Page elements
    summary: "The 10 Week Mapping Challenge is an in-house challenge for the GIS students at Delta State University, where the goal is to create a unique map once a week, for 10 weeks. The challenge began on June 1st, so be patient if you do not see all 10 maps yet!",
    time: "One map a week, for 10 weeks",
    role: "Individual",
    deliverable: "Softcopy static maps",

    links: [
      {
        label: "Joy Plots in ArcGIS Pro - Ken Fields",
        url: "https://www.esri.com/arcgis-blog/products/arcgis-pro/mapping/joy-plots-in-arcgis-pro"
      },
    ],

    gallery: [
      {
        type: "image",
        src: "assets/projects/10 Week Mapping Challenge/10WMC_Week-1_Points.png",
        caption: "Week 1: Points - The lighthouses of the world"
      },  
      
      {
        type: "image",
        src: "assets/projects/10 Week Mapping Challenge/10WMC_Week-2_Lines.png",
        caption: "Week 2: Lines - A Joy Plot depiction of Iran"
      }, 
    ],
    
    sources: [
      "Lighthouses | OpenStreetMap",
      "Boundaries | NaturalEarth",
      "Elevation | Esri",
    ],
      
  },

  //*******************************************************************************

  {
    // Project Information
    id: "animaing-NDVI",
    title: "Animating NDVI",
    description: "Interpolating NDVI images to create a smooth animation",
    hero: {
      type: "image",
      src: "assets/projects/Animating NDVI/NDVI Animation.gif",
      caption: "Animation of Normalized Difference Vegetation Index of Cleveland, MS"
    },
    category: [
      "programming",
      "remote",
      "school"
    ],
    tags: [
      "RStudio",
      "Remote Sensing",
      "NDVI",
    ],
    githubLink: null,
    featured: false,
    year: 2024,

    // Project Page elements
    summary: "A series of Normalized Difference Vegetation Index (NDVI) images over Cleveland, MS. The animation shows the change in vegetation over the course of a year.",
    time: "One week",
    role: "Individual",
    deliverable: "Softcopy animation",

    objective: "From Landsat imagery, derive a series of NDVI images over the course of a year. Then, interpolate additional images from the NDVI images to improve animation smoothness. Lastly, create an animation from all of the NDVI images as a .gif",
 
    links: [
      {
        label: "Landsat NDVI - USGS",
        url: "https://www.usgs.gov/landsat-missions/landsat-normalized-difference-vegetation-index"
      },

      {
        label: "NDVI - NASA",
        url: "https://www.earthdata.nasa.gov/topics/land-surface/normalized-difference-vegetation-index-ndvi"
      },
    ],

    gallery: [
      {
        type: "image",
        src: "assets/projects/Animating NDVI/NDVI Animation.gif",
        caption: "Animation of Normalized Difference Vegetation Index of Cleveland, MS"
      },    
    ],

    method: [
      "Ingest Landsat images and select out the necessary bands (Bands 4 and 5)",
      "Crop the rasters to the area of interest, ensuring consistency when doing raster math",
      "Create the NDVI images (For each Landsat image, use the equation: Band 5 - Band 4 / Band 5 + Band 4)",
      "Interpolate NDVI images between sequential Landsat images. Find the difference between two sequential NDVI images, and divide that by a chosen step count. Then, for each step, add those values to the earlier images, creating a smooth transition between key frames.",
      "Sort all images in chronological order, and export as .gif",
    ],
    
    sources: [
      "Landsat | USGS",
    ],
      
  },

  //*******************************************************************************
  
/*

  {
    // Project Information
    id: "project-id",
    title: "project-title",
    description: "description; shows on project card and project hero",
    hero: {
      type: "image",
      src: "assets/projects/project_folder/project_image.png",
      caption: "project_image caption"
    },
    category: [
      "carto",
      "data-science",
      "geo-analysis",
      "programming",
      "remote",
      "web",
      "school"
    ],
    tags: [
      "technology",
      "tag 1",
      "tag 2",
      "tag 3",
    ],
    githubLink: "https://github.com/apeters4072/",
    featured: false,
    year: 2026,

    // Project Page elements
    summary: "Summary of project",
    time: "Time working on project",
    role: "Role in project",
    deliverable: "Products created",

    objective: "Objective of project",
 
    links: [
      {
        label: "Link 1 Label",
        url: "https://www.arcgis.com/index.html"
      },

      {
        label: "Link 2 Label",
        url: "https://www.arcgis.com/index.html"
      },

      {
        label: "Link 3 Label",
        url: "https://www.arcgis.com/index.html"
      },
    ],

    gallery: [
      {
        type: "image",
        src: "assets/projects/project_folder/project_image.png",
        caption: "project_image caption"
      },    
      <!-- OR -->
      {
        type: "arcgis-map",
        itemId: "item id",
        caption: "item caption"
      },
      <!-- OR -->
      {
        type: "arcgis-app",
        url: "link?embed=true", (Must add the embed part)
        caption: "Click to View | item caption"
      },
    ],

    method: [
      "Step 1",
      "Step 2",
      "Step 3",
      "Step 4",
      "Step 5",
    ],
    
    sources: [
      "Data 1 | Source",
      "Data 2 | Source",
      "Data 3 | Source",
      "Data 4 | Source",
      "Data 5 | Source",
    ],
      
  },

  //*******************************************************************************
  
*/
];
