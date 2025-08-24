:root {
  --primary: #263159;
  --secondary: #f5f6fa;
  --accent: #fdcb52;
  --text: #333;
  --muted: #888;
  --card-bg: #fff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', Arial, sans-serif;
  background: var(--secondary);
  color: var(--text);
  line-height: 1.7;
}

.navbar {
  background: var(--primary);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(38,49,89,0.08);
}

.navbar-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.logo {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--accent);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.2s;
  position: relative;
}

.nav-links a::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.2s;
  margin-top: 3px;
}
.nav-links a:hover {
  color: var(--accent);
}
.nav-links a:hover::after {
  width: 100%;
}

.home-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  background: #fff;
  padding: 4rem 2rem 2rem 2rem;
}

.home-content {
  display: flex;
  gap: 3rem;
  max-width: 1100px;
  width: 100%;
  align-items: center;
}

.profile-pic img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid var(--primary);
  box-shadow: 0 2px 8px rgba(38,49,89,0.1);
}

.home-content h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.home-content h2 {
  font-size: 1.3rem;
  color: var(--accent);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.home-content p {
  font-size: 1rem;
  color: var(--text);
}

@media (max-width: 700px) {
  .home-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .profile-pic img {
    width: 110px;
    height: 110px;
  }
}

/* Sections */
section {
  padding: 4rem 2rem 2rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

section h2 {
  font-family: 'Montserrat', sans-serif;
  color: var(--primary);
  font-size: 2rem;
  margin-bottom: 2rem;
  border-left: 6px solid var(--accent);
  padding-left: 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(38,49,89,0.05);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.skill-card h3 {
  color: var(--accent);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.skill-card ul {
  list-style-type: disc;
  padding-left: 1.2rem;
}

.projects-section, .certification-section, .education-section {
  margin-top: 2rem;
}

.projects-placeholder {
  padding: 2rem 0;
  color: var(--muted);
  font-style: italic;
}

.cert-card, .edu-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(38,49,89,0.05);
  margin-bottom: 1.5rem;
}

.cert-card h3, .edu-card h3 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.cert-card p, .edu-card p {
  color: var(--text);
  margin-bottom: 0.5rem;
}

footer {
  background: var(--primary);
  color: #fff;
  text-align: center;
  padding: 1.5rem 0;
  margin-top: 2rem;
  font-size: 1rem;
}

@media (max-width: 600px) {
  .navbar-container, section {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .skills-grid {
    grid-template-columns: 1fr;
  }
  section h2 {
    font-size: 1.3rem;
    padding-left: 0.5rem;
    border-left-width: 4px;
  }
}
