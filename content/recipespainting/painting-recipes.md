<style>
  /* --- Search Bar Styling --- */
  .search-container {
    margin: 2rem 0;
  }

  #recipe-search {
    width: 100%;
    padding: 12px 20px;
    font-size: 1rem;
    background: var(--lightgray);
    color: var(--dark);
    border: 1px solid var(--gray);
    border-radius: 8px;
    box-sizing: border-box;
    transition: border-color 0.2s;
  }

  #recipe-search:focus {
    outline: none;
    border-color: var(--secondary);
    box-shadow: 0 0 8px rgba(106, 90, 205, 0.3); /* Subtle purple glow */
  }

  /* --- Grid and Card Styling --- */
  .recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .recipe-card-small {
    background: var(--lightgray);
    border: 1px solid var(--gray);
    border-radius: 12px;
    overflow: hidden;
    display: flex; /* Kept as flex to push content correctly */
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
  }

  .recipe-card-small:hover {
    transform: translateY(-5px);
    border-color: var(--secondary);
  }

  .recipe-card-small img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 3px solid var(--secondary);
  }

  .recipe-content {
    padding: 1.5rem;
    color: var(--dark);
  }

  .recipe-content h3 {
    margin-top: 0;
    color: var(--tertiary);
    font-size: 1.3rem;
    border-bottom: 1px solid var(--gray);
    padding-bottom: 0.5rem;
  }

  .recipe-content ul {
    padding-left: 1.2rem;
    margin-bottom: 0;
    font-size: 0.95rem;
  }
</style>

# 🧪 Painting Recipe Library
A complete grid of all my color schemes, wash techniques, and basing recipes.

<div class="search-container">
  <input type="text" id="recipe-search" placeholder="Search recipes (e.g., Grimdark, Purple, Nuln Oil)...">
</div>

<div class="recipe-grid" id="recipe-grid">

  <div class="recipe-card-small">
    <img src="https://via.placeholder.com/400x200/333333/888888?text=Grimdark+Armor" alt="Grimdark Armor">
    <div class="recipe-content">
      <h3>Grimdark Armor</h3>
      <ul>
        <li><strong>Prime:</strong> Chaos Black</li>
        <li><strong>Base:</strong> Leadbelcher</li>
        <li><strong>Wash:</strong> Nuln Oil</li>
        <li><strong>Rust:</strong> Skrag Brown</li>
      </ul>
    </div>
  </div>

  <div class="recipe-card-small">
    <img src="https://via.placeholder.com/400x200/333333/888888?text=Sorcery+Robes" alt="Sorcery Robes">
    <div class="recipe-content">
      <h3>Sorcery Gothic Robes</h3>
      <ul>
        <li><strong>Prime:</strong> Wraithbone</li>
        <li><strong>Base:</strong> Shyish Purple (Contrast)</li>
        <li><strong>Drybrush:</strong> Genestealer Purple</li>
        <li><strong>Highlight:</strong> Kakophoni Purple</li>
      </ul>
    </div>
  </div>

  <div class="recipe-card-small">
    <img src="https://via.placeholder.com/400x200/333333/888888?text=Martian+Basing" alt="Martian Basing">
    <div class="recipe-content">
      <h3>Martian Ironearth Base</h3>
      <ul>
        <li><strong>Texture:</strong> Martian Ironcrust</li>
        <li><strong>Wash:</strong> Reikland Fleshshade</li>
        <li><strong>Drybrush:</strong> Kindleflame</li>
        <li><strong>Rim:</strong> Abaddon Black</li>
      </ul>
    </div>
  </div>

</div>

<script>
function initRecipeSearch() {
  const searchInput = document.getElementById('recipe-search');
  if (!searchInput) return; // Stop if we aren't on the recipe page

  // Prevent double-loading the script
  if (searchInput.dataset.initialized) return;
  searchInput.dataset.initialized = "true";

  searchInput.addEventListener('keyup', function(e) {
    // Get the typed text and make it lowercase for easy matching
    const searchTerm = e.target.value.toLowerCase();
    
    // Grab every recipe card on the page
    const recipeCards = document.querySelectorAll('.recipe-card-small');

    recipeCards.forEach(card => {
      // Read all the text inside the card (title, paints, etc.)
      const cardText = card.textContent.toLowerCase();
      
      // If the card's text contains the search term, show it. Otherwise, hide it.
      if (cardText.includes(searchTerm)) {
        card.style.display = 'flex'; 
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// Run the script on hard refresh and on Quartz navigation
initRecipeSearch();
document.addEventListener("nav", initRecipeSearch);
</script>