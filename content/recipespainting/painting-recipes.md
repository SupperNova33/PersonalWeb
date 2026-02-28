<style>
  .recipe-grid {
    display: grid;
    /* Automatically fits as many 300px cards as possible in a row */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .recipe-card-small {
    background: var(--lightgray);
    border: 1px solid var(--gray);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
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

<div class="recipe-grid">

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