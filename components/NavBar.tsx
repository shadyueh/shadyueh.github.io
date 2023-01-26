import styles from '../styles/Navbar.module.css'

export default function NavBar() {
  return (
    <header className={styles.menu}>
      <nav>
        <h1 className={styles.fx1}>Held Grijo</h1>
        <ul>
          <li>About me</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Team</li>
          <li>Testimonial</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
