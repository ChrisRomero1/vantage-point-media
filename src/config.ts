export interface SiteConfig {
  language: string;
  brandName: string;
  copyright: string;
}

export interface NavigationConfig {
  infoLinkLabel: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
}

export interface InfoPageConfig {
  backLinkLabel: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  contactLabel: string;
  contactEntries: ContactEntry[];
}

export interface OverlayConfig {
  frameDetailLabel: string;
  fileLabel: string;
  seriesLabel: string;
  closeLabel: string;
}

export interface ImageItem {
  src: string;
  category: string;
  title: string;
  description: string;
}

export interface GalleryConfig {
  images: ImageItem[];
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "Vantage Point",
  copyright: "© 2025 Vantage Point Media",
};

export const navigationConfig: NavigationConfig = {
  infoLinkLabel: "Services",
};

export const infoPageConfig: InfoPageConfig = {
  backLinkLabel: "Close",
  eyebrow: "DRONE VIDEOGRAPHY & PHOTOGRAPHY",
  title: "Aerial storytelling from above the Tennessee River to the ridges of Lookout Mountain.",
  paragraphs: [
    "Vantage Point Media is a Chattanooga-based aerial imaging studio specializing in cinematic drone videography and photography. Fully FAA Part 107 certified and insured, I work with realtors, event planners, tourism boards, and brands who need striking aerial perspectives that ground-level cameras simply cannot capture.",
    "Every flight is planned with precision — from pre-shoot location scouting and weather analysis to intelligent flight modes that produce smooth, professional footage. Whether it is a real estate listing that needs to stand out, a wedding that deserves a bird's-eye view, or a marketing campaign that requires dramatic Tennessee scenery, the approach is always tailored to the story.",
    "Based between the Tennessee River and the Appalachian foothills, the natural landscape here provides an incredible canvas — golden hour light over the ridges, the river's winding path through downtown, the changing seasons across the valley. These are the backdrops that make aerial work in Chattanooga genuinely special.",
  ],
  contactLabel: "GET IN TOUCH",
  contactEntries: [
    {
      label: "Email",
      value: "hello@vantagepointmedia.co",
      href: "mailto:hello@vantagepointmedia.co",
    },
    {
      label: "Phone",
      value: "(423) 555-0147",
      href: "tel:+14235550147",
    },
    {
      label: "Based In",
      value: "Chattanooga, Tennessee",
    },
    {
      label: "Instagram",
      value: "@vantagepoint.tn",
      href: "https://instagram.com/vantagepoint.tn",
    },
    {
      label: "Availability",
      value: "Monday – Saturday\nFlight windows: sunrise to sunset",
    },
  ],
};

export const overlayConfig: OverlayConfig = {
  frameDetailLabel: "Frame Detail",
  fileLabel: "File",
  seriesLabel: "Series",
  closeLabel: "Close",
};

export const galleryConfig: GalleryConfig = {
  images: [
    {
      src: "/images/river_overlook_01.jpg",
      category: "Real Estate",
      title: "River City — Golden Hour",
      description: "The Tennessee River cuts through downtown Chattanooga as the sun dips low over Lookout Mountain. Shot at 200 feet during the last twenty minutes of usable light — the moment when the city shifts from working town to something almost magical.",
    },
    {
      src: "/images/estate_aerial_01.jpg",
      category: "Real Estate",
      title: "Ridge Estate — No. 01",
      description: "A Missionary Ridge property where the backyard ends and the Appalachian foothills begin. The pool catches the last light while the valley stretches out below. This is why buyers pay the ridge premium.",
    },
    {
      src: "/images/waterfall_overlook_01.jpg",
      category: "Nature",
      title: "Falls From Above — No. 03",
      description: "Mist rising off a waterfall hidden deep in the Chattanooga valley canopy. You cannot reach this spot by trail — only by air. The morning light filters through layers of green until it hits the spray and turns gold.",
    },
    {
      src: "/images/marina_overhead_01.jpg",
      category: "Real Estate",
      title: "Marina Geometry — No. 01",
      description: "Boat slips from directly above, the water so clear you can see the bottom ten feet down. There is something satisfying about human geometry against natural chaos — the docks forming perfect lines while the shoreline does what it wants.",
    },
    {
      src: "/images/downtown_dusk_01.jpg",
      category: "Tourism",
      title: "Blue Hour Downtown — No. 02",
      description: "The Walnut Street Bridge lights up as the sky goes cobalt. This is the shot that ends every Chattanooga tourism reel — the city at its most confident, reflected in a river that has seen it all.",
    },
    {
      src: "/images/golf_course_01.jpg",
      category: "Real Estate",
      title: "Fairway Patterns — Morning",
      description: "Dew still on the grass at 7am, the bunkers casting long shadows that will be gone in an hour. Golf courses were made for aerial photography — all that deliberate geometry finally makes sense from above.",
    },
    {
      src: "/images/river_rocks_01.jpg",
      category: "Nature",
      title: "Currents — Tennessee River",
      description: "Kayakers thread through boulders in a shallow stretch of river most people drive past without noticing. From 150 feet up, the water patterns become abstract art — turquoise and white against dark stone.",
    },
    {
      src: "/images/lookout_mountain_01.jpg",
      category: "Nature",
      title: "Ridgeline at Dawn — No. 01",
      description: "Lookout Mountain catches the first light while valleys below still sleep in cloud. The layers go on forever — ridge after ridge fading into the morning haze. This is why you launch at 5:45am.",
    },
    {
      src: "/images/event_venue_01.jpg",
      category: "Events",
      title: "Hilltop Wedding — Golden Hour",
      description: "A white tent on a hilltop, guests spilling onto the lawn as the sun sets over the river valley. The bride wanted the mountains in every shot. From up here, she got them.",
    },
    {
      src: "/images/construction_aerial_01.jpg",
      category: "Commercial",
      title: "Steel Frame — Progress Shot",
      description: "A commercial build from above — the skeleton of what will be a medical office, the grid of streets around it already in place. Construction companies need documentation; aerial gives them perspective they cannot get from the ground.",
    },
    {
      src: "/images/lake_chickamauga_01.jpg",
      category: "Tourism",
      title: "Lake Shoreline — Summer",
      description: "Lake Chickamauga on a July morning, the water still enough to mirror the sky. The tree canopy presses right to the shoreline — no beaches, just wilderness meeting water the way it has for centuries.",
    },
    {
      src: "/images/farmland_aerial_01.jpg",
      category: "Nature",
      title: "Patchwork Fields — East TN",
      description: "Rolling farmland stitched together by tree lines and fence rows. The red barn anchors the composition while the fields shift from green to gold to brown. This is the Tennessee that exists thirty minutes outside the city.",
    },
    {
      src: "/images/walnut_bridge_01.jpg",
      category: "Tourism",
      title: "Walnut Street — Sunset",
      description: "The historic pedestrian bridge at golden hour, people walking home or out for the evening. The Hunter Museum sits on the bluff to the right, the river rolls beneath. This angle only works from the air.",
    },
    {
      src: "/images/campus_aerial_01.jpg",
      category: "Real Estate",
      title: "UTC Campus — Clear Day",
      description: "The University of Tennessee at Chattanooga spread out below Finley Stadium, the academic buildings clustered around the quad, the mountains framing everything. Campus looks better from 250 feet.",
    },
    {
      src: "/images/sunset_ridge_01.jpg",
      category: "Real Estate",
      title: "Ridge Homes — Twilight",
      description: "A neighborhood on the ridge catching the last warm light of the day. Every rooftop faces west, every backyard drops off toward the valley. These homes were positioned with sunsets in mind.",
    },
    {
      src: "/images/rafting_river_01.jpg",
      category: "Events",
      title: "Ocoee Rafters — Action",
      description: "Four orange rafts punching through the Ocoee River rapids. Shot from directly above at 180 feet — close enough to see the paddles working, high enough to show the river threading through the gorge. Adventure tourism at its most visceral.",
    },
    {
      src: "/images/vineyard_hills_01.jpg",
      category: "Tourism",
      title: "Vineyard Rows — Autumn",
      description: "A Tennessee vineyard in peak fall color — the grapevines still green in their rows while the surrounding forest burns orange and red. The tasting room sits at the center like a postcard.",
    },
    {
      src: "/images/aquarium_district_01.jpg",
      category: "Tourism",
      title: "Aquarium District — Overcast",
      description: "The Tennessee Aquarium's glass pyramids and the Ross's Landing plaza on a soft overcast day. The riverwalk curves along the bank, tourists stroll the amphitheater. Chattanooga's front porch, documented from above.",
    },
    {
      src: "/images/foggy_valley_01.jpg",
      category: "Nature",
      title: "Valley Fog — Dawn",
      description: "Thick fog fills the valley between ridges, only the treetops breaking through. This is the shot that makes the 5am alarm worth it — the world reduced to islands of green floating in a sea of white mist.",
    },
    {
      src: "/images/luxury_twilight_01.jpg",
      category: "Real Estate",
      title: "Modern Estate — Blue Hour",
      description: "A contemporary home at the moment between day and night — the pool reflects the deep blue sky, interior lights glow warm through floor-to-ceiling glass, and the fire pit invites you outside. Twilight real estate photography that sells the lifestyle, not just the house.",
    },
  ],
};
