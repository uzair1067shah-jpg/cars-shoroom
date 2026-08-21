/* ==========================================
   APEX AUTOMOTIVE - LUXURY CAR SHOWROOM
   JavaScript Interactivity & Engine
   ========================================== */

// 1. CAR DATASET (12 Luxury Vehicles)
const CARS_DATA = [
  {
    id: 1,
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    model: "911 GT3 RS",
    year: 2024,
    price: 241300,
    type: "Sports Cars",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "1,200 mi",
    engine: "4.0L Naturally Aspirated Flat-6",
    horsepower: "518 hp",
    torque: "465 Nm",
    acceleration: "3.0s (0-60 mph)",
    topSpeed: "184 mph",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Porsche 911 GT3 RS is designed for maximum performance. Featuring active aerodynamics, lightweight carbon construction, and an ultra-responsive 4.0L naturally aspirated engine that revs up to 9,000 RPM.",
    features: {
      interior: ["Full Bucket Carbon Seats", "Alcantara Steering Wheel", "Chrono Package", "Bose Surround System", "Track Precision App"],
      safety: ["Porsche Ceramic Composite Brakes", "Active Aerodynamic Braking", "TPMS with Temperature Display", "Roll Cage System"]
    }
  },
  {
    id: 2,
    name: "BMW M8 Competition Gran Coupe",
    brand: "BMW",
    model: "M8 Competition",
    year: 2024,
    price: 138800,
    type: "Luxury Cars",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "3,400 mi",
    engine: "4.4L M TwinPower Turbo V8",
    horsepower: "617 hp",
    torque: "750 Nm",
    acceleration: "3.1s (0-60 mph)",
    topSpeed: "190 mph",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An uncompromised blend of track-bred performance and four-door luxury. Powered by a twin-turbo V8 and equipped with M xDrive all-wheel drive, the M8 Competition commands authority on every road.",
    features: {
      interior: ["Merino Leather Upholstery", "Bowers & Wilkins Diamond Sound", "Carbon Fiber Trim", "Heated & Ventilated Seats", "Head-Up Display"],
      safety: ["Driving Assistance Professional", "Active Blind Spot Detection", "360 Surround View Camera", "Carbon Ceramic Brakes"]
    }
  },
  {
    id: 3,
    name: "Mercedes-AMG GT Black Series",
    brand: "Mercedes-Benz",
    model: "AMG GT",
    year: 2023,
    price: 325000,
    type: "Sports Cars",
    fuel: "Petrol",
    transmission: "Dual-Clutch",
    mileage: "950 mi",
    engine: "4.0L Handcrafted AMG V8 Biturbo",
    horsepower: "720 hp",
    torque: "800 Nm",
    acceleration: "3.1s (0-60 mph)",
    topSpeed: "202 mph",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The absolute pinnacle of AMG motor racing technology for the road. Featuring a flat-plane crankshaft V8, adjustable motorsport suspension, and carbon fiber aero package.",
    features: {
      interior: ["AMG Performance Seats", "DINAMICA Microfiber Trim", "AMG Track Pace", "Burmester High-End Sound", "Carbon Fiber Door Sills"],
      safety: ["AMG Traction Control (9-Stage)", "Carbon Ceramic High-Performance Brakes", "Collision Prevention Assist", "Pre-Safe System"]
    }
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    brand: "Audi",
    model: "RS e-tron GT",
    year: 2024,
    price: 147500,
    type: "Electric Cars",
    fuel: "Electric",
    transmission: "Automatic",
    mileage: "2,100 mi",
    engine: "Dual Permanent Magnet Electric Motors",
    horsepower: "637 hp",
    torque: "830 Nm",
    acceleration: "2.9s (0-60 mph)",
    topSpeed: "155 mph",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Electrifying performance meets futuristic Gran Turismo styling. 800V fast-charging architecture delivers up to 270 kW charging capacity alongside quattro all-wheel drive precision.",
    features: {
      interior: ["Nappa Leather Sports Seats", "Bang & Olufsen 3D Sound", "Audi Virtual Cockpit Plus", "Panoramic Glass Roof", "Ambient Lighting"],
      safety: ["Adaptive Cruise Assist", "Audi Pre Sense Front & Rear", "Night Vision Assist", "Carbo-Ceramic Brakes"]
    }
  },
  {
    id: 5,
    name: "Range Rover SV Autobiography",
    brand: "Land Rover",
    model: "Range Rover SV",
    year: 2024,
    price: 234000,
    type: "SUVs",
    fuel: "Hybrid",
    transmission: "Automatic",
    mileage: "1,500 mi",
    engine: "4.4L Twin-Turbo V8 MHEV",
    horsepower: "606 hp",
    torque: "750 Nm",
    acceleration: "4.3s (0-60 mph)",
    topSpeed: "162 mph",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Exquisite craftsmanship and peerless luxury. The SV Signature Suite features power-deployable club tables, integrated refrigerator compartment, and massage seats.",
    features: {
      interior: ["SV Bespoke Leather Suite", "Meridian Signature Sound (1600W)", "Rear Executive Class Seats", "Cooler Compartment", "Active Noise Cancellation"],
      safety: ["All-Wheel Steering", "Terrain Response 2", "Wade Sensing", "Remote Park Assist"]
    }
  },
  {
    id: 6,
    name: "Lamborghini Urus Performante",
    brand: "Lamborghini",
    model: "Urus",
    year: 2023,
    price: 269800,
    type: "SUVs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "4,200 mi",
    engine: "4.0L Twin-Turbo V8",
    horsepower: "657 hp",
    torque: "850 Nm",
    acceleration: "3.1s (0-60 mph)",
    topSpeed: "190 mph",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Super SUV that redefines supercar dynamics in a versatile body. Featuring extensive carbon fiber components, Akrapovič titanium exhaust, and RALLY mode.",
    features: {
      interior: ["Alcantara Performante Trim", "Bang & Olufsen 3D Sound", "Lamborghini ANIMA Selector", "Carbon Fiber Interior Package", "Head-Up Display"],
      safety: ["Carbon Ceramic Brakes", "Active Anti-Roll Stabilization", "Rear Wheel Steering", "Highway Assistant"]
    }
  },
  {
    id: 7,
    name: "Lexus LC 500 Convertible",
    brand: "Lexus",
    model: "LC 500",
    year: 2024,
    price: 106300,
    type: "Luxury Cars",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "2,800 mi",
    engine: "5.0L Naturally Aspirated V8",
    horsepower: "471 hp",
    torque: "540 Nm",
    acceleration: "4.6s (0-60 mph)",
    topSpeed: "168 mph",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A masterclass in automotive aesthetics and acoustic perfection. The 5.0-liter V8 delivers an intoxicating exhaust note paired with a handcrafted soft-top roof.",
    features: {
      interior: ["Semi-Aniline Leather", "Mark Levinson 13-Speaker Reference Sound", "Climate Concierge with Neck Heaters", "Active Noise Control"],
      safety: ["Lexus Safety System+ 2.5", "Dynamic Radar Cruise Control", "Blind Spot Monitor", "Pop-Up Hood for Pedestrian Protection"]
    }
  },
  {
    id: 8,
    name: "Ferrari Roma Spider",
    brand: "Ferrari",
    model: "Roma",
    year: 2024,
    price: 272900,
    type: "Sports Cars",
    fuel: "Petrol",
    transmission: "Dual-Clutch",
    mileage: "780 mi",
    engine: "3.9L Twin-Turbo V8",
    horsepower: "612 hp",
    torque: "760 Nm",
    acceleration: "3.4s (0-60 mph)",
    topSpeed: "199 mph",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "La Nuova Dolce Vita. A contemporary representation of the carefree 1950s and 60s Italian lifestyle, combining timeless elegance with 612 horsepower of Italian V8 fury.",
    features: {
      interior: ["Dual-Cockpit Architecture", "Passenger Display", "JBL Premium Audio", "Poltrona Frau Leather Seats", "Carbon Fiber Steering Wheel with LED Shift Lights"],
      safety: ["Side Slip Control (SSC 6.0)", "Ferrari Dynamic Enhancer", "Matrix LED Headlights", "Carbon Ceramic Brake System"]
    }
  },
  {
    id: 9,
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    model: "Model S",
    year: 2024,
    price: 89990,
    type: "Electric Cars",
    fuel: "Electric",
    transmission: "Automatic",
    mileage: "3,100 mi",
    engine: "Tri-Motor All-Wheel Drive",
    horsepower: "1020 hp",
    torque: "1420 Nm",
    acceleration: "1.99s (0-60 mph)",
    topSpeed: "200 mph",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Beyond fast. With 1,020 horsepower and torque vectoring, the Model S Plaid is the fastest accelerating production sedan in existence.",
    features: {
      interior: ["17-inch Cinematic Display", "Yoke Steering", "22-Speaker 960W Audio", "Gaming Computer (10 teraflops)", "HEPA Air Filtration"],
      safety: ["Full Self-Driving Capability", "Autopilot", "360 Optical Cameras", "Collision Avoidance Warning"]
    }
  },
  {
    id: 10,
    name: "Bentley Continental GT Speed",
    brand: "Bentley",
    model: "Continental GT",
    year: 2024,
    price: 291000,
    type: "Luxury Cars",
    fuel: "Petrol",
    transmission: "Dual-Clutch",
    mileage: "1,800 mi",
    engine: "6.0L Twin-Turbo W12",
    horsepower: "650 hp",
    torque: "900 Nm",
    acceleration: "3.5s (0-60 mph)",
    topSpeed: "208 mph",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The ultimate grand tourer. Combining handcrafted British elegance with a formidable W12 engine and electronic all-wheel steering.",
    features: {
      interior: ["Bentley Rotating Display", "Diamond-in-Diamond Quilting", "Naim for Bentley Audio (2200W)", "Hand-cut Veneers", "Heated Steering Wheel"],
      safety: ["Bentley Dynamic Ride (48V)", "Night Vision", "Head-Up Display", "Carbon Ceramic Brakes"]
    }
  },
  {
    id: 11,
    name: "Aston Martin Vantage F1 Edition",
    brand: "Aston Martin",
    model: "Vantage",
    year: 2023,
    price: 168500,
    type: "Sports Cars",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "2,600 mi",
    engine: "4.0L Twin-Turbo V8",
    horsepower: "527 hp",
    torque: "685 Nm",
    acceleration: "3.5s (0-60 mph)",
    topSpeed: "195 mph",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Celebration of Aston Martin’s return to Formula 1®. Enhanced chassis tuning, aerodynamic wing kit, and track-optimized dampening.",
    features: {
      interior: ["Lime Green Accent Stitching", "Alcantara & Leather Racing Trim", "Aston Martin Audio System", "Matte Dark Carbon Fiber Trim"],
      safety: ["Dynamic Stability Control", "Adaptive Damping System", "Carbon Ceramic Brakes", "Park Assist"]
    }
  },
  {
    id: 12,
    name: "Rolls-Royce Ghost Extended",
    brand: "Rolls-Royce",
    model: "Ghost",
    year: 2024,
    price: 395000,
    type: "Luxury Cars",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "1,100 mi",
    engine: "6.75L Twin-Turbo V12",
    horsepower: "563 hp",
    torque: "850 Nm",
    acceleration: "4.6s (0-60 mph)",
    topSpeed: "155 mph",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The purest expression of Rolls-Royce luxury. Featuring Planar Suspension System, Illuminated Fascia, Starlight Headliner, and effortless power doors.",
    features: {
      interior: ["Starlight Headliner with Shooting Stars", "Effortless Power Doors", "Rear Suite Champagne Cooler", "Besopke Audio System", "Lambswool Footmats"],
      safety: ["Flagbearer Vision System", "360 Surround View", "Active Cruise Control", "Vision Assist with Pedestrian Detection"]
    }
  },
  {
    id: 13,
    name: "Honda Civic Type R Mugen",
    brand: "Honda",
    model: "Civic Type R",
    year: 2024,
    price: 84500,
    type: "Sports Cars",
    fuel: "Petrol",
    transmission: "Manual",
    mileage: "800 mi",
    engine: "2.0L Turbocharged Inline-4",
    horsepower: "315 hp",
    torque: "420 Nm",
    acceleration: "5.3s (0-60 mph)",
    topSpeed: "170 mph",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618245472463-b30f63602796?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598533816694-814d6428c464?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The ultimate hot hatch, refined by legendary tuner Mugen. Featuring lightweight forged wheels, custom carbon fiber aero package, and track-tuned adaptive damper system.",
    features: {
      interior: ["Mugen Bucket Racing Seats", "Alcantara Steering Wheel", "Carbon Fiber Shift Knob", "Data Log R System"],
      safety: ["Brembo High-Performance Brakes", "Honda Sensing Suite", "Helical Limited-Slip Differential", "Active Rev-Match System"]
    }
  }
];

// 2. STATE MANAGEMENT & WISHLIST
let wishlist = JSON.parse(localStorage.getItem('apex_wishlist')) || [];

function saveWishlist() {
  localStorage.setItem('apex_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
}

function updateWishlistBadge() {
  const badges = document.querySelectorAll('.fav-badge');
  badges.forEach(b => b.textContent = wishlist.length);
}

function toggleWishlist(carId) {
  const index = wishlist.indexOf(carId);
  if (index === -1) {
    wishlist.push(carId);
    showToast('Added to your Wishlist!', 'success');
  } else {
    wishlist.splice(index, 1);
    showToast('Removed from Wishlist', 'info');
  }
  saveWishlist();
  
  // Update heart buttons
  document.querySelectorAll(`.car-favorite-btn[data-id="${carId}"]`).forEach(btn => {
    btn.classList.toggle('active', wishlist.includes(carId));
  });
}

// 3. TOAST NOTIFICATION SYSTEM
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'success' ? 'fa-circle-check text-gold' : 'fa-circle-info';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}

// 4. CARD RENDERING UTILITY
function createCarCardHTML(car) {
  const isFav = wishlist.includes(car.id);
  return `
    <div class="car-card">
      <div class="car-card-image-wrap">
        <span class="car-card-badge">${car.type}</span>
        <button class="car-favorite-btn ${isFav ? 'active' : ''}" data-id="${car.id}" onclick="toggleWishlist(${car.id})">
          <i class="fa-solid fa-heart"></i>
        </button>
        <img src="${car.images[0]}" alt="${car.name}" class="car-card-img" loading="lazy" />
      </div>
      <div class="car-card-body">
        <div class="car-brand">${car.brand} • ${car.year}</div>
        <h3 class="car-title">${car.name}</h3>
        <div class="car-price">$${car.price.toLocaleString()}</div>
        
        <div class="car-specs-grid">
          <div class="spec-item" title="Engine HP"><i class="fa-solid fa-gauge-high"></i> ${car.horsepower}</div>
          <div class="spec-item" title="Fuel Type"><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</div>
          <div class="spec-item" title="Transmission"><i class="fa-solid fa-gears"></i> ${car.transmission}</div>
        </div>
        
        <div class="car-card-actions">
          <a href="car-details.html?id=${car.id}" class="btn btn-secondary btn-sm">View Details</a>
          <button class="btn btn-primary btn-sm" onclick="openTestDriveModal('${car.name}')">Book Visit</button>
        </div>
      </div>
    </div>
  `;
}

// 5. NAVBAR & MOBILE DRAWER LOGIC
document.addEventListener('DOMContentLoaded', () => {
  updateWishlistBadge();
  
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Mobile Hamburger Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  }
  
  // Render Featured Cars on Index Page
  const featuredContainer = document.getElementById('featured-cars-grid');
  if (featuredContainer) {
    const featured = CARS_DATA.filter(c => c.featured);
    featuredContainer.innerHTML = featured.map(createCarCardHTML).join('');
  }
  
  // Inventory Filtering Page (cars.html)
  initInventoryFilter();
  
  // Car Details Page Loader (car-details.html)
  initCarDetailsPage();
  
  // Financing Calculator Setup
  initFinancingCalculator();

  // Testimonial Carousel Setup
  initTestimonialSlider();
  
  // Counter Animations
  initCounters();
});

// 6. INVENTORY FILTER & SEARCH SYSTEM
function initInventoryFilter() {
  const container = document.getElementById('inventory-grid');
  if (!container) return;
  
  const searchInput = document.getElementById('search-keyword');
  const brandSelect = document.getElementById('filter-brand');
  const typeSelect = document.getElementById('filter-type');
  const fuelSelect = document.getElementById('filter-fuel');
  const transSelect = document.getElementById('filter-transmission');
  const priceRange = document.getElementById('filter-price');
  const priceDisplay = document.getElementById('price-display');
  const resultsCount = document.getElementById('results-count');
  const resetBtn = document.getElementById('reset-filters');
  
  if (priceRange && priceDisplay) {
    priceRange.addEventListener('input', (e) => {
      priceDisplay.textContent = `$${parseInt(e.target.value).toLocaleString()}`;
      filterCars();
    });
  }
  
  function filterCars() {
    const keyword = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const brand = brandSelect ? brandSelect.value : '';
    const type = typeSelect ? typeSelect.value : '';
    const fuel = fuelSelect ? fuelSelect.value : '';
    const trans = transSelect ? transSelect.value : '';
    const maxPrice = priceRange ? parseInt(priceRange.value) : 500000;
    
    const filtered = CARS_DATA.filter(car => {
      const matchesKeyword = car.name.toLowerCase().includes(keyword) || 
                             car.brand.toLowerCase().includes(keyword) || 
                             car.model.toLowerCase().includes(keyword);
      const matchesBrand = !brand || car.brand === brand;
      const matchesType = !type || car.type === type;
      const matchesFuel = !fuel || car.fuel === fuel;
      const matchesTrans = !trans || car.transmission === trans;
      const matchesPrice = car.price <= maxPrice;
      
      return matchesKeyword && matchesBrand && matchesType && matchesFuel && matchesTrans && matchesPrice;
    });
    
    if (resultsCount) {
      resultsCount.innerHTML = `Showing <span>${filtered.length}</span> luxury vehicles`;
    }
    
    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <i class="fa-solid fa-car-rear" style="font-size: 3rem; color: var(--accent-gold); margin-bottom: 1rem;"></i>
          <h3>No Vehicles Match Your Search</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">Try relaxing your filters or resetting your search parameters.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(createCarCardHTML).join('');
    }
  }
  
  [searchInput, brandSelect, typeSelect, fuelSelect, transSelect].forEach(el => {
    if (el) el.addEventListener('input', filterCars);
  });
  
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (brandSelect) brandSelect.value = '';
      if (typeSelect) typeSelect.value = '';
      if (fuelSelect) fuelSelect.value = '';
      if (transSelect) transSelect.value = '';
      if (priceRange) {
        priceRange.value = 400000;
        priceDisplay.textContent = '$400,000';
      }
      filterCars();
      showToast('Filters reset to default', 'info');
    });
  }
  
  // Initial run
  filterCars();
}

// 7. CAR DETAILS PAGE LOADER
function initCarDetailsPage() {
  const detailsWrap = document.getElementById('car-details-container');
  if (!detailsWrap) return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const carId = parseInt(urlParams.get('id')) || 1;
  const car = CARS_DATA.find(c => c.id === carId) || CARS_DATA[0];
  
  document.title = `${car.name} - Apex Luxury Motors`;
  
  detailsWrap.innerHTML = `
    <div class="details-grid">
      <div>
        <div class="gallery-main">
          <img id="main-gallery-img" src="${car.images[0]}" alt="${car.name}" />
        </div>
        <div class="gallery-thumbs">
          ${car.images.map((img, idx) => `
            <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="switchGalleryImg('${img}', this)">
              <img src="${img}" alt="Thumbnail ${idx + 1}" />
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="details-info">
        <div class="details-header">
          <span class="car-brand">${car.brand} • ${car.year}</span>
          <h1 style="font-size: 2.2rem; margin-top: 0.25rem;">${car.name}</h1>
          <div class="details-price">$${car.price.toLocaleString()}</div>
        </div>
        
        <p style="color: var(--text-muted); margin-bottom: 2rem;">${car.description}</p>
        
        <div class="specs-quick-grid">
          <div class="quick-spec-card"><p>Horsepower</p><h4>${car.horsepower}</h4></div>
          <div class="quick-spec-card"><p>0 - 60 mph</p><h4>${car.acceleration}</h4></div>
          <div class="quick-spec-card"><p>Top Speed</p><h4>${car.topSpeed}</h4></div>
          <div class="quick-spec-card"><p>Transmission</p><h4>${car.transmission}</h4></div>
        </div>
        
        <div class="details-actions">
          <button class="btn btn-primary btn-lg" onclick="openTestDriveModal('${car.name}')">
            <i class="fa-solid fa-calendar-check"></i> Book Showroom Viewing
          </button>
          <button class="btn btn-secondary btn-lg" onclick="openDealerModal('${car.name}')">
            <i class="fa-solid fa-phone"></i> Contact Sales Advisor
          </button>
        </div>
      </div>
    </div>
    
    <div class="specs-full-section">
      <h2 style="font-size: 1.8rem; margin-bottom: 2rem;">Technical Specifications</h2>
      <div class="specs-table">
        <div class="table-row"><span>Engine</span><span>${car.engine}</span></div>
        <div class="table-row"><span>Horsepower</span><span>${car.horsepower}</span></div>
        <div class="table-row"><span>Torque</span><span>${car.torque}</span></div>
        <div class="table-row"><span>Transmission</span><span>${car.transmission}</span></div>
        <div class="table-row"><span>Fuel Type</span><span>${car.fuel}</span></div>
        <div class="table-row"><span>Mileage</span><span>${car.mileage}</span></div>
        <div class="table-row"><span>Acceleration</span><span>${car.acceleration}</span></div>
        <div class="table-row"><span>Top Speed</span><span>${car.topSpeed}</span></div>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem;">
        <div>
          <h3 style="color: var(--accent-gold); margin-bottom: 1rem;"><i class="fa-solid fa-couch"></i> Interior Amenities</h3>
          <ul style="display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-sub);">
            ${car.features.interior.map(f => `<li><i class="fa-solid fa-check text-gold"></i> ${f}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h3 style="color: var(--accent-gold); margin-bottom: 1rem;"><i class="fa-solid fa-shield-halved"></i> Safety & Assistance</h3>
          <ul style="display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-sub);">
            ${car.features.safety.map(f => `<li><i class="fa-solid fa-check text-gold"></i> ${f}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function switchGalleryImg(src, thumbEl) {
  const main = document.getElementById('main-gallery-img');
  if (main) main.src = src;
  document.querySelectorAll('.thumb-item').forEach(el => el.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

// 8. FINANCING CALCULATOR
function initFinancingCalculator() {
  const priceInput = document.getElementById('calc-price');
  const downInput = document.getElementById('calc-down');
  const termInput = document.getElementById('calc-term');
  const rateInput = document.getElementById('calc-rate');
  const outputMonthly = document.getElementById('calc-output-monthly');
  const outputTotal = document.getElementById('calc-output-total');
  
  if (!priceInput || !outputMonthly) return;
  
  function calculatePayment() {
    const price = parseFloat(priceInput.value) || 0;
    const down = parseFloat(downInput.value) || 0;
    const termMonths = parseInt(termInput.value) || 60;
    const annualRate = parseFloat(rateInput.value) || 4.5;
    
    const principal = Math.max(0, price - down);
    const monthlyRate = (annualRate / 100) / 12;
    
    let monthly = 0;
    if (monthlyRate === 0) {
      monthly = principal / termMonths;
    } else {
      monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    }
    
    const totalLoanCost = monthly * termMonths + down;
    
    outputMonthly.textContent = `$${Math.round(monthly).toLocaleString()}`;
    if (outputTotal) outputTotal.textContent = `$${Math.round(totalLoanCost).toLocaleString()}`;
  }
  
  [priceInput, downInput, termInput, rateInput].forEach(el => {
    if (el) el.addEventListener('input', calculatePayment);
  });
  
  calculatePayment();
}

// 9. TEST DRIVE MODAL ENGINE
function openTestDriveModal(carName = '') {
  let modal = document.getElementById('test-drive-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'test-drive-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-container">
        <button class="modal-close" onclick="closeModal('test-drive-modal')"><i class="fa-solid fa-xmark"></i></button>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;" class="text-gradient">Book Showroom Viewing</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Schedule a private showroom viewing &amp; VIP consultation with our luxury advisor.</p>
        
        <form id="modal-test-drive-form" onsubmit="handleTestDriveSubmit(event)">
          <div class="form-group">
            <label class="form-label">Selected Vehicle</label>
            <select id="modal-car-select" class="form-control">
              ${CARS_DATA.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
            </select>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" required class="form-control" placeholder="John Doe" />
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number</label>
              <input type="tel" required class="form-control" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" required class="form-control" placeholder="john@example.com" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">Preferred Date</label>
              <input type="date" required class="form-control" />
            </div>
            <div class="form-group">
              <label class="form-label">Preferred Time</label>
              <select class="form-control">
                <option>10:00 AM</option>
                <option>01:00 PM</option>
                <option>04:00 PM</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Confirm Reservation</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  if (carName) {
    const select = document.getElementById('modal-car-select');
    if (select) select.value = carName;
  }
  
  modal.classList.add('active');
}

function openDealerModal(carName = '') {
  showToast(`Advisor assigned for ${carName}. Direct Line: +1 (800) 555-APEX`, 'info');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function handleTestDriveSubmit(e) {
  e.preventDefault();
  closeModal('test-drive-modal');
  showToast('Showroom viewing reservation confirmed! Our luxury sales team will contact you shortly.', 'success');
}

// 10. TESTIMONIAL SLIDER
function initTestimonialSlider() {
  const track = document.querySelector('.reviews-track');
  if (!track) return;
  
  const slides = document.querySelectorAll('.review-card');
  let currentIndex = 0;
  
  window.moveSlide = function(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  };
  
  // Auto play slider
  setInterval(() => {
    window.moveSlide(1);
  }, 6000);
}

// 11. COUNTER ANIMATION (STATS)
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (counters.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        let count = 0;
        const speed = target / 50;
        
        const updateCount = () => {
          count += speed;
          if (count < target) {
            entry.target.textContent = Math.ceil(count).toLocaleString();
            setTimeout(updateCount, 30);
          } else {
            entry.target.textContent = target.toLocaleString() + '+';
          }
        };
        updateCount();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(c => observer.observe(c));
}

// 12. 3D WELCOME CARD PERSPECTIVE TILT
function init3DWelcomeTilt() {
  const card = document.getElementById('interactive-3d-welcome');
  if (!card) return;
  
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (-y / rect.height) * 12;
    const rotateY = (x / rect.width) * 12;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  init3DWelcomeTilt();
});

// 13. 3D WELCOME OVERLAY MODAL LOGIC
function closeWelcomeOverlay() {
  const overlay = document.getElementById('welcome-3d-overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

function openWelcomeOverlay() {
  const overlay = document.getElementById('welcome-3d-overlay');
  if (overlay) {
    overlay.classList.add('active');
  }
}
