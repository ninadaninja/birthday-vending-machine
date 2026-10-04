import { useEffect, useState } from "react";

type Product = {
  id: number;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  assetLabel: string;
  imageSrc?: string;
  accent: string;
  kind: "photos" | "portrait" | "letter" | "memory" | "advice" | "wish";
};

const products: Product[] = [
  {
    id: 1,
    number: "01",
    title: "Photos of us #1",
    shortTitle: "Us 1",
    imageSrc: "/birthday-assets/nina-bianca-manila-kid.png",
    description: "Back when we were young and grumpy ❤️",
    assetLabel: "Nina and Bianca in Manila",
    accent: "#ef6d77",
    kind: "photos",
  },
  {
    id: 2,
    number: "02",
    title: "Photos of us #2",
    shortTitle: "Us 2",
    imageSrc: "/birthday-assets/intramuros-with-tatsu.png",
    description:
      "Look who's the cooler one.",
    assetLabel: "Citihomes era",
    accent: "#ef6d77",
    kind: "photos",
  },
  {
    id: 3,
    number: "03",
    title: "Photos of us #3",
    shortTitle: "Us 3",
    imageSrc: "/birthday-assets/nina-bianca.png",
    description:
      "Look who's back in Manila?",
    assetLabel: "Time flies, doesn't it?",
    accent: "#ef6d77",
    kind: "photos",
  },
  {
    id: 4,
    number: "04",
    title: "Photos of birthday girl # 1",
    shortTitle: "Birthday girl 1",
    imageSrc: "/birthday-assets/bianca-tori.png",
    description:
      "Always #1 lakwatsera",
    assetLabel: "Replace with photo of her #1",
    accent: "#f3a65a",
    kind: "portrait",
  },
  {
    id: 5,
    number: "05",
    title: "Photos of birthday girl #2",
    shortTitle: "Birthday girl 2",
    imageSrc: "/birthday-assets/bianca-teamlabs.png",
    description:
      "Holding the future in her hands.",
    assetLabel: "Teamlabs",
    accent: "#f3a65a",
    kind: "portrait",
  },
  {
    id: 6,
    number: "06",
    title: "Photos of birthday girl #3",
    shortTitle: "Birthday girl 3",
    imageSrc: "/birthday-assets/bianca-bali.png",
    description:
      "May you travel the world safely and bring me with you lol",
    assetLabel: "Bali bitch",
    accent: "#f3a65a",
    kind: "portrait",
  },
  {
    id: 7,
    number: "07",
    title: "A birthday letter",
    shortTitle: "Letter",
    description:
      "Happy 27th birthday, Bianca! I'm happy that you get to celebrate it with a dear friend! Hope you stay safe and have fun!",
    assetLabel: "Birthday letter placeholder",
    accent: "#e7c34f",
    kind: "letter",
  },
  {
    id: 8,
    number: "08",
    title: "Life advice",
    shortTitle: "Advice",
    description:
      "# 1 Life is short, make sure to spend it wisely and with work/people that fulfill you. Charot hahaha #2 Do not spend too much time with the wrong guy!",
    assetLabel: "Life advice from Ate",
    accent: "#6b9fba",
    kind: "advice",
  },
  {
    id: 9,
    number: "09",
    title: "A birthday wish",
    shortTitle: "Wish",
    description:
      "I hope that you live a long and fulfilled life that makes YOU happy! Always here to celebrate your wins and mourn your losses - even if from afar. labyu!",
    assetLabel: "Birthday wish placeholder",
    accent: "#9673ad",
    kind: "wish",
  },
  {
    id: 10,
    number: "10",
    title: "Favorite memory #1",
    shortTitle: "Memory 1",
    imageSrc: "/birthday-assets/bianca-dance.jpg",
    description:
      "Naalala mo yung bigla kang napa-dance performance?",
    assetLabel: "Bianca the performer girl",
    accent: "#71ad82",
    kind: "memory",
  },
  {
    id: 11,
    number: "11",
    title: "Favorite memory #2",
    shortTitle: "Memory 2",
    imageSrc: "/birthday-assets/bianca-hachiko.png",
    description:
      "Remember your first day in Japan tapos overwhelmed and overstimulated ka? It was fun though.",
    assetLabel: "Bianca in Shibuya",
    accent: "#71ad82",
    kind: "memory",
  },
  {
    id: 12,
    number: "12",
    title: "Favorite memory #3",
    shortTitle: "Memory 3",
    imageSrc: "/birthday-assets/bianca-rocky.jpg",
    description:
      "Remember when you used to sing with Rocky? Huhu",
    assetLabel: "Bianca and Rocky the singing duo",
    accent: "#71ad82",
    kind: "memory",
  },
];

function Doodle({ kind }: { kind: Product["kind"] }) {
  if (kind === "photos") {
    return (
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <rect x="17" y="16" width="48" height="58" rx="3" fill="#fff9eb" />
        <circle cx="41" cy="36" r="10" fill="#f3a65a" />
        <path d="M25 65c5-14 27-14 33 0" fill="#ef6d77" />
        <rect x="58" y="10" width="45" height="60" rx="3" fill="#fff" />
        <circle cx="80" cy="31" r="9" fill="#71ad82" />
        <path d="M65 61c4-15 26-15 31 0" fill="#6b9fba" />
        <path d="M11 77h98" />
      </svg>
    );
  }

  if (kind === "portrait") {
    return (
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <path d="M37 37c0-21 11-29 24-29s25 9 25 29v17H37z" fill="#573f38" />
        <circle cx="61" cy="38" r="20" fill="#f5c7a9" />
        <path d="M42 31c4-15 31-18 39 0-9-3-15-8-19-13-3 7-9 12-20 13z" fill="#573f38" />
        <path d="M55 41h1M67 41h1M58 50c3 2 6 2 9 0" />
        <path d="M27 82c4-23 64-24 69 0" fill="#ef6d77" />
        <path d="M18 19l3 6 6 2-6 3-3 6-2-6-6-3 6-2z" fill="#e7c34f" />
      </svg>
    );
  }

  if (kind === "letter") {
    return (
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <rect x="23" y="13" width="72" height="64" rx="4" fill="#fff9eb" />
        <path d="M35 29h46M35 39h36M35 49h44" />
        <path d="M84 58c-7-8-18 3 0 14 18-11 7-22 0-14z" fill="#ef6d77" />
        <path d="M17 73l-7 7M102 12l7-7" />
      </svg>
    );
  }

  if (kind === "memory") {
    return (
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <rect x="19" y="13" width="82" height="64" rx="4" fill="#fff9eb" />
        <circle cx="78" cy="31" r="10" fill="#e7c34f" />
        <path d="M25 67l23-25 13 13 9-9 25 21z" fill="#71ad82" />
        <path d="M11 22c7-4 9-8 10-14M107 63c-7 4-9 8-10 14" />
      </svg>
    );
  }

  if (kind === "advice") {
    return (
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <path d="M31 37c0-18 13-29 29-29s29 11 29 29c0 12-6 18-15 24l-3 8H49l-3-8c-9-6-15-12-15-24z" fill="#e7c34f" />
        <path d="M47 75h26M51 82h18M47 35c2-7 7-11 14-11" />
        <path d="M16 32H6M18 15l-7-7M102 32h10M100 15l7-7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <path d="M60 8l7 17 18-7-7 18 18 7-17 8 8 18-19-7-8 18-7-18-19 7 8-18-18-8 18-7-8-18 18 7z" fill="#e7c34f" />
      <path d="M49 43l8 8 17-20" />
      <path d="M13 16l3 6 6 3-6 3-3 6-3-6-6-3 6-3zM103 61l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#ef6d77" />
    </svg>
  );
}

function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (product: Product) => void;
}) {
  return (
    <button
      className="product"
      onClick={() => onSelect(product)}
      aria-label={`Buy ${product.title} for 100 yen`}
      style={{ "--product-accent": product.accent } as React.CSSProperties}
    >
      <span className="product__window">
        {product.imageSrc ? (
          <img src={product.imageSrc} alt={product.assetLabel} />
        ) : (
          <Doodle kind={product.kind} />
        )}
      </span>
      <span className="product__label">
        <span className="product__number">{product.number}</span>
        <span>{product.shortTitle}</span>
      </span>
      <span className="product__price">¥100</span>
    </button>
  );
}

function CoinIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="16" />
      <circle cx="20" cy="20" r="11" />
      <path d="M14 13l6 7 6-7M20 20v9M15 23h10" />
    </svg>
  );
}

export default function App() {
  const [balance, setBalance] = useState(0);
  const [selected, setSelected] = useState<Product | null>(null);
  const [message, setMessage] = useState("Insert a coin and choose a surprise!");
  const [isShaking, setIsShaking] = useState(false);
  const [introStage, setIntroStage] = useState<
    "wrapped" | "opened" | "finished"
  >("wrapped");

  const selectProduct = (product: Product) => {
    if (balance < 100) {
      setMessage("Please insert a coin first.");
      setIsShaking(true);
      window.setTimeout(() => setIsShaking(false), 450);
      return;
    }

    setBalance((current) => current - 100);
    setMessage(`${product.title} is ready!`);
    setSelected(product);
  };

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  if (introStage !== "finished") {
  return (
    <main className="birthday-intro">
      <p className="intro-caption">A little gift from Ate Nina ♡</p>

      {introStage === "wrapped" ? (
        <>
          <button
            type="button"
            className="gift-button"
            onClick={() => setIntroStage("opened")}
            aria-label="Unwrap your birthday gift"
          >
            <span className="gift-emoji" aria-hidden="true">
              🎁
            </span>
          </button>

          <p>Tap your gift to unwrap it!</p>
        </>
      ) : (
        <div className="birthday-reveal">
          <span className="birthday-sparkles" aria-hidden="true">
            ✨ 🎉 ✨
          </span>

          <h1>Happy 27th Birthday, Bianca!</h1>
          <p>There’s a little something waiting for you…</p>

          <button
            type="button"
            className="intro-enter-button"
            onClick={() => setIntroStage("finished")}
          >
            Open your gift ♡
          </button>
        </div>
      )}

      <button
        type="button"
        className="intro-skip"
        onClick={() => setIntroStage("finished")}
      >
        Skip intro
      </button>
    </main>
  );
}

  return (


    <main className="birthday-page">
      <div className="doodle-cloud cloud-one" />
      <div className="doodle-cloud cloud-two" />

      <header className="page-heading">
        <p className="eyebrow">
          A little birthday vending machine from ate nina
        </p>
        <h1>お誕生日おめでとう!</h1>
        <p className="heading-date">
          <span>OCT</span>
          <strong>05</strong>
          <span>JUST FOR YOU</span>
        </p>
      </header>

      <section
        className={`vending-machine ${isShaking ? "is-shaking" : ""}`}
        aria-label="Birthday surprise vending machine"
      >
        <div className="machine-top">
          <span>HAPPY</span>
          <span className="machine-top__flower">✿</span>
          <span>BIRTHDAY</span>
        </div>

        <div className="machine-body">
          <div className="products-panel">
            <div className="products-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={selectProduct}
                />
              ))}
            </div>
          </div>

          <aside className="control-panel">
            <div className="brand-mark" aria-hidden="true">
              <span>10</span>
              <small>05</small>
            </div>

            <div className="balance-display">
              <span>BALANCE</span>
              <strong>¥{balance}</strong>
            </div>

            <div className="coin-slot" aria-hidden="true">
              <span />
              COIN
            </div>

            <button
              className="insert-button"
              onClick={() => {
                setBalance((current) => current + 100);
                setMessage("¥100 added. Pick a surprise!");
              }}
            >
              <CoinIcon />
              <span>
                Insert
                <strong>¥100</strong>
              </span>
            </button>

            <p className="tiny-note">One coin = one surprise</p>
          </aside>
        </div>

        <div className="machine-status" role="status" aria-live="polite">
          <span className="status-light" />
          {message}
        </div>

        <div className="collection-area">
          <div className="collection-slot">
            <span>PUSH</span>
          </div>
          <p>Surprises are dispensed with love</p>
        </div>

        <div className="machine-feet" aria-hidden="true">
          <span />
          <span />
        </div>
      </section>

      <p className="page-note">Pick any treat · There are 12 surprises inside</p>

      {selected && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelected(null);
          }}
        >
          <section
            className="surprise-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="surprise-title"
            style={{ "--product-accent": selected.accent } as React.CSSProperties}
          >
            <button
              className="close-button"
              onClick={() => setSelected(null)}
              aria-label="Close surprise"
              autoFocus
            >
              <span />
              <span />
            </button>
            <p className="surprise-card__kicker">SURPRISE {selected.number}</p>
            <div className="surprise-card__art">
              {selected.imageSrc ? (
                <img src={selected.imageSrc} alt={selected.assetLabel} />
              ) : (
                <Doodle kind={selected.kind} />
              )}
            </div>
            <h2 id="surprise-title">{selected.title}</h2>
            <p className="surprise-card__copy">{selected.description}</p>
            <p className="replace-note">
              Easy to replace in <code>src/App.tsx</code>
            </p>
          </section>
        </div>
      )}
    </main>
  );
}
