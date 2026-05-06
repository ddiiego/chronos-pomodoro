import styels from './styles.module.css'

export function Footer() {
  return (
    <footer className={styels.footer}>
      <a href="">Endenda como funiona a técnica  pomodoro</a>
      <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
    </footer>
  );
}