var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "350", //'700' or 'responsive'
    background_color: "#00A0A9",
    background_transparent: "yes",
    border_color: "white",
    state_description: "",
    state_color: "green",
    state_hover_color: "darkgreen",
    state_url: "",
    border_size: "5",
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Visited",
    location_url: "",
    location_color: "Red",
    location_opacity: "1",
    location_hover_opacity: 1,
    location_size: "30",
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_hover_color: "grey",
    border_hover_size: "10"
  },
  state_specific: {
    PAK1108: {
      name: "Balochistan"
    },
    PAK1109: {
      name: "Azad Kashmir"
    },
    PAK1110: {},
    PAK1111: {},
    PAK1112: {},
    PAK1113: {
      name: "Punjab"
    },
    PAK1114: {
      name: "Sindh"
    },
    PAK1123: {
      name: "Khyber Pakhtunkhwa"
    }
  },
  locations: {
    "0": {
      lat: "33.69",
      lng: "73.0551",
      name: "Islamabad"
    },
    "1": {
      lat: 32.156,
      lng: 74.175,
      name: "Gujranwala"
    },
    "2": {
      lat: 33.589,
      lng: 73.046,
      name: "Rawalpindi"
    },
    "3": {
      lat: 33.769,
      lng: 72.755,
      name: "Wah"
    },
    "4": {
      lat: 34.008,
      lng: 71.517,
      name: "Peshawar"
    },
    "5": {
      lat: 31.539,
      lng: 74.303,
      name: "Lahore"
    },
    "6": {
      lat: 30.186,
      lng: 71.448,
      name: "Multan"
    },
    "7": {
      lat: 24.896,
      lng: 66.999,
      name: "Karachi"
    }
  },
  labels: {},
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [
        "Quetta"
      ],
      name: "Balochistan"
    },
    "1": {
      states: [],
      name: "Azad Kashmir"
    },
    "2": {
      states: [
        "Gujranwala",
        "Rawalpindi",
        "Wah",
        "Lahore",
        "Multan"
      ],
      name: "Punjab"
    },
    "3": {
      states: [
        "Karachi"
      ],
      name: "Sindh"
    },
    "4": {
      states: [
        "Peshawar"
      ],
      name: "Khyber Pakhtunkhwa"
    }
  }
};