import './Footer.css';

interface FooterProps {
  text?: string;
}

export default function Footer({ text = "© 2025 Rushal. All rights reserved." }: FooterProps) {
  return (
    <footer className="footer">
      {text}
    </footer>
  );
}
