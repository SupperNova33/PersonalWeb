<style>
  .gallery-wrapper {
    background-color: #2b2b2b;
    color: #f5f5f5;
    padding: 1rem;
    border-radius: 8px;
  }

  .gallery-section {
    margin-bottom: 3rem;
  }

  .gallery-section h2 {
    color: #a89f91;
    border-bottom: 2px solid #6a5acd;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  /* Responsive Image Grid */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .photo-card {
    background: #1e1e1e;
    border: 1px solid #444;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s;
  }

  .photo-card:hover {
    transform: scale(1.03);
    border-color: #6a5acd;
  }

  /* Forces images to fit uniformly without stretching */
  .photo-card img {
    width: 100%;
    height: 200px;
    object-fit: cover; 
    border-bottom: 1px solid #444;
  }

  .photo-caption {
    padding: 0.8rem;
    font-size: 0.9rem;
    color: #cccccc;
    text-align: center;
  }
</style>

<div class="gallery-wrapper">
  <h1>🎨 Miniature Showcase</h1>
  <p>A visual log of painting projects, army progress, and competition pieces.</p>

  <div class="gallery-section">
    <h2>🏆 Painting Competition Entries</h2>
    <p>Models currently submitted for judging (Return deadline: Feb 28th).</p>
    <div class="photo-grid">
      <div class="photo-card">
        <img src="https://via.placeholder.com/400x300/333333/888888?text=Competition+Model+1" alt="Competition Entry 1">
        <div class="photo-caption">NMM Armor Test - First Place Contender</div>
      </div>
    </div>
  </div>

  <div class="gallery-section">
    <h2>🎲 Warhammer 40,000 Armies</h2>
    <p>Rosters prepped for the Contest of Champions and the March 7th RTT.</p>
    <div class="photo-grid">
      <div class="photo-card">
        <img src="https://via.placeholder.com/400x300/333333/888888?text=Warlord" alt="HQ Unit">
        <div class="photo-caption">Army HQ - Finished basing</div>
      </div>
      <div class="photo-card">
        <img src="https://via.placeholder.com/400x300/333333/888888?text=Troops" alt="Troop Choice">
        <div class="photo-caption">Core Infantry Squad</div>
      </div>
      <div class="photo-card">
        <img src="https://via.placeholder.com/400x300/333333/888888?text=Vehicle" alt="Heavy Support">
        <div class="photo-caption">Heavy Support - Weathering complete</div>
      </div>
    </div>
  </div>

</div>