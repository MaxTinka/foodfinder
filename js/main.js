// Load vendors for homepage and vendors page
async function loadVendors() {
  try {
    const response = await fetch('data/vendors.json');
    const vendors = await response.json();

    const featuredContainer = document.getElementById('featured-vendors');
    const allContainer = document.getElementById('all-vendors');

    vendors.forEach(vendor => {
      const card = document.createElement('div');
      card.className = 'vendor-card';
      card.innerHTML = `
        <img src="${vendor.image}" alt="${vendor.name}">
        <div class="content">
          <h3>${vendor.name}</h3>
          <p>Cuisine: ${vendor.cuisine}</p>
          <p>Location: ${vendor.location}</p>
          <p>Rating: ${vendor.rating} ⭐</p>
        </div>
      `;

      if (featuredContainer) featuredContainer.appendChild(card.cloneNode(true));
      if (allContainer) allContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading vendors:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadVendors);
