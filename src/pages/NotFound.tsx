import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Страница не найдена | YES Studio</title>
      </Helmet>

      <section className="section" style={{minHeight: '60vh', display: 'flex', alignItems: 'center'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <p style={{fontFamily: 'var(--font-heading)', fontSize: 'clamp(6rem, 15vw, 12rem)', color: 'var(--accent)', opacity: 0.15, lineHeight: 1}}>404</p>
          <h1 className="h2" style={{marginTop: '-2rem'}}>Страница не{'\u00A0'}найдена</h1>
          <p className="section-lead" style={{marginTop: '16px'}}>
            Такой страницы не{'\u00A0'}существует. Возможно, она была перемещена.
          </p>
          <div style={{marginTop: '32px'}}>
            <Link to="/" className="btn btn--accent">На{'\u00A0'}главную</Link>
          </div>
        </div>
      </section>
    </>
  );
}
