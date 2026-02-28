import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const NavMenu: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`nav-menu ${displayClass ?? ""}`}>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">🏠 The Hub</a></li>
          <li><a href="/miniatures">🎨 Miniatures</a></li>
          <li><a href="/painting-recipes">🧪 Paint Recipes</a></li>
          <li><a href="/ironman">⚔️ OSRS Tracker</a></li>
          <li><a href="/brainstorm">💡 Brainstorm</a></li>
          <li><a href="/CyberSpell_Start">🌌 Cyber Spell Vault</a></li>
        </ul>
      </div>
    )
  }

  NavMenu.css = `
  .nav-menu { 
    margin-top: 2rem; 
  }
  .nav-menu h3 { 
    color: var(--secondary); 
    font-size: 1.2rem; 
    margin-bottom: 1rem; 
    border-bottom: 2px solid var(--tertiary); 
    padding-bottom: 0.5rem; 
  }
  .nav-menu ul { 
    list-style: none; 
    padding: 0; 
  }
  .nav-menu li { 
    margin-bottom: 0.8rem; 
  }
  .nav-menu a { 
    color: var(--dark); 
    text-decoration: none; 
    font-weight: bold; 
    font-size: 1.05rem; 
    transition: color 0.2s; 
  }
  .nav-menu a:hover { 
    color: var(--tertiary); 
  }
  `
  return NavMenu
}) satisfies QuartzComponentConstructor