import { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2, ClipboardList, ImagePlus, Mail, Menu, ShieldCheck, Sparkles, UsersRound, X } from "lucide-react";

/**
 * Direção visual: Missão Contemporânea — sidebar azul petróleo, marfim suave,
 * acento dourado queimado, hierarquia assimétrica e microcopy acolhedora.
 * Esta página é a camada de orientação; o preenchimento acontece no Tally.
 */

const tallyUrl = "https://tally.so/embed/0QqOxQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&hideBranding=1";

const steps = [
  { number: "01", title: "Identificação", icon: ClipboardList },
  { number: "02", title: "Imagem de cadastro", icon: ImagePlus },
  { number: "03", title: "Contato", icon: Mail },
  { number: "04", title: "Serviço", icon: UsersRound },
];

function AppMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span className="brand-mark__arc brand-mark__arc--one" />
      <span className="brand-mark__arc brand-mark__arc--two" />
      <span className="brand-mark__dot" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "Tally.FormSubmitted") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <main className="app-shell">
      <button className="mobile-menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside className={`mission-sidebar ${menuOpen ? "mission-sidebar--open" : ""}`}>
        <div className="sidebar-atmosphere" />
        <div className="sidebar-content">
          <header className="brand-lockup">
            <AppMark />
            <div>
              <span className="eyebrow eyebrow--light">Missão Guarulhos · Shalom</span>
              <strong className="brand-wordmark">cadastro de proximidade</strong>
            </div>
          </header>

          <section className="sidebar-intro">
            <span className="eyebrow eyebrow--gold">Cadastro missionário</span>
            <h1>Conhecer para<br /><em>acompanhar</em><br />com proximidade</h1>
            <p>Um espaço para conhecer melhor os irmãos da missão, favorecer os acompanhamentos, os discernimentos e o engajamento comunitário.</p>
          </section>

          <nav className="step-list" aria-label="Etapas do cadastro">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className={`step-card ${index === 0 ? "step-card--active" : ""}`} key={step.number}>
                  <div className="step-card__topline">
                    <span>Etapa {step.number}</span>
                    {index === 0 && <CheckCircle2 size={15} />}
                  </div>
                  <div className="step-card__body">
                    <Icon size={17} strokeWidth={1.8} />
                    <strong>{step.title}</strong>
                  </div>
                </div>
              );
            })}
          </nav>

          <footer className="sidebar-footer">
            <ShieldCheck size={16} />
            <span>Uso interno da missão<br /><b>CAP · Proximidade</b></span>
          </footer>
        </div>
      </aside>

      <section className="workspace">
        <div className="workspace-inner">
          <header className="page-header">
            <div>
              <span className="eyebrow">cadastro de proximidade</span>
              <h2>Um passo de cada vez <span>·</span> Missão Guarulhos</h2>
            </div>
            <div className="online-status"><span className="online-dot" /> Online</div>
          </header>

          <div className="summary-grid" aria-label="Resumo do questionário">
            <article className="summary-card">
              <span className="summary-card__label">Objetivo</span>
              <strong>Proximidade</strong>
              <p>Auxiliar no discernimento e engajamento da missão.</p>
            </article>
            <article className="summary-card">
              <span className="summary-card__label">Destino</span>
              <strong>Base de dados da missão</strong>
              <p>As respostas serão registradas automaticamente.</p>
            </article>
            <article className="summary-card">
              <span className="summary-card__label">Envio</span>
              <strong>Foto inclusa</strong>
              <p>O formulário aceita upload de imagem.</p>
            </article>
          </div>

          <section className="form-panel" aria-labelledby="form-title">
            <div className="form-panel__heading">
              <div>
                <span className="eyebrow">Preenchimento</span>
                <h3 id="form-title">Vamos começar pelo encontro</h3>
                <p>Cada resposta aproxima a missão das pessoas. Preencha com calma; o próximo passo estará indicado.</p>
              </div>
              <div className="heading-spark"><Sparkles size={20} /></div>
            </div>
            <div className="form-divider" />
            <div className="form-guidance"><span className="form-guidance__line" /><span>Identificação · etapa 01 de 04</span><span className="form-guidance__line" /></div>
            <div className="tally-frame-wrap">
              <iframe title="Formulário de Cadastro de Proximidade Missionária" src={tallyUrl} loading="lazy" allow="camera; microphone; geolocation" />
            </div>
          </section>

          <footer className="workspace-footer">
            <p><ShieldCheck size={15} /> Seus dados ficam protegidos e serão utilizados exclusivamente pela missão.</p>
            <a href={tallyUrl} target="_blank" rel="noreferrer">Abrir formulário em nova aba <ArrowUpRight size={14} /></a>
          </footer>
        </div>
      </section>
    </main>
  );
}
