import styles from '../styles/Navbar.module.css'

export default function Navbar({ children }) {
  return (
    <header className={styles.menu}>
      <nav>
        <h1 className={styles.effex}>Held Grijo</h1>
        <ul>
          <li>About me</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Team</li>
          <li>Testmonial</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
