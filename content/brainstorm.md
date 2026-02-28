<style>
  .board-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .idea-card {
    background: var(--lightgray);
    border-top: 5px solid var(--tertiary);
    padding: 1.5rem;
    border-radius: 8px;
    color: var(--dark);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  .idea-card h3 {
    margin-top: 0;
    color: var(--secondary);
    border-bottom: 1px solid var(--gray);
    padding-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  
  .idea-card ul {
    padding-left: 1.2rem;
    margin-bottom: 0;
  }
  
  .idea-card p {
    margin-bottom: 0;
  }
  
  .tag {
    display: inline-block;
    background: var(--secondary);
    color: var(--light);
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.8rem;
    margin-bottom: 12px;
    font-weight: bold;
  }
  
  /* Different colors for different categories */
  .tag.event { background: #b8860b; } /* Gold */
  .tag.lore { background: #6a5acd; }  /* Purple */
  .tag.work { background: #4CAF50; }  /* Green */
</style>

# 💡 Brainstorming Board
A scratchpad for ongoing projects, event logistics, and running thoughts.

<div class="board-container">

  <div class="idea-card">
    <span class="tag event">Warhammer 40k</span>
    <h3>Contest of Champions</h3>
    <ul>
      <li>Finalize the rules packet for the tournament.</li>
      <li>Confirm table terrain setups for the March 7th RTT.</li>
      <li>Draft the promotional flyer and post it.</li>
    </ul>
  </div>

  <div class="idea-card">
    <span class="tag lore">Cyber Spell</span>
    <h3>Haven't Dynamics</h3>
    <p>Need to outline how The Aegis Corporation interacts with The Scrap Barons of Rustholm inside the frontier city of Haven. Are they fighting over territory or actively trading?</p>
  </div>

  <div class="idea-card">
    <span class="tag work">Minecraft</span>
    <h3>Lesson Plans</h3>
    <ul>
      <li>Draft the redstone logic gate lesson.</li>
      <li>Create a safe world template for the students to join.</li>
      <li>Test the server permissions.</li>
    </ul>
  </div>

  <div class="idea-card">
    <span class="tag">Misc Idea</span>
    <h3>Website Upgrades</h3>
    <p>Look into adding an RSS feed to the site later so people can subscribe to the Cyber Spell updates.</p>
  </div>

</div>