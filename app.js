const beers = [
  {
    id: 'zest-in-peace', name: 'Zest in Peace', style: 'Kölsch', abv: '5%', temperature: '4–6°C', brewed: '30.08.2026', batch: '',
    soundtrack: 'Jokke & Valentinerne',
    image: 'images/zest-in-peace.jpg', palette: ['#bd653d', '#f3d28b'], symbol: '☼',
    description: 'Zest in Peach er en lys og ren Kölsch brygget med et forsiktig hint av appelsinskall og ferskenpuré. Frukten ligger lavt i miksen og løfter ølet uten å ta over, mens en klassisk tysk malt‑ og humleprofil holder det hele stramt, friskt og lettdrikkelig. Gjæret kjølig med Köln‑gjær for en crisp og ren avslutning. En subtil, leken vri på en tradisjonell Kölsch.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-zest-in-peace/6699680'
  },
  {
    id: 'messe-noir', name: 'Messe Noir', style: 'Schwarzbier', abv: '5.4%', temperature: '4–6°C', brewed: '', batch: '',
    image: 'images/messe-noir.jpg', palette: ['#29242a', '#bc4f48'], symbol: '✦',
    description: 'Store it behind the altar. Before the black mass starts.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-messe-noir/6844617'
  },
  {
    id: 'jester-haze', name: 'Jester Haze', style: 'Pale Ale', abv: '5.5%', temperature: '6–8°C', brewed: '05.09.2026', batch: '',
    soundtrack: `En juicy NEPA kler den melodiske, drivende energien fra The Jester Race perfekt. De tåkete, tropiske tonene i ølet speiler albumets blanding av melodi og råskap – et møte mellom lys og mørke. Når du løfter glasset, passer det med låter som bygger seg opp i lag, akkurat som ølets fruktige aroma og myke munnfølelse.

Musikken gir ølet en ekstra dimensjon: de atmosfæriske gitarlinjene fremhever den saftige fruktigheten, mens de rytmiske partiene gir en kontrast som gjør hver slurk mer intens. Dette er kombinasjonen som får både øl og album til å skinne – melodisk, energisk og fylt av karakter.`,
    image: 'images/jester-haze.jpg', palette: ['#4b6650', '#e0b857'], symbol: '☀',
    description: '',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-jester-haze/6905577'
  },
  {
    id: 'wheat-train', name: 'Wheat Train', style: 'Hefeweizen', abv: '5.6%', temperature: '6–8°C', brewed: '11.07.2026', batch: '',
    image: 'images/wheat-train.jpg', palette: ['#c59545', '#4c3c29'], symbol: '✶',
    description: 'Klassisk tysk hveteøl med myk munnfølelse, tydelige bananestere og lett krydret fruktighet.\nEn lys og leken weissbier i ren stil.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-wheat-train/6699679'
  },
  {
    id: 'the-apple-freak', name: 'The Apple Freak', style: 'Nordisk Eplesider', abv: '6%', temperature: '4–6°C', brewed: '', batch: '',
    soundtrack: 'Avatar passer perfekt til denne sideren, spesielt den teatralske, mørke freakshow‑energien fra de tidlige albumene. Den rå, sirkus‑aktige metalstilen matcher uttrykket til sideren.',
    image: 'images/the-apple-freak.jpg', palette: ['#465a3a', '#d8a245'], symbol: '✦',
    description: 'No kings. No crowns. Just apples, kveik and chaos.\n\nPressed by hand. Serve cold. Play strange.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-the-apple-freak/6844554'
  },
  {
    id: 'black-arts-and-alchemy', name: 'Black Arts & Alchemy', style: 'English Porter', abv: '5.2%', temperature: '8–12°C', brewed: '', batch: '',
    image: 'images/black-arts-and-alchemy.jpg', palette: ['#352320', '#d1a165'], symbol: '◇',
    description: 'A dark, malt‑forward porter brewed with a rich blend of pale, brown, chocolate, and crystal malts. Expect notes of roasted cocoa, caramel, and subtle toffee, balanced by the gentle earthiness of East Kent Goldings hops. Smooth body, moderate bitterness, and a deep mahogany hue (63 EBC) make this a classic yet characterful English porter.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-black-arts-and-alchemy/6522872'
  },
  {
    id: 'forge-of-the-nutons', name: 'Forge of the Nutons', style: 'Belgian Tripel', abv: '10%', temperature: '8–12°C', brewed: '12.08.2026', batch: '',
    image: 'images/forge-of-the-nutons.jpg', palette: ['#343332', '#d19e4b'], symbol: '⚒',
    description: 'Forged in fire. Tempered by time. Raised by yeast. Gather the Nutons. Drink with honor. Belgian Tripel forged in the dark.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-forge-of-the-nutons/6918664'
  },
  {
    id: 'prince-of-darkness', name: 'Prince of Darkness', style: 'Imperial Stout Belgian Style', abv: '16%', temperature: '12–16°C', brewed: '15.11.2025', batch: '128',
    soundtrack: 'Prince of Darkness kler mørk og dramatisk musikk med stor atmosfære, akkurat den typen uttrykk som definerer Ozzy Osbourne. Mr. Crowley passer utmerket med sin episke, mørke stemning. Roligere og mer følelsesladde Ozzy‑låter gir en perfekt kontrast til ølets tunge og mørke karakter.',
    image: 'images/prince-of-darkness.jpg', palette: ['#211e24', '#d6b66c'], symbol: '✦',
    description: `This is not just a beer, it’s a resurrection. A beer in honor of the one and only Prince of Darkness: Ozzy Osbourne. It is a liquid tribute to the godfather of heavy metal, forged in the fires of imperial stout intensity and Belgian spiritual depth.

  Crafted with roasted malts, dark candi syrup, and whisky-soaked oak, it carries the weight of shadow and the spark of madness. Fermented with both abbey and champagne yeast, then aged for several months, it emerges as a dark incantation, powerful, complex, and unapologetically loud.

  Expect waves of chocolate, burnt caramel, and espresso, pierced by haunting esters and a whisper of spice. The oak adds ritualistic depth, while the high ABV delivers a punch worthy of a scream from the stage.`,
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-prince-of-darkness/6637040'
  }
];

const beerList = document.querySelector('#beer-list');
const homeView = document.querySelector('#home-view');
const detailView = document.querySelector('#detail-view');
const toast = document.querySelector('#toast');
const installButton = document.querySelector('#install-button');
const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let installPrompt;
let toastTimeout;

function labelImage(beer) {
  const [background, accent] = beer.palette;
  const title = beer.name.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  const style = beer.style.toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="${background}"/><rect x="13" y="13" width="374" height="474" fill="none" stroke="${accent}" stroke-width="2"/><path d="M30 30h340v440H30z" fill="none" stroke="${accent}" stroke-opacity=".36"/><circle cx="200" cy="202" r="93" fill="none" stroke="${accent}" stroke-width="2"/><circle cx="200" cy="202" r="78" fill="none" stroke="${accent}" stroke-opacity=".48"/><text x="200" y="228" fill="${accent}" font-family="Georgia,serif" font-size="76" text-anchor="middle">${beer.symbol}</text><text x="200" y="64" fill="${accent}" font-family="Arial,sans-serif" font-size="13" font-weight="bold" letter-spacing="4" text-anchor="middle">TNMB · 2026</text><text x="200" y="340" fill="#fffaf0" font-family="Georgia,serif" font-size="${title.length > 13 ? 29 : 36}" text-anchor="middle">${title}</text><path d="M94 361h212" stroke="${accent}"/><text x="200" y="392" fill="${accent}" font-family="Arial,sans-serif" font-size="13" letter-spacing="3" text-anchor="middle">${style}</text><text x="200" y="451" fill="#fffaf0" font-family="Arial,sans-serif" font-size="12" letter-spacing="2" text-anchor="middle">HÅNDBRYGGET · 33 CL</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function labelImageAttributes(beer) {
  if (!beer.image) return `src="${labelImage(beer)}"`;
  return `src="${beer.image}" data-fallback="${labelImage(beer)}"`;
}

function useLabelFallback(event) {
  const image = event.target;
  if (!image.dataset.fallback) return;
  image.src = image.dataset.fallback;
  delete image.dataset.fallback;
}

function renderList() {
  document.querySelector('#beer-count').textContent = `${String(beers.length).padStart(2, '0')} ØL`;
  beerList.innerHTML = beers.map((beer) => `
    <button class="beer-card" type="button" data-beer-id="${beer.id}" aria-label="Vis detaljer for ${beer.name}">
      <img class="label-thumb" ${labelImageAttributes(beer)} alt="Etikett for ${beer.name}">
      <span class="beer-copy">
        <span class="beer-name">${beer.name}</span>
        <span class="beer-style">${beer.style}</span>
        <span class="beer-abv">${beer.abv}</span>
      </span>
      <span class="card-arrow" aria-hidden="true">→</span>
    </button>`).join('');
}

function renderDetail(beer) {
  detailView.innerHTML = `
    <button class="back-button" type="button" id="back-button">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6M9 12h11"/></svg>
      Alle øl
    </button>
    <div class="detail-layout">
      <div class="detail-art-wrap"><img class="detail-art" ${labelImageAttributes(beer)} alt="Etikett for ${beer.name}"></div>
      <article class="detail-copy">
        <h1>${beer.name}</h1>
        <p class="detail-description">${beer.description || 'Ingen beskrivelse oppgitt.'}</p>
        <p class="detail-label">I GLASSET</p>
        <dl class="facts">
          <div class="fact"><dt>Øltype</dt><dd>${beer.style}</dd></div>
          <div class="fact"><dt>Alkohol</dt><dd>${beer.abv}</dd></div>
          <div class="fact"><dt>Servering</dt><dd>${beer.temperature}</dd></div>
          <div class="fact"><dt>Bryggedato</dt><dd>${beer.brewed || 'Ikke oppgitt'}</dd></div>
          <div class="fact"><dt>Batch nr.</dt><dd>${beer.batch || 'Ikke oppgitt'}</dd></div>
          ${beer.soundtrack ? `<div class="fact soundtrack-fact"><dt>Soundtrack</dt><dd>${beer.soundtrack}</dd></div>` : ''}
        </dl>
        <a class="untappd-link" href="${beer.untappd}" target="_blank" rel="noopener noreferrer">
          Finn på Untappd
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6m0-6-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>
        </a>
      </article>
    </div>`;
  homeView.hidden = true;
  detailView.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('#back-button').focus({ preventScroll: true });
}

function showHome() {
  detailView.hidden = true;
  homeView.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message) {
  window.clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimeout = window.setTimeout(() => toast.classList.remove('visible'), 4200);
}

beerList.addEventListener('click', (event) => {
  const card = event.target.closest('[data-beer-id]');
  if (!card) return;
  const beer = beers.find((item) => item.id === card.dataset.beerId);
  if (beer) renderDetail(beer);
});

beerList.addEventListener('error', useLabelFallback, true);
detailView.addEventListener('error', useLabelFallback, true);

detailView.addEventListener('click', (event) => {
  if (event.target.closest('#back-button')) showHome();
});

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener('click', async () => {
  if (!installPrompt) {
    showToast('Åpne Del-menyen i Safari og velg «Legg til på Hjem-skjerm».');
    return;
  }
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  installButton.hidden = true;
});

window.addEventListener('appinstalled', () => {
  installButton.hidden = true;
  showToast('Ølsmaking er installert. Skål!');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#home') return;
  showHome();
});

renderList();

if (isIosDevice && !navigator.standalone) installButton.hidden = false;

if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((error) => console.error('Service worker kunne ikke registreres:', error));
  });
}