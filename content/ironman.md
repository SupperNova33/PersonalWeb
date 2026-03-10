<style>
  .osrs-container {
    background-color: var(--lightgray);
    padding: 2rem;
    border-radius: 8px;
    color: var(--dark);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  details {
    background-color: var(--light);
    padding: 10px;
    margin-bottom: 10px;
    border-left: 4px solid #b8860b; 
    border-radius: 4px;
    border: 1px solid var(--gray);
  }
  
  summary {
    font-weight: bold;
    cursor: pointer;
    font-size: 1.1rem;
    color: #b8860b;
  }
  
  ul.goal-list {
    list-style-type: none;
    padding-left: 10px;
  }
  
  ul.goal-list li {
    margin: 8px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input[type="checkbox"] {
    transform: scale(1.2);
    cursor: pointer;
  }

  .add-goal-box {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--gray);
  }

  #new-goal-input {
    padding: 8px;
    width: 70%;
    border-radius: 4px;
    border: 1px solid var(--gray);
    background: var(--light);
    color: var(--dark);
  }

  #add-goal-btn {
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  #add-goal-btn:hover {
    background-color: #45a049;
  }

  .delete-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0 5px;
  }
</style>

<div class="osrs-container">
  <h1 style="margin-top: 0; color: var(--secondary);">⚔️ Iron Man Progress Tracker</h1>
  <p>Track permanent account milestones and add rolling daily/weekly goals below.</p>

  <details>
    <summary>Personal Goal Check List</summary>
    <ul class="goal-list">
      <li><label><input type="checkbox" class="saveable-check" value="barrows-telly"> Get 82 Magic for Barrows Telly</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="coin-for-spells"> Get money for Magic</label></li>
    </ul>
  </details>

  <details open>
    <summary>Early Game Check Lists upgrades</summary>
    <ul class="goal-list">
      <li><label><input type="checkbox" class="saveable-check" value="Berserker-ringi"> Berserker ring (i) from Dagannoth Rex</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="Imbuedgod-cape"> Imbued god cape from Mage Arena II</label></li>
    </ul>
  </details>

  <details>
    <summary>MidGame Check List</summary>
    <ul class="goal-list">
      <li><label><input type="checkbox" class="saveable-check" value="barrows-gear"> Farm Barrows Gear</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="moons-gear"> Farm Moons of Peril Gear</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="slayer-wip"> Get slayer level 82 for whip</label></li>
    </ul>
  </details>

  <details>
    <summary>Personal Goals Check List</summary>
    <ul class="goal-list">
      <li><label><input type="checkbox" class="saveable-check" value="StormPet"> Get the Temporuss Pet</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="DragonHarpoon"> Dragon Harpoon for FISH</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="DragonFirePotion"> Unlock Anti Dragon Fire Potion</label></li>
    </ul>
  </details>

  <div class="add-goal-box">
    <h3 style="color: #b8860b; margin-top: 0;">🎯 Custom & Rolling Goals</h3>
    <input type="text" id="new-goal-input" placeholder="E.g., Farm 500 giant seaweed..." onkeypress="if(event.key === 'Enter') window.osrsTracker.add()">
    <button id="add-goal-btn" onclick="window.osrsTracker.add()">Add Goal</button>
    
  <ul class="goal-list" id="custom-goals-list"></ul>
  </div>

</div>

<img src="dummy-image-trigger" style="display:none;" onerror="
  window.osrsTracker = {
    render: function() {
      const list = document.getElementById('custom-goals-list');
      if(!list) return;
      const goals = JSON.parse(localStorage.getItem('osrs-custom') || '[]');
      let html = '';
      goals.forEach((g, i) => {
        const checked = g.done ? 'checked' : '';
        html += `<li>
          <label><input type='checkbox' onchange='window.osrsTracker.toggle(${i}, this.checked)' ${checked}> ${g.text}</label>
          <button class='delete-btn' onclick='window.osrsTracker.delete(${i})'>❌</button>
        </li>`;
      });
      list.innerHTML = html;
    },
    add: function() {
      const input = document.getElementById('new-goal-input');
      const text = input.value.trim();
      if(text) {
        const goals = JSON.parse(localStorage.getItem('osrs-custom') || '[]');
        goals.push({text: text, done: false});
        localStorage.setItem('osrs-custom', JSON.stringify(goals));
        input.value = '';
        window.osrsTracker.render();
      }
    },
    toggle: function(i, checked) {
      const goals = JSON.parse(localStorage.getItem('osrs-custom') || '[]');
      if(goals[i]) {
        goals[i].done = checked;
        localStorage.setItem('osrs-custom', JSON.stringify(goals));
      }
    },
    delete: function(i) {
      const goals = JSON.parse(localStorage.getItem('osrs-custom') || '[]');
      goals.splice(i, 1);
      localStorage.setItem('osrs-custom', JSON.stringify(goals));
      window.osrsTracker.render();
    },
    init: function() {
      document.querySelectorAll('.saveable-check').forEach(cb => {
        if(localStorage.getItem('static-' + cb.value) === 'true') {
          cb.checked = true;
        }
        cb.onchange = (e) => {
          localStorage.setItem('static-' + e.target.value, e.target.checked);
        };
      });
      window.osrsTracker.render();
    }
  };
  window.osrsTracker.init();
">