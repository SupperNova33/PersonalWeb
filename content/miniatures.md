<style>
  /* --- Global Section Spacing --- */
  .mini-section {
    margin-bottom: 3.5rem;
  }
  
  .mini-section h2 {
    color: var(--secondary) !important;
    border-bottom: 2px solid var(--tertiary);
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }

  /* --- 1. Portfolio Gallery --- */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .photo-card {
    background: var(--lightgray);
    border: 1px solid var(--gray);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
  }

  .photo-card:hover {
    transform: scale(1.03);
    border-color: var(--secondary);
  }

  .photo-card img {
    width: 100%;
    height: 220px;
    object-fit: cover; /* Keeps images from stretching weirdly */
    border-bottom: 1px solid var(--gray);
  }

  .photo-caption {
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    color: var(--dark);
  }

  /* --- 2. Painting Recipes --- */
  .recipe-card {
    display: flex;
    flex-wrap: wrap;
    background: var(--lightgray);
    border-left: 5px solid var(--secondary);
    border-radius: 8px;
    margin-bottom: 1.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .recipe-image {
    flex: 1 1 200px;
    max-width: 300px;
  }

  .recipe-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .recipe-details {
    flex: 2 1 300px;
    padding: 1.5rem;
    color: var(--dark);
  }

  .recipe-details h3 {
    margin-top: 0;
    color: var(--tertiary);
  }

  .recipe-details ul {
    margin-bottom: 0;
    padding-left: 1.2rem;
  }

  /* --- 3. Project Backlog & Progress Bars --- */
  .backlog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .army-box {
    background: var(--light);
    border: 1px solid var(--gray);
    padding: 1.5rem;
    border-radius: 12px;
  }

  .army-box h3 {
    margin-top: 0;
    color: var(--dark);
  }

  /* HTML5 Progress Bar Styling */
  progress {
    width: 100%;
    height: 20px;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  
  progress::-webkit-progress-bar {
    background-color: var(--lightgray);
    border-radius: 10px;
  }
  
  progress::-webkit-progress-value {
    background-color: #4CAF50; /* Green for completion */
    border-radius: 10px;
  }

  .army-box ul {
    list-style-type: none;
    padding-left: 0;
  }

  .army-box li {
    margin-bottom: 0.5rem;
    color: var(--dark);
  }

  .army-box input[type="checkbox"] {
    margin-right: 10px;
    transform: scale(1.2);
  }
</style>

# 🎨 Miniature Painting Studio
Welcome to the workbench. This is where I track my army rosters, save my paint recipes, and showcase finished pieces.

<div class="mini-section">
  <h2>🏆 Portfolio & Showcase</h2>
  <div class="photo-grid">
    <div class="photo-card">
      <img src="https://via.placeholder.com/400x300/333333/888888?text=Upload+Photo" alt="Competition Piece">
      <div class="photo-caption">NMM Armor Competition Entry</div>
    </div>
    <div class="photo-card">
      <img src="https://via.placeholder.com/400x300/333333/888888?text=Upload+Photo" alt="Army HQ">
      <div class="photo-caption">Warhammer 40k Warlord</div>
    </div>
    <div class="photo-card">
      <img src="https://via.placeholder.com/400x300/333333/888888?text=Upload+Photo" alt="Diorama">
      <div class="photo-caption">Custom Terrain Diorama</div>
    </div>
  </div>
</div>

<div class="mini-section">
  <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 2px solid var(--tertiary); margin-bottom: 1.5rem; padding-bottom: 0.5rem;">
    <h2 style="border: none; margin-bottom: 0; padding-bottom: 0;">🧪 Featured Recipe</h2>
    <a href="./recipespainting/painting-recipes" style="color: var(--secondary); font-weight: bold; text-decoration: none;">View All Recipes &rarr;</a>
  </div>
  
  <div class="recipe-card">
    <div class="recipe-image">
      <img src="https://via.placeholder.com/300x400/333333/888888?text=Armor+Test" alt="Grimdark Armor">
    </div>
    <div class="recipe-details">
      <h3>Grimdark Weathered Armor</h3>
      <p>A fast, high-contrast recipe used for the core infantry units.</p>
      <ul>
        <li><strong>Prime:</strong> Chaos Black spray</li>
        <li><strong>Basecoat:</strong> Leadbelcher (Airbrush)</li>
        <li><strong>Wash:</strong> Nuln Oil over entire model</li>
        <li><strong>Sponge:</strong> Rhinox Hide concentrated on edges</li>
        <li><strong>Rust:</strong> Skrag Brown thinned in recesses</li>
      </ul>
    </div>
  </div>

</div>

<div class="mini-section">
  <h2>📋 Project Backlog</h2>
  <div class="backlog-grid">
    
  <div class="army-box">
      <h3>Warhammer 40k - Admech Lot</h3>
      <progress value="4" max="11"></progress>
      <ul>
        <li><input type="checkbox" checked> <del>Skitarii Rangers x10</del></li>
        <li><input type="checkbox" checked> <del>Kastelan Robots x2</del></li>
        <li><input type="checkbox" checked> <del>Skitarii Vanguard x10 (On Sprew)<del></li>
        <li><input type="checkbox">Skitarii Vanguard x10 (In Box)</li>
        <li><input type="checkbox" checked> <del>Kataphron Breachers x3 #1 (Primed)<del></li>
        <li><input type="checkbox">Kataphron Breachers x3 #2 (On Sprew)</li>
        <li><input type="checkbox">Kataphron Breachers x3 #3 (On Sprew)</li>
        <li><input type="checkbox">Skitarii Marshall (HQ on Sprew)</li>
        <li><input type="checkbox">manipulus (HQ) (In Box)</li>
        <li><input type="checkbox">manipulus (HQ) Alex Gift</li>
        <li><input type="checkbox">skorpius disintegrator (In Box)</li>
      </ul>
    </div>

  <div class="army-box">
      <h3>40k Rengade Raiders Box</h3>
      <progress value="0" max="6"></progress>
      <ul>
        <li><input type="checkbox"> Test Model / Color Scheme</li>
        <li><input type="checkbox"> HQ Box</li>
        <li><input type="checkbox"> New Rever Squad x5 #1</li>
        <li><input type="checkbox"> New Rever Squad x5 #2</li>
        <li><input type="checkbox"> Rever Captin</li>
        <li><input type="checkbox"> CSM New Legionars</li>
      </ul>
    </div>

  <div class="army-box">
      <h3>Gene Stealer Cult</h3>
      <progress value="0" max="1"></progress>
      <ul>
        <li><input type="checkbox"> Review Model Count/Need Paint</li>
      </ul>
    </div>

  <div class="army-box">
      <h3>Murder Clowns</h3>
      <progress value="0" max="1"></progress>
      <ul>
        <li><input type="checkbox"> Review Model Count/Need Paint</li>
      </ul>
    </div>

  </div>
</div>