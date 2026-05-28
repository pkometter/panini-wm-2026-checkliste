/* =========================
   Team-Daten
   ========================= */

const teams = [
  { group: "A", code: "MEX", name: "Mexico", primaryColor: "#006847", secondaryColor: "#ce1126" },
  { group: "A", code: "RSA", name: "South Africa", primaryColor: "#007a4d", secondaryColor: "#ffb612" },
  { group: "A", code: "KOR", name: "Korea Republic", primaryColor: "#c60c30", secondaryColor: "#003478" },
  { group: "A", code: "CZE", name: "Czechia", primaryColor: "#d7141a", secondaryColor: "#11457e" },

  { group: "B", code: "CAN", name: "Canada", primaryColor: "#ff0000", secondaryColor: "#ffffff" },
  { group: "B", code: "BIH", name: "Bosnia-Herzegovina", primaryColor: "#002395", secondaryColor: "#fecb00" },
  { group: "B", code: "QAT", name: "Qatar", primaryColor: "#8a1538", secondaryColor: "#ffffff" },
  { group: "B", code: "SUI", name: "Switzerland", primaryColor: "#d52b1e", secondaryColor: "#ffffff" },

  { group: "C", code: "BRA", name: "Brazil", primaryColor: "#009b3a", secondaryColor: "#ffdf00" },
  { group: "C", code: "MAR", name: "Morocco", primaryColor: "#c1272d", secondaryColor: "#006233" },
  { group: "C", code: "HAI", name: "Haiti", primaryColor: "#00209f", secondaryColor: "#d21034" },
  { group: "C", code: "SCO", name: "Scotland", primaryColor: "#005eb8", secondaryColor: "#ffffff" },

  { group: "D", code: "USA", name: "USA", primaryColor: "#3c3b6e", secondaryColor: "#b22234" },
  { group: "D", code: "PAR", name: "Paraguay", primaryColor: "#d52b1e", secondaryColor: "#0038a8" },
  { group: "D", code: "AUS", name: "Australia", primaryColor: "#012169", secondaryColor: "#ffcd00" },
  { group: "D", code: "TUR", name: "Türkiye", primaryColor: "#e30a17", secondaryColor: "#ffffff" },

  { group: "E", code: "GER", name: "Germany", primaryColor: "#000000", secondaryColor: "#dd0000" },
  { group: "E", code: "CUW", name: "Curaçao", primaryColor: "#002b7f", secondaryColor: "#f9e300" },
  { group: "E", code: "CIV", name: "Côte d'Ivoire", primaryColor: "#f77f00", secondaryColor: "#009e60" },
  { group: "E", code: "ECU", name: "Ecuador", primaryColor: "#ffdd00", secondaryColor: "#034ea2" },

  { group: "F", code: "NED", name: "Netherlands", primaryColor: "#ff4f00", secondaryColor: "#21468b" },
  { group: "F", code: "JPN", name: "Japan", primaryColor: "#bc002d", secondaryColor: "#ffffff" },
  { group: "F", code: "SWE", name: "Sweden", primaryColor: "#006aa7", secondaryColor: "#fecc00" },
  { group: "F", code: "TUN", name: "Tunisia", primaryColor: "#e70013", secondaryColor: "#ffffff" },

  { group: "G", code: "BEL", name: "Belgium", primaryColor: "#000000", secondaryColor: "#fae042" },
  { group: "G", code: "EGY", name: "Egypt", primaryColor: "#ce1126", secondaryColor: "#000000" },
  { group: "G", code: "IRN", name: "IR Iran", primaryColor: "#239f40", secondaryColor: "#da0000" },
  { group: "G", code: "NZL", name: "New Zealand", primaryColor: "#00247d", secondaryColor: "#cc142b" },

  { group: "H", code: "ESP", name: "Spain", primaryColor: "#aa151b", secondaryColor: "#f1bf00" },
  { group: "H", code: "CPV", name: "Cabo Verde", primaryColor: "#003893", secondaryColor: "#f7d116" },
  { group: "H", code: "KSA", name: "Saudi Arabia", primaryColor: "#006c35", secondaryColor: "#ffffff" },
  { group: "H", code: "URU", name: "Uruguay", primaryColor: "#0038a8", secondaryColor: "#ffffff" },

  { group: "I", code: "FRA", name: "France", primaryColor: "#0055a4", secondaryColor: "#ef4135" },
  { group: "I", code: "SEN", name: "Senegal", primaryColor: "#00853f", secondaryColor: "#fdef42" },
  { group: "I", code: "IRQ", name: "Iraq", primaryColor: "#ce1126", secondaryColor: "#007a3d" },
  { group: "I", code: "NOR", name: "Norway", primaryColor: "#ba0c2f", secondaryColor: "#00205b" },

  { group: "J", code: "ARG", name: "Argentina", primaryColor: "#75aadb", secondaryColor: "#f6b40e" },
  { group: "J", code: "ALG", name: "Algeria", primaryColor: "#006233", secondaryColor: "#d21034" },
  { group: "J", code: "AUT", name: "Austria", primaryColor: "#ed2939", secondaryColor: "#ffffff" },
  { group: "J", code: "JOR", name: "Jordan", primaryColor: "#007a3d", secondaryColor: "#ce1126" },

  { group: "K", code: "POR", name: "Portugal", primaryColor: "#006600", secondaryColor: "#ff0000" },
  { group: "K", code: "COD", name: "Congo DR", primaryColor: "#007fff", secondaryColor: "#f7d618" },
  { group: "K", code: "UZB", name: "Uzbekistan", primaryColor: "#1eb6e7", secondaryColor: "#009739" },
  { group: "K", code: "COL", name: "Colombia", primaryColor: "#fcd116", secondaryColor: "#003893" },

  { group: "L", code: "ENG", name: "England", primaryColor: "#ffffff", secondaryColor: "#cf142b" },
  { group: "L", code: "CRO", name: "Croatia", primaryColor: "#ff0000", secondaryColor: "#171796" },
  { group: "L", code: "GHA", name: "Ghana", primaryColor: "#ce1126", secondaryColor: "#fcd116" },
  { group: "L", code: "PAN", name: "Panama", primaryColor: "#005293", secondaryColor: "#d21034" }
];


/* =========================
   Globale App-Daten
   ========================= */

let stickers = [];
let currentFilter = "all";
let searchTerm = "";
let currentLanguage = "de";

const STORAGE_KEY = "panini2026Stickers";
const LANGUAGE_STORAGE_KEY = "panini2026Language";

const leftStickerOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rightStickerOrder = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


/* =========================
   Übersetzungen
   ========================= */

const translations = {
  de: {
    appTitle: "Panini WM 2026 Checkliste",
    appSubtitle: "Verwalte deine Sticker, fehlenden Sticker und doppelten Sticker.",
    collected: "Gesammelt",
    progress: "Fortschritt",
    missing: "Fehlend",
    duplicates: "Doppelte",
    save: "Speichern",
    missingPdf: "PDF fehlende Sticker",
    duplicatesPdf: "PDF doppelte Sticker",
    exportBackup: "Backup exportieren",
    importBackup: "Backup importieren",
    reset: "Zurücksetzen",
    filterAll: "Alle",
    filterMissing: "Fehlende",
    filterOwned: "Habe ich",
    filterDuplicates: "Doppelte",
    searchPlaceholder: "Sticker suchen, z. B. MEX 13, Germany, FWC...",
    frontSpecialTitle: "Spezial-Sticker vorne",
    frontSpecialSubtitle: "FWC 1–9",
    backSpecialTitle: "Spezial-Sticker hinten",
    backSpecialSubtitle: "FWC 10–20",
    group: "Gruppe",
    stickersOneToTwenty: "Sticker 1–20",
    leftPage: "Sticker 1–10",
    rightPage: "Sticker 11–20",
    teamPhoto: "Teamfoto",
    emptyFilter: "Keine Sticker für diesen Filter oder Suchbegriff gefunden.",
    statusMissing: "FEHLT",
    statusOwned: "HABE ICH",
    pdfMissingTitle: "Fehlende Sticker - Panini WM 2026",
    pdfDuplicatesTitle: "Doppelte Sticker - Panini WM 2026",
    pdfMissingSummary: "Insgesamt fehlend",
    pdfDuplicatesSummary: "Insgesamt doppelt",
    pdfStickerSingular: "Sticker",
    pdfStickerPlural: "Sticker",
    pdfSpecialGroup: "FWC - Spezial-Sticker",
    pdfDuplicateText: "doppelt",
    missingPdfFileName: "fehlende_sticker_panini_wm_2026.pdf",
    duplicatesPdfFileName: "doppelte_sticker_panini_wm_2026.pdf",
    alertNoMissing: "Du hast keine fehlenden Sticker. Deine Sammlung ist vollständig.",
    alertNoDuplicates: "Du hast aktuell keine doppelten Sticker.",
  },

  en: {
    appTitle: "Panini World Cup 2026 Checklist",
    appSubtitle: "Manage your stickers, missing stickers and duplicate stickers.",
    collected: "Collected",
    progress: "Progress",
    missing: "Missing",
    duplicates: "Duplicates",
    save: "Save",
    missingPdf: "Missing stickers PDF",
    duplicatesPdf: "Duplicate stickers PDF",
    exportBackup: "Export backup",
    importBackup: "Import backup",
    reset: "Reset",
    filterAll: "All",
    filterMissing: "Missing",
    filterOwned: "Collected",
    filterDuplicates: "Duplicates",
    searchPlaceholder: "Search stickers, e.g. MEX 13, Germany, FWC...",
    frontSpecialTitle: "Front special stickers",
    frontSpecialSubtitle: "FWC 1–9",
    backSpecialTitle: "Back special stickers",
    backSpecialSubtitle: "FWC 10–20",
    group: "Group",
    stickersOneToTwenty: "Stickers 1–20",
    leftPage: "Stickers 1–10",
    rightPage: "Stickers 11–20",
    teamPhoto: "Team photo",
    emptyFilter: "No stickers found for this filter or search term.",
    statusMissing: "MISSING",
    statusOwned: "COLLECTED",
    pdfMissingTitle: "Missing Stickers - Panini World Cup 2026",
    pdfDuplicatesTitle: "Duplicate Stickers - Panini World Cup 2026",
    pdfMissingSummary: "Total missing",
    pdfDuplicatesSummary: "Total duplicates",
    pdfStickerSingular: "sticker",
    pdfStickerPlural: "stickers",
    pdfSpecialGroup: "FWC - Special Stickers",
    pdfDuplicateText: "duplicate",
    missingPdfFileName: "missing_stickers_panini_world_cup_2026.pdf",
    duplicatesPdfFileName: "duplicate_stickers_panini_world_cup_2026.pdf",
    alertNoMissing: "You have no missing stickers. Your collection is complete.",
    alertNoDuplicates: "You currently have no duplicate stickers.",
  },

  es: {
    appTitle: "Lista de stickers Panini Mundial 2026",
    appSubtitle: "Gestiona tus stickers, stickers faltantes y stickers repetidos.",
    collected: "Coleccionados",
    progress: "Progreso",
    missing: "Faltantes",
    duplicates: "Repetidos",
    save: "Guardar",
    missingPdf: "PDF de stickers faltantes",
    duplicatesPdf: "PDF de stickers repetidos",
    exportBackup: "Exportar copia",
    importBackup: "Importar copia",
    reset: "Restablecer",
    filterAll: "Todos",
    filterMissing: "Faltantes",
    filterOwned: "Tengo",
    filterDuplicates: "Repetidos",
    searchPlaceholder: "Buscar stickers, p. ej. MEX 13, Germany, FWC...",
    frontSpecialTitle: "Stickers especiales iniciales",
    frontSpecialSubtitle: "FWC 1–9",
    backSpecialTitle: "Stickers especiales finales",
    backSpecialSubtitle: "FWC 10–20",
    group: "Grupo",
    stickersOneToTwenty: "Stickers 1–20",
    leftPage: "Stickers 1–10",
    rightPage: "Stickers 11–20",
    teamPhoto: "Foto del equipo",
    emptyFilter: "No se encontraron stickers para este filtro o búsqueda.",
    statusMissing: "FALTA",
    statusOwned: "TENGO",
    pdfMissingTitle: "Stickers faltantes - Panini Mundial 2026",
    pdfDuplicatesTitle: "Stickers repetidos - Panini Mundial 2026",
    pdfMissingSummary: "Total faltantes",
    pdfDuplicatesSummary: "Total repetidos",
    pdfStickerSingular: "sticker",
    pdfStickerPlural: "stickers",
    pdfSpecialGroup: "FWC - Stickers especiales",
    pdfDuplicateText: "repetido",
    missingPdfFileName: "stickers_faltantes_panini_mundial_2026.pdf",
    duplicatesPdfFileName: "stickers_repetidos_panini_mundial_2026.pdf",
    alertNoMissing: "No tienes stickers faltantes. Tu colección está completa.",
    alertNoDuplicates: "Actualmente no tienes stickers repetidos.",
  },

  it: {
    appTitle: "Checklist Panini Mondiali 2026",
    appSubtitle: "Gestisci i tuoi sticker, quelli mancanti e quelli doppi.",
    collected: "Raccolti",
    progress: "Progresso",
    missing: "Mancanti",
    duplicates: "Doppi",
    save: "Salva",
    missingPdf: "PDF sticker mancanti",
    duplicatesPdf: "PDF sticker doppi",
    exportBackup: "Esporta backup",
    importBackup: "Importa backup",
    reset: "Reimposta",
    filterAll: "Tutti",
    filterMissing: "Mancanti",
    filterOwned: "Raccolti",
    filterDuplicates: "Doppi",
    searchPlaceholder: "Cerca sticker, ad es. MEX 13, Germany, FWC...",
    frontSpecialTitle: "Sticker speciali iniziali",
    frontSpecialSubtitle: "FWC 1–9",
    backSpecialTitle: "Sticker speciali finali",
    backSpecialSubtitle: "FWC 10–20",
    group: "Gruppo",
    stickersOneToTwenty: "Sticker 1–20",
    leftPage: "Sticker 1–10",
    rightPage: "Sticker 11–20",
    teamPhoto: "Foto squadra",
    emptyFilter: "Nessuno sticker trovato per questo filtro o termine di ricerca.",
    statusMissing: "MANCA",
    statusOwned: "RACCOLTO",
    pdfMissingTitle: "Stickers faltantes - Panini Mundial 2026",
    pdfDuplicatesTitle: "Stickers repetidos - Panini Mundial 2026",
    pdfMissingSummary: "Total faltantes",
    pdfDuplicatesSummary: "Total repetidos",
    pdfStickerSingular: "sticker",
    pdfStickerPlural: "stickers",
    pdfSpecialGroup: "FWC - Stickers especiales",
    pdfDuplicateText: "repetido",
    missingPdfFileName: "stickers_faltantes_panini_mundial_2026.pdf",
    duplicatesPdfFileName: "stickers_repetidos_panini_mundial_2026.pdf",
    alertNoMissing: "No tienes stickers faltantes. Tu colección está completa.",
    alertNoDuplicates: "Actualmente no tienes stickers repetidos.",
  },

  fr: {
    appTitle: "Checklist Panini Coupe du Monde 2026",
    appSubtitle: "Gère tes stickers, les stickers manquants et les doubles.",
    collected: "Collectés",
    progress: "Progression",
    missing: "Manquants",
    duplicates: "Doubles",
    save: "Enregistrer",
    missingPdf: "PDF stickers manquants",
    duplicatesPdf: "PDF stickers doubles",
    exportBackup: "Exporter sauvegarde",
    importBackup: "Importer sauvegarde",
    reset: "Réinitialiser",
    filterAll: "Tous",
    filterMissing: "Manquants",
    filterOwned: "Collectés",
    filterDuplicates: "Doubles",
    searchPlaceholder: "Rechercher des stickers, p. ex. MEX 13, Germany, FWC...",
    frontSpecialTitle: "Stickers spéciaux au début",
    frontSpecialSubtitle: "FWC 1–9",
    backSpecialTitle: "Stickers spéciaux à la fin",
    backSpecialSubtitle: "FWC 10–20",
    group: "Groupe",
    stickersOneToTwenty: "Stickers 1–20",
    leftPage: "Stickers 1–10",
    rightPage: "Stickers 11–20",
    teamPhoto: "Photo d'équipe",
    emptyFilter: "Aucun sticker trouvé pour ce filtre ou cette recherche.",
    statusMissing: "MANQUANT",
    statusOwned: "COLLECTÉ",
    pdfMissingTitle: "Stickers manquants - Panini Coupe du Monde 2026",
    pdfDuplicatesTitle: "Stickers doubles - Panini Coupe du Monde 2026",
    pdfMissingSummary: "Total manquants",
    pdfDuplicatesSummary: "Total doubles",
    pdfStickerSingular: "sticker",
    pdfStickerPlural: "stickers",
    pdfSpecialGroup: "FWC - Stickers spéciaux",
    pdfDuplicateText: "double",
    missingPdfFileName: "stickers_manquants_panini_coupe_du_monde_2026.pdf",
    duplicatesPdfFileName: "stickers_doubles_panini_coupe_du_monde_2026.pdf",
    alertNoMissing: "Tu n'as aucun sticker manquant. Ta collection est complète.",
    alertNoDuplicates: "Tu n'as actuellement aucun sticker double.",
  }
};

function t(key) {
  return translations[currentLanguage][key] || translations.de[key] || key;
}


/* =========================
   Sticker erstellen
   ========================= */

function createStickers() {
  stickers = [];

  createSpecialStickers("front", 1, 9);
  createTeamStickers();
  createSpecialStickers("back", 10, 20);
}

function createSpecialStickers(section, firstNumber, lastNumber) {
  for (let number = firstNumber; number <= lastNumber; number++) {
    stickers.push({
      type: "special",
      section: section,
      group: "FWC",
      teamCode: "FWC",
      teamName: "FIFA World Cup 2026",
      number: number,
      ownedCount: 0
    });
  }
}

function createTeamStickers() {
  teams.forEach(team => {
    for (let number = 1; number <= 20; number++) {
      stickers.push({
        type: "team",
        section: "teams",
        group: team.group,
        teamCode: team.code,
        teamName: team.name,
        number: number,
        ownedCount: 0
      });
    }
  });
}


/* =========================
   Sprache
   ========================= */

function loadLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }

  document.querySelectorAll(".language-button").forEach(button => {
    button.classList.toggle("active", button.dataset.language === currentLanguage);
  });
}

function updateStaticTexts() {
  document.getElementById("appTitle").textContent = t("appTitle");
  document.getElementById("appSubtitle").textContent = t("appSubtitle");

  document.getElementById("collectedLabel").textContent = t("collected");
  document.getElementById("progressLabel").textContent = t("progress");
  document.getElementById("missingLabel").textContent = t("missing");
  document.getElementById("duplicatesLabel").textContent = t("duplicates");

  document.getElementById("saveButton").textContent = t("save");
  document.getElementById("missingPdfButton").textContent = t("missingPdf");
  document.getElementById("duplicatesPdfButton").textContent = t("duplicatesPdf");
  document.getElementById("exportBackupButton").textContent = t("exportBackup");
  document.getElementById("importBackupButton").textContent = t("importBackup");
  document.getElementById("resetButton").textContent = t("reset");

  document.querySelector('[data-filter="all"]').textContent = t("filterAll");
  document.querySelector('[data-filter="missing"]').textContent = t("filterMissing");
  document.querySelector('[data-filter="owned"]').textContent = t("filterOwned");
  document.querySelector('[data-filter="duplicates"]').textContent = t("filterDuplicates");

  document.getElementById("searchInput").placeholder = t("searchPlaceholder");
}

function changeLanguage(language) {
  currentLanguage = language;

  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);

  document.querySelectorAll(".language-button").forEach(button => {
    button.classList.toggle("active", button.dataset.language === currentLanguage);
  });

  updateStaticTexts();
  updateApp();
}


/* =========================
   Filter und Suche
   ========================= */

function stickerMatchesFilter(sticker) {
  if (currentFilter === "missing" && sticker.ownedCount !== 0) {
    return false;
  }

  if (currentFilter === "owned" && sticker.ownedCount === 0) {
    return false;
  }

  if (currentFilter === "duplicates" && sticker.ownedCount <= 1) {
    return false;
  }

  return stickerMatchesSearchTerm(sticker);
}

function stickerMatchesSearchTerm(sticker) {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  if (normalizedSearchTerm === "") {
    return true;
  }

  const stickerCode = `${sticker.teamCode} ${sticker.number}`.toLowerCase();
  const stickerCodeWithoutSpace = `${sticker.teamCode}${sticker.number}`.toLowerCase();
  const teamName = sticker.teamName.toLowerCase();
  const teamCode = sticker.teamCode.toLowerCase();

  return (
    stickerCode.includes(normalizedSearchTerm) ||
    stickerCodeWithoutSpace.includes(normalizedSearchTerm) ||
    teamName.includes(normalizedSearchTerm) ||
    teamCode.includes(normalizedSearchTerm)
  );
}


/* =========================
   Rendering
   ========================= */

function renderStickers() {
  const container = document.getElementById("stickerContainer");
  container.innerHTML = "";

  renderSpecialSection(container, "front", t("frontSpecialTitle"), t("frontSpecialSubtitle"));
  renderTeamGroups(container);
  renderSpecialSection(container, "back", t("backSpecialTitle"), t("backSpecialSubtitle"));
  renderEmptyFilterMessage(container);
}

function renderTeamGroups(container) {
  const groups = groupTeamsByGroup();

  Object.keys(groups).forEach(groupName => {
    const groupSection = createGroupSection(groupName, groups[groupName]);

    if (groupSection.children.length > 1) {
      container.appendChild(groupSection);
    }
  });
}

function groupTeamsByGroup() {
  const groups = {};

  teams.forEach(team => {
    if (!groups[team.group]) {
      groups[team.group] = [];
    }

    groups[team.group].push(team);
  });

  return groups;
}

function createGroupSection(groupName, groupTeams) {
  const groupSection = document.createElement("section");
  groupSection.className = "team-card";

  const groupTitle = document.createElement("h2");
  groupTitle.textContent = `${t("group")} ${groupName}`;
  groupSection.appendChild(groupTitle);

  groupTeams.forEach(team => {
    const teamBlock = createTeamBlock(team);

    if (teamBlock) {
      groupSection.appendChild(teamBlock);
    }
  });

  return groupSection;
}

function createTeamBlock(team) {
  const teamStickers = stickers.filter(sticker => {
    return sticker.teamCode === team.code && stickerMatchesFilter(sticker);
  });

  if (teamStickers.length === 0) {
    return null;
  }

  const teamBlock = document.createElement("div");
  teamBlock.className = "album-team-block";

  const teamHeader = createTeamHeader(team);
  const albumLayout = createAlbumLayout(teamStickers);

  teamBlock.appendChild(teamHeader);
  teamBlock.appendChild(albumLayout);

  return teamBlock;
}

function createTeamHeader(team) {
  const teamHeader = document.createElement("div");
  teamHeader.className = "album-team-header";

  teamHeader.style.setProperty("--team-primary", team.primaryColor);
  teamHeader.style.setProperty("--team-secondary", team.secondaryColor);

  const teamCodeBadge = document.createElement("div");
  teamCodeBadge.className = "team-code-badge";
  teamCodeBadge.textContent = team.code;

  const teamInfo = document.createElement("div");
  teamInfo.className = "team-info";

  const teamName = document.createElement("h3");
  teamName.textContent = team.name;

  const teamMeta = document.createElement("p");
  teamMeta.textContent = `${t("group")} ${team.group} · ${t("stickersOneToTwenty")}`;

  teamInfo.appendChild(teamName);
  teamInfo.appendChild(teamMeta);

  teamHeader.appendChild(teamCodeBadge);
  teamHeader.appendChild(teamInfo);

  return teamHeader;
}

function createAlbumLayout(teamStickers) {
  const albumLayout = document.createElement("div");
  albumLayout.className = "album-layout";

  const leftPage = createAlbumPage("album-page album-page-left", t("leftPage"));
  const rightPage = createAlbumPage("album-page album-page-right", t("rightPage"));

  const leftStickerGrid = createStickerGrid("album-sticker-grid left-sticker-grid");
  const rightStickerGrid = createStickerGrid("album-sticker-grid right-sticker-grid");

  addOrderedStickersToGrid(leftStickerGrid, teamStickers, leftStickerOrder);
  addOrderedStickersToGrid(rightStickerGrid, teamStickers, rightStickerOrder);

  leftPage.appendChild(leftStickerGrid);
  rightPage.appendChild(rightStickerGrid);

  albumLayout.appendChild(leftPage);
  albumLayout.appendChild(rightPage);

  return albumLayout;
}

function createAlbumPage(className, title) {
  const page = document.createElement("div");
  page.className = className;

  const pageTitle = document.createElement("div");
  pageTitle.className = "album-page-title";
  pageTitle.textContent = title;

  page.appendChild(pageTitle);

  return page;
}

function createStickerGrid(className) {
  const stickerGrid = document.createElement("div");
  stickerGrid.className = className;

  return stickerGrid;
}

function addOrderedStickersToGrid(stickerGrid, stickerList, stickerOrder) {
  stickerOrder.forEach(number => {
    const sticker = stickerList.find(item => item.number === number);

    if (sticker) {
      stickerGrid.appendChild(createStickerElement(sticker));
    }
  });
}

function renderSpecialSection(container, sectionName, title, subtitle) {
  const specialStickers = stickers.filter(sticker => {
    return (
      sticker.type === "special" &&
      sticker.section === sectionName &&
      stickerMatchesFilter(sticker)
    );
  });

  if (specialStickers.length === 0) {
    return;
  }

  const specialSection = document.createElement("section");
  specialSection.className = "team-card special-card";

  const specialHeader = createSpecialHeader(title, subtitle);
  const specialGrid = document.createElement("div");
  specialGrid.className = "special-grid";

  specialStickers.forEach(sticker => {
    specialGrid.appendChild(createStickerElement(sticker));
  });

  specialSection.appendChild(specialHeader);
  specialSection.appendChild(specialGrid);

  container.appendChild(specialSection);
}

function createSpecialHeader(title, subtitle) {
  const specialHeader = document.createElement("div");
  specialHeader.className = "special-header";

  const specialBadge = document.createElement("div");
  specialBadge.className = "special-badge";
  specialBadge.textContent = "FWC";

  const specialInfo = document.createElement("div");
  specialInfo.className = "team-info";

  const specialTitle = document.createElement("h3");
  specialTitle.textContent = title;

  const specialMeta = document.createElement("p");
  specialMeta.textContent = subtitle;

  specialInfo.appendChild(specialTitle);
  specialInfo.appendChild(specialMeta);

  specialHeader.appendChild(specialBadge);
  specialHeader.appendChild(specialInfo);

  return specialHeader;
}

function renderEmptyFilterMessage(container) {
  if (container.children.length > 0) {
    return;
  }

  const emptyMessage = document.createElement("div");
  emptyMessage.className = "empty-filter-message";
  emptyMessage.textContent = t("emptyFilter");

  container.appendChild(emptyMessage);
}


/* =========================
   Einzelnen Sticker erstellen
   ========================= */

function createStickerElement(sticker) {
  const stickerItem = document.createElement("div");
  stickerItem.className = "sticker-item album-sticker";

  if (sticker.type === "team") {
    stickerItem.style.gridArea = `s${sticker.number}`;
  }

  if (sticker.ownedCount > 0) {
    stickerItem.classList.add("owned");
  }

  if (sticker.ownedCount > 1) {
    stickerItem.classList.add("duplicate");
    stickerItem.appendChild(createDuplicateBadge(sticker));
  }

  if (sticker.type === "team" && sticker.number === 13) {
    stickerItem.classList.add("team-photo-sticker");
  }

  const statusBadge = createStatusBadge(sticker);
  const stickerName = createStickerName(sticker);
  const counter = createStickerCounter(sticker);

  stickerItem.appendChild(statusBadge);
  stickerItem.appendChild(stickerName);
  stickerItem.appendChild(counter);

  return stickerItem;
}

function createStatusBadge(sticker) {
  const statusBadge = document.createElement("div");
  statusBadge.className = "status-badge";

  if (sticker.ownedCount > 0) {
    statusBadge.textContent = t("statusOwned");
  } else {
    statusBadge.textContent = t("statusMissing");
  }

  return statusBadge;
}

function createStickerName(sticker) {
  const stickerName = document.createElement("div");
  stickerName.className = "sticker-name";
  stickerName.textContent = getStickerLabel(sticker);

  return stickerName;
}

function getStickerLabel(sticker) {
  if (sticker.type === "team" && sticker.number === 13) {
    return `${sticker.teamCode} ${sticker.number} | ${t("teamPhoto")}`;
  }

  return `${sticker.teamCode} ${sticker.number}`;
}

function createDuplicateBadge(sticker) {
  const duplicateBadge = document.createElement("div");

  duplicateBadge.className = "duplicate-badge";
  duplicateBadge.textContent = `+${sticker.ownedCount - 1}`;

  return duplicateBadge;
}

function createStickerCounter(sticker) {
  const counter = document.createElement("div");
  counter.className = "counter";

  const minusButton = document.createElement("button");
  minusButton.textContent = "-";

  const countText = document.createElement("span");
  countText.textContent = sticker.ownedCount;

  const plusButton = document.createElement("button");
  plusButton.textContent = "+";

  minusButton.addEventListener("click", () => {
    if (sticker.ownedCount > 0) {
      sticker.ownedCount--;
      updateApp();
    }
  });

  plusButton.addEventListener("click", () => {
    sticker.ownedCount++;
    updateApp();
  });

  counter.appendChild(minusButton);
  counter.appendChild(countText);
  counter.appendChild(plusButton);

  return counter;
}


/* =========================
   Zusammenfassung aktualisieren
   ========================= */

function updateSummary() {
  const total = stickers.length;
  const collected = stickers.filter(sticker => sticker.ownedCount > 0).length;
  const missing = stickers.filter(sticker => sticker.ownedCount === 0).length;
  const duplicateAmount = getTotalDuplicateAmount();
  const percent = total === 0 ? 0 : Math.round((collected / total) * 100);

  document.getElementById("collectedCount").textContent = `${collected} / ${total}`;
  document.getElementById("progressPercent").textContent = `${percent} %`;
  document.getElementById("missingCount").textContent = missing;
  document.getElementById("duplicateCount").textContent = duplicateAmount;
  document.getElementById("progressFill").style.width = `${percent}%`;
}

function getTotalDuplicateAmount() {
  return stickers.reduce((sum, sticker) => {
    if (sticker.ownedCount > 1) {
      return sum + (sticker.ownedCount - 1);
    }

    return sum;
  }, 0);
}


/* =========================
   Speichern, Laden und Zurücksetzen
   ========================= */

function saveStickers() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stickers));

  const total = stickers.length;
  const collected = stickers.filter(sticker => sticker.ownedCount > 0).length;
  const percent = total === 0 ? 0 : Math.round((collected / total) * 100);

  alert(`Gespeichert: ${collected} von ${total} Stickern (${percent} %).`);
}

function loadStickers() {
  const savedStickers = localStorage.getItem(STORAGE_KEY);

  if (!savedStickers) {
    return;
  }

  const parsedStickers = JSON.parse(savedStickers);

  stickers.forEach(sticker => {
    const savedSticker = parsedStickers.find(item => {
      return item.teamCode === sticker.teamCode && item.number === sticker.number;
    });

    if (savedSticker) {
      sticker.ownedCount = savedSticker.ownedCount;
    }
  });
}

function resetStickers() {
  const shouldReset = confirm("Möchtest du wirklich alle Sticker zurücksetzen?");

  if (!shouldReset) {
    return;
  }

  stickers.forEach(sticker => {
    sticker.ownedCount = 0;
  });

  localStorage.removeItem(STORAGE_KEY);
  updateApp();

  alert("Alle Sticker wurden zurückgesetzt.");
}


/* =========================
   Backup exportieren/importieren
   ========================= */

function exportBackup() {
  const backupData = {
    appName: "Panini WM 2026 Checkliste",
    version: 1,
    createdAt: new Date().toISOString(),
    stickers: stickers.map(sticker => {
      return {
        teamCode: sticker.teamCode,
        number: sticker.number,
        ownedCount: sticker.ownedCount
      };
    })
  };

  const jsonText = JSON.stringify(backupData, null, 2);
  const blob = new Blob([jsonText], { type: "application/json" });
  const downloadUrl = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");
  downloadLink.href = downloadUrl;
  downloadLink.download = "panini_backup_2026.json";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  URL.revokeObjectURL(downloadUrl);
}

function importBackupFile(file) {
  const reader = new FileReader();

  reader.onload = event => {
    try {
      const backupData = JSON.parse(event.target.result);

      if (!backupData.stickers || !Array.isArray(backupData.stickers)) {
        alert("Diese Datei ist kein gültiges Panini-Backup.");
        return;
      }

      applyBackupData(backupData);
      saveStickers();
      updateApp();

      alert("Backup wurde erfolgreich importiert.");
    } catch (error) {
      alert("Das Backup konnte nicht gelesen werden.");
    }
  };

  reader.readAsText(file);
}

function applyBackupData(backupData) {
  backupData.stickers.forEach(savedSticker => {
    const matchingSticker = stickers.find(sticker => {
      return (
        sticker.teamCode === savedSticker.teamCode &&
        sticker.number === savedSticker.number
      );
    });

    if (matchingSticker) {
      matchingSticker.ownedCount = Number(savedSticker.ownedCount) || 0;
    }
  });
}


/* =========================
   PDF-Erstellung
   ========================= */

function createMissingPdf() {
  const missingStickers = stickers.filter(sticker => {
    return sticker.ownedCount === 0;
  });

  if (missingStickers.length === 0) {
    alert(t("alertNoMissing"));
    return;
  }

  const doc = createPdfDocument(t("pdfMissingTitle"));
  let y = 30;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(
    `${t("pdfMissingSummary")}: ${missingStickers.length} ${t("pdfStickerPlural")} / ${stickers.length}`,
    14,
    y
  );

  y += 10;

  const groupedMissingStickers = groupStickersForPdf(missingStickers);
  writeGroupedPdfContent(doc, groupedMissingStickers, y, "compact");

  doc.save(t("missingPdfFileName"));
}

function createDuplicatesPdf() {
  const duplicateStickers = stickers.filter(sticker => {
    return sticker.ownedCount > 1;
  });

  if (duplicateStickers.length === 0) {
    alert(t("alertNoDuplicates"));
    return;
  }

  const doc = createPdfDocument(t("pdfDuplicatesTitle"));
  let y = 30;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(
    `${t("pdfDuplicatesSummary")}: ${getTotalDuplicateAmount()} ${t("pdfStickerPlural")}`,
    14,
    y
  );

  y += 10;

  const groupedDuplicateStickers = groupDuplicateStickersForPdf(duplicateStickers);
  writeGroupedPdfContent(doc, groupedDuplicateStickers, y, "lines");

  doc.save(t("duplicatesPdfFileName"));
}

function createPdfDocument(title) {
  const jsPdfObject = window.jspdf;
  const doc = new jsPdfObject.jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(title, 14, 20);

  return doc;
}

function writeGroupedPdfContent(doc, groupedStickers, startY, mode) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  let y = startY;

  Object.keys(groupedStickers).forEach(groupName => {
    const stickerEntries = groupedStickers[groupName];

    if (y > pageHeight - 25) {
      doc.addPage();
      y = 20;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(groupName, 14, y);

    y += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    if (mode === "compact") {
      const lineText = stickerEntries.join(", ");
      const lines = doc.splitTextToSize(lineText, pageWidth - 28);

      lines.forEach(line => {
        if (y > pageHeight - 15) {
          doc.addPage();
          y = 20;
        }

        doc.text(line, 14, y);
        y += 6;
      });
    }

    if (mode === "lines") {
      stickerEntries.forEach(stickerLine => {
        if (y > pageHeight - 15) {
          doc.addPage();
          y = 20;
        }

        doc.text(stickerLine, 14, y);
        y += 6;
      });
    }

    y += 5;
  });
}

function groupStickersForPdf(stickerList) {
  const groupedStickers = {};

  stickerList.forEach(sticker => {
    const groupName = getPdfGroupName(sticker);

    if (!groupedStickers[groupName]) {
      groupedStickers[groupName] = [];
    }

    groupedStickers[groupName].push(`${sticker.teamCode} ${sticker.number}`);
  });

  return groupedStickers;
}

function groupDuplicateStickersForPdf(stickerList) {
  const groupedStickers = {};

  stickerList.forEach(sticker => {
    const groupName = getPdfGroupName(sticker);
    const duplicateAmount = sticker.ownedCount - 1;

    if (!groupedStickers[groupName]) {
      groupedStickers[groupName] = [];
    }

    groupedStickers[groupName].push(
      `${sticker.teamCode} ${sticker.number}: ${duplicateAmount}x ${t("pdfDuplicateText")}`
    );
  });

  return groupedStickers;
}

function getPdfGroupName(sticker) {
  if (sticker.type === "special") {
    return t("pdfSpecialGroup");
  }

  return `${sticker.teamCode} - ${sticker.teamName}`;
}


/* =========================
   Event Listener
   ========================= */

function registerEventListeners() {
  document.getElementById("saveButton").addEventListener("click", saveStickers);
  document.getElementById("resetButton").addEventListener("click", resetStickers);
  document.getElementById("missingPdfButton").addEventListener("click", createMissingPdf);
  document.getElementById("duplicatesPdfButton").addEventListener("click", createDuplicatesPdf);
  document.getElementById("exportBackupButton").addEventListener("click", exportBackup);

  document.getElementById("importBackupButton").addEventListener("click", () => {
    document.getElementById("importBackupInput").click();
  });

  document.getElementById("importBackupInput").addEventListener("change", event => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    importBackupFile(selectedFile);
    event.target.value = "";
  });

  document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;

      document.querySelectorAll(".filter-button").forEach(otherButton => {
        otherButton.classList.remove("active");
      });

      button.classList.add("active");

      updateApp();
    });
  });

  document.getElementById("searchInput").addEventListener("input", event => {
    searchTerm = event.target.value;
    updateApp();
  });

  document.querySelectorAll(".language-button").forEach(button => {
    button.addEventListener("click", () => {
      changeLanguage(button.dataset.language);
    });
  });
}


/* =========================
   App starten
   ========================= */

function updateApp() {
  renderStickers();
  updateSummary();
}

function initializeApp() {
  createStickers();
  loadStickers();
  loadLanguage();
  updateStaticTexts();
  updateApp();
  registerEventListeners();
}

initializeApp();
