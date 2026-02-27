<style>
  /* Styling for the lists and inputs */
  .osrs-container {
    background-color: #1e1e1e;
    padding: 2rem;
    border-radius: 8px;
    color: #f5f5f5;
  }
  
  details {
    background-color: #2a2a2a;
    padding: 10px;
    margin-bottom: 10px;
    border-left: 4px solid #b8860b; /* RuneScape gold color */
    border-radius: 4px;
  }
  
  summary {
    font-weight: bold;
    cursor: pointer;
    font-size: 1.1rem;
    color: #ffd700;
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

  /* Styling for the dynamic Add Goal section */
  .add-goal-box {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #444;
  }

  #new-goal-input {
    padding: 8px;
    width: 70%;
    border-radius: 4px;
    border: 1px solid #555;
    background: #333;
    color: white;
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
    color: #ff4c4c;
    cursor: pointer;
    font-size: 0.9rem;
  }
</style>

<div class="osrs-container">
  <h1>⚔️ Iron Man Progress Tracker</h1>
  <p>Track permanent account milestones and add rolling daily/weekly goals below.</p>

  <details open>
    <summary>Personal Goal Check List</summary>
    <ul class="goal-list">
      <li><label><input type="checkbox" class="saveable-check" value="barrows-telly"> Get 82 Magic for Barrows Telly</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="coin-for-spells">Get money for Magic</label></li>
    </ul>
  </details>

  <details>
    <summary>Early Game Check Lists upgrades</summary>
    <ul class="goal-list">
      <li><label><input type="checkbox" class="saveable-check" value="Berserker-ringi">Berserker ring (i) from Dagannoth Rex</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="Imbuedgod-cape ">Imbued god cape from Mage Arena II</label></li>
    </ul>
  </details>

  <details open>
    <summary>MidGame Check List</summary>
    <ul class="goal-list">
      <li><label><input type="checkbox" class="saveable-check" value="barrows-gear">Farm Barrows Gear</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="moons-gear">Farm Moons of Parel Gear</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="slayer-wip"> Get slayer level 82 for whip</label></li>
    </ul>
  </details>

  <div class="add-goal-box">
    <h3 style="color: #ffd700; margin-top: 0;">🎯 Custom & Rolling Goals</h3>
    <input type="text" id="new-goal-input" placeholder="E.g., Farm 500 giant seaweed...">
    <button id="add-goal-btn">Add Goal</button>
    
  <ul class="goal-list" id="custom-goals-list">
      </ul>
  </div>

</div>

<script>
// We changed "DOMContentLoaded" to "nav" to work with Quartz's fast-loading
document.addEventListener("nav", () => {
  
  // 1. Make sure we are actually on the Iron Man page before running
  const addBtn = document.getElementById('add-goal-btn');
  if (!addBtn) return; 

  // --- HANDLE STATIC PERMANENT GOALS ---
  const staticChecks = document.querySelectorAll('.saveable-check');
  staticChecks.forEach(box => {
    const savedState = localStorage.getItem('osrs-static-' + box.value);
    if (savedState === 'true') {
      box.checked = true;
    }
    
    box.addEventListener('change', (e) => {
      localStorage.setItem('osrs-static-' + e.target.value, e.target.checked);
    });
  });

  // --- HANDLE DYNAMIC CUSTOM GOALS ---
  const customList = document.getElementById('custom-goals-list');
  const input = document.getElementById('new-goal-input');

  let customGoalsArray = JSON.parse(localStorage.getItem('osrs-custom-goals')) || [];
  
  function renderCustomGoals() {
    customList.innerHTML = ''; 
    
    customGoalsArray.forEach((goal, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <label>
          <input type="checkbox" class="custom-check" data-index="${index}" ${goal.completed ? 'checked' : ''}> 
          ${goal.text}
        </label>
        <button class="delete-btn" data-index="${index}" title="Remove Goal">❌</button>
      `;
      customList.appendChild(li);
    });

    document.querySelectorAll('.custom-check').forEach(box => {
      box.addEventListener('change', (e) => {
        const idx = e.target.getAttribute('data-index');
        customGoalsArray[idx].completed = e.target.checked;
        localStorage.setItem('osrs-custom-goals', JSON.stringify(customGoalsArray));
      });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        customGoalsArray.splice(idx, 1); 
        localStorage.setItem('osrs-custom-goals', JSON.stringify(customGoalsArray)); 
        renderCustomGoals(); 
      });
    });
  }

  renderCustomGoals();

  addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text !== "") {
      customGoalsArray.push({ text: text, completed: false });
      localStorage.setItem('osrs-custom-goals', JSON.stringify(customGoalsArray));
      input.value = ''; 
      renderCustomGoals(); 
    }
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });

});
</script>