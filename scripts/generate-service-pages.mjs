import { mkdir, writeFile } from "node:fs/promises";

const phoneDisplay = "260-402-1674";
const phoneHref = "+12604021674";
const email = "shawn@notaryfw.com";
const site = "https://notaryfw.com";

const services = [
  {
    slug: "mobile-notary-fort-wayne",
    title: "Mobile Notary Fort Wayne | After Hours Mobile Notary",
    description: "Mobile notary Fort Wayne service by appointment for homes, hospitals, senior care facilities, businesses, and nearby Northeast Indiana communities.",
    h1: "Mobile Notary Fort Wayne",
    intro: "After Hours Mobile Notary of Fort Wayne travels to you for convenient document notarization at homes, offices, hospitals, nursing homes, retirement facilities, and other local locations.",
    sectionTitle: "A Fort Wayne mobile notary that comes to you",
    body: [
      "When you need a notary public Fort Wayne residents can reach outside ordinary business hours, Shawn provides calm, local, mobile service by appointment.",
      "Mobile notary Fort Wayne appointments may be available in Fort Wayne, North Fort Wayne, Allen County, Leo-Cedarville, Auburn, the Dupont Road area, the Parkview area, and nearby Northeast Indiana communities."
    ],
    bullets: ["Home and workplace notarization", "Hospital and senior care facility appointments", "Powers of attorney, affidavits, living wills, and healthcare directives", "Same-day, weekend, and after-hours requests when available"],
    note: "Call or text with your location, document type, requested time, and whether the signer has valid identification.",
    related: ["after-hours-notary-fort-wayne", "same-day-notary-fort-wayne", "hospital-notary-fort-wayne"]
  },
  {
    slug: "after-hours-notary-fort-wayne",
    title: "After Hours Notary Fort Wayne | Mobile Notary Public",
    description: "After hours notary Fort Wayne appointments for evenings, urgent requests, hospitals, care facilities, homes, offices, and local businesses.",
    h1: "After Hours Notary Fort Wayne",
    intro: "After-hours notary help is available by appointment for Fort Wayne residents, families, hospitals, nursing homes, retirement communities, correctional facilities, and businesses.",
    sectionTitle: "Evening mobile notary service by appointment",
    body: [
      "Not every notarization need happens during the workday. After Hours Mobile Notary of Fort Wayne helps people who need an after hours mobile notary after work, after a hospital visit, or when a document becomes urgent.",
      "Call or text Shawn to check availability for an after hours notary Fort Wayne appointment and to confirm the signer, document, ID, and location."
    ],
    bullets: ["Evening notary public appointments", "Late-night requests when availability allows", "Hospital, nursing home, and retirement facility visits", "Mobile notary near me service throughout Fort Wayne and Allen County"],
    note: "After-hours notary help is available by appointment. Availability can vary by day and location.",
    related: ["late-night-notary-fort-wayne", "24-hour-notary-fort-wayne", "weekend-notary-fort-wayne"]
  },
  {
    slug: "same-day-notary-fort-wayne",
    title: "Same Day Notary Fort Wayne | Mobile Notary Public",
    description: "Same day notary Fort Wayne appointments may be available for urgent mobile notarization in Fort Wayne, Allen County, Leo-Cedarville, and Auburn.",
    h1: "Same Day Notary Fort Wayne",
    intro: "When a document needs attention today, Shawn may be able to travel for a same-day mobile notary appointment in Fort Wayne and nearby Northeast Indiana communities.",
    sectionTitle: "Same-day notary requests handled clearly",
    body: [
      "Same-day notary Fort Wayne availability depends on timing, location, facility access, and whether the signer and documents are ready.",
      "Call or text Shawn with the document type, number of signers, location, and ideal time. He will let you know whether a same-day appointment is available."
    ],
    bullets: ["Urgent document notarization Fort Wayne requests", "Same-day service at homes, offices, and facilities", "Power of attorney, affidavit, healthcare directive, and real estate document notarization", "Local notary public service for Fort Wayne and Allen County"],
    note: "For the smoothest appointment, keep the document unsigned until the notary is present unless you were specifically instructed otherwise.",
    related: ["mobile-notary-fort-wayne", "after-hours-notary-fort-wayne", "weekend-notary-fort-wayne"]
  },
  {
    slug: "weekend-notary-fort-wayne",
    title: "Weekend & Same Day Notary Fort Wayne",
    description: "Weekend notary Fort Wayne and same-day mobile notary appointments for homes, hospitals, senior care facilities, offices, and urgent requests.",
    h1: "Weekend Notary Fort Wayne",
    intro: "Weekend notary Fort Wayne service may be available when weekday business hours do not fit your schedule or an urgent document needs attention.",
    sectionTitle: "Mobile notary help on Saturdays and Sundays",
    body: [
      "After Hours Mobile Notary of Fort Wayne provides weekend mobile notary appointments by request for local residents, families, healthcare facilities, businesses, and care communities.",
      "Weekend appointments are especially helpful for families coordinating powers of attorney, living wills, healthcare directives, affidavits, and other time-sensitive documents."
    ],
    bullets: ["Weekend mobile notary appointments", "Same-day weekend requests when available", "Traveling notary Fort Wayne service", "Service in Fort Wayne, Allen County, Leo-Cedarville, Auburn, and nearby areas"],
    note: "Call or text early when possible so Shawn can confirm weekend availability and travel timing.",
    related: ["same-day-notary-fort-wayne", "after-hours-notary-fort-wayne", "mobile-notary-fort-wayne"]
  },
  {
    slug: "late-night-notary-fort-wayne",
    title: "Late Night Notary Fort Wayne | After Hours Mobile Notary",
    description: "Late night notary Fort Wayne appointments may be available by urgent request for mobile notarization after regular business hours.",
    h1: "Late Night Notary Fort Wayne",
    intro: "Late-night notary availability may be available by appointment or urgent request for Fort Wayne, Allen County, and surrounding Northeast Indiana communities.",
    sectionTitle: "Calm help for late-night notarization needs",
    body: [
      "Some documents cannot wait until morning. Shawn provides after-hours mobile notary service and may be available for late night notary Fort Wayne requests depending on schedule and location.",
      "Late-night appointments work best when the signer is ready, the document is complete, and the appointment location is clear and accessible."
    ],
    bullets: ["Late-night notary public Fort Wayne requests", "Emergency notary Fort Wayne scheduling when available", "Hospital, care facility, and residential appointments", "Phone and text scheduling for urgent timing"],
    note: "Late-night availability is not guaranteed. Call or text to check current options.",
    related: ["after-hours-notary-fort-wayne", "24-hour-notary-fort-wayne", "same-day-notary-fort-wayne"]
  },
  {
    slug: "24-hour-notary-fort-wayne",
    title: "24 Hour Notary Fort Wayne | Appointment Availability",
    description: "24 hour notary Fort Wayne availability may be available by appointment or urgent request. Call or text to check mobile notary availability.",
    h1: "24 Hour Notary Fort Wayne",
    intro: "24-hour notary availability may be available by appointment or urgent request. Call or text Shawn to check current availability in Fort Wayne and nearby communities.",
    sectionTitle: "Urgent notary availability without a 24/7 guarantee",
    body: [
      "After Hours Mobile Notary of Fort Wayne understands that people often search for a 24 hour notary Fort Wayne when a document is urgent, a hospital situation changes, or a signer is only available outside regular hours.",
      "Shawn may be able to help with urgent mobile notary requests, but service is by appointment and current availability must be confirmed directly."
    ],
    bullets: ["Urgent after-hours notary requests", "Late-night and early appointment inquiries", "Hospital, senior care, and family document needs", "Mobile notary near me scheduling in Fort Wayne and Allen County"],
    note: "24-hour notary availability may be available by appointment or urgent request. Call or text to check availability. This does not imply guaranteed 24/7 service.",
    related: ["late-night-notary-fort-wayne", "after-hours-notary-fort-wayne", "same-day-notary-fort-wayne"]
  },
  {
    slug: "hospital-notary-fort-wayne",
    title: "Hospital Notary Fort Wayne | Parkview Notary Services",
    description: "Hospital notary Fort Wayne service for powers of attorney, healthcare directives, living wills, affidavits, and Parkview area notary requests.",
    h1: "Hospital Notary Fort Wayne",
    intro: "Shawn can travel to hospitals and healthcare settings for important documents such as powers of attorney, healthcare directives, living wills, affidavits, and other notarized documents.",
    sectionTitle: "Mobile notary service for Fort Wayne hospitals",
    body: [
      "Hospital notary Fort Wayne appointments may be available for patients, families, and care teams who need a local notary public to come to the facility.",
      "After Hours Mobile Notary of Fort Wayne serves the Parkview area and can help with Parkview notary and Parkview Regional Medical Center notary requests when scheduling, facility access, signer readiness, and identification requirements can be met."
    ],
    bullets: ["Hospital notarization by appointment", "Parkview Hospital notary and Parkview Regional Medical Center notary requests", "Powers of attorney and healthcare power of attorney notarization", "Living will, healthcare directive, and affidavit notary service"],
    note: "The signer must be aware, willing, and able to sign. Facility rules and visitor requirements may affect appointment timing.",
    related: ["parkview-notary", "healthcare-directive-notary", "power-of-attorney-notary"]
  },
  {
    slug: "parkview-notary",
    title: "Parkview Notary | Parkview Regional Medical Center Notary",
    description: "Parkview notary and Parkview Regional Medical Center notary appointments by request for healthcare documents, powers of attorney, and living wills.",
    h1: "Parkview Notary Services",
    intro: "Parkview notary and Parkview Regional Medical Center notary requests may be available by appointment for patients, families, and healthcare document needs.",
    sectionTitle: "Mobile notary near the Parkview area",
    body: [
      "Parkview Regional Medical Center is a major hospital campus in Fort Wayne, and families often need a mobile notary near me for healthcare documents, powers of attorney, living wills, or affidavits.",
      "Shawn can travel to the Parkview area when availability, facility access, signer readiness, identification, and document readiness allow."
    ],
    bullets: ["Parkview Regional Medical Center notary requests", "Parkview Hospital notary service by appointment", "Healthcare directive and living will notarization", "Mobile notary Fort Wayne service near the Dupont Road and Parkview areas"],
    note: "Call or text before the appointment to review room details, visitor rules, and document readiness.",
    related: ["hospital-notary-fort-wayne", "healthcare-directive-notary", "living-will-notary"]
  },
  {
    slug: "nursing-home-notary-fort-wayne",
    title: "Nursing Home & Retirement Facility Notary Fort Wayne",
    description: "Nursing home notary Fort Wayne service for senior care facilities, rehabilitation centers, assisted living communities, and retirement facilities.",
    h1: "Nursing Home Notary Fort Wayne",
    intro: "Shawn can travel to nursing homes, rehabilitation centers, senior care facilities, assisted living communities, and retirement facilities for notarization by appointment.",
    sectionTitle: "Mobile notary support for senior care settings",
    body: [
      "Nursing home notary Fort Wayne appointments help families and residents handle important documents without requiring a signer to travel.",
      "Common requests include power of attorney notary appointments, healthcare directives, living wills, affidavits, and other documents used in care planning or family matters."
    ],
    bullets: ["Nursing home notary Fort Wayne appointments", "Rehabilitation center and senior care facility visits", "Healthcare power of attorney notary requests", "Living will and healthcare directive notarization"],
    note: "The signer must be present, willing, aware, and able to provide acceptable identification or meet applicable notarial requirements.",
    related: ["retirement-facility-notary-fort-wayne", "assisted-living-notary-fort-wayne", "power-of-attorney-notary"]
  },
  {
    slug: "retirement-facility-notary-fort-wayne",
    title: "Retirement Facility Notary Fort Wayne | Mobile Notary",
    description: "Retirement facility notary service in Fort Wayne for powers of attorney, healthcare directives, living wills, affidavits, and family documents.",
    h1: "Retirement Facility Notary Fort Wayne",
    intro: "After Hours Mobile Notary of Fort Wayne travels to retirement communities and senior living facilities for convenient document notarization by appointment.",
    sectionTitle: "Convenient notary service for retirement communities",
    body: [
      "Retirement facility notary appointments allow residents and families to handle notarized documents without unnecessary travel.",
      "Shawn serves Fort Wayne, Allen County, Leo-Cedarville, Auburn, and surrounding Northeast Indiana communities for local notary public requests."
    ],
    bullets: ["Retirement facility notary appointments", "Senior living and care community visits", "Power of attorney and healthcare directive notarization", "Same-day, weekend, and after-hours requests when available"],
    note: "Call or text with the facility name, room or unit details, document type, signer information, and requested timing.",
    related: ["nursing-home-notary-fort-wayne", "assisted-living-notary-fort-wayne", "living-will-notary"]
  },
  {
    slug: "assisted-living-notary-fort-wayne",
    title: "Assisted Living Notary Fort Wayne | Healthcare Documents",
    description: "Assisted living notary Fort Wayne appointments for powers of attorney, healthcare directives, living wills, affidavits, and senior care documents.",
    h1: "Assisted Living Notary Fort Wayne",
    intro: "Shawn provides mobile notary service for assisted living communities in Fort Wayne and nearby Northeast Indiana areas by appointment.",
    sectionTitle: "Notary service that travels to assisted living communities",
    body: [
      "Assisted living notary appointments are often needed for healthcare planning, family documents, affidavits, powers of attorney, and living wills.",
      "After Hours Mobile Notary of Fort Wayne helps make the process simple by traveling to the signer and coordinating appointment details in advance."
    ],
    bullets: ["Assisted living notary Fort Wayne service", "Healthcare directive and living will notary appointments", "Power of attorney notary requests", "Mobile notarization throughout Fort Wayne and Allen County"],
    note: "Facility rules, visitor requirements, identification, and signer readiness should be confirmed before the appointment.",
    related: ["nursing-home-notary-fort-wayne", "retirement-facility-notary-fort-wayne", "healthcare-directive-notary"]
  },
  {
    slug: "allen-county-jail-notary",
    title: "Allen County Jail Notary | Prison Notary Fort Wayne",
    description: "Allen County jail notary and prison notary Fort Wayne appointments may be available subject to facility rules, visitor requirements, and scheduling.",
    h1: "Allen County Jail Notary Services",
    intro: "Mobile notary services may be available for Allen County jail notary, prison notary Fort Wayne, and correctional facility notary requests.",
    sectionTitle: "Correctional facility notarization by request",
    body: [
      "Correctional facility notary appointments require extra coordination. Service is subject to facility rules, visitor requirements, scheduling, identification, and document readiness.",
      "Call or text Shawn before making plans so the facility process, appointment timing, signer details, and document needs can be reviewed."
    ],
    bullets: ["Allen County jail notary requests", "Prison notary Fort Wayne appointments when available", "Correctional facility notary coordination", "Document notarization subject to facility policies"],
    note: "Availability depends on the facility process and schedule. Notary service cannot override jail, prison, or correctional facility rules.",
    related: ["mobile-notary-fort-wayne", "after-hours-notary-fort-wayne", "affidavit-notary"]
  },
  {
    slug: "business-notary-services",
    title: "Business Notary Services Fort Wayne | Mobile Notary",
    description: "Business notary services in Fort Wayne for offices, local companies, professional teams, and mobile document notarization by appointment.",
    h1: "Business Notary Services",
    intro: "After Hours Mobile Notary of Fort Wayne provides on-site mobile notary service for local businesses, offices, professional teams, and organizations.",
    sectionTitle: "On-site notary public service for Fort Wayne businesses",
    body: [
      "Business notary services can reduce disruption by bringing a traveling notary Fort Wayne appointment to your office or meeting location.",
      "Shawn can help with document notarization Fort Wayne requests for business documents, affidavits, real estate documents, and other eligible forms."
    ],
    bullets: ["Office and workplace notary appointments", "After-hours and weekend scheduling when available", "Multiple signer coordination", "Local notary public service for Fort Wayne and Allen County businesses"],
    note: "Call or text with the business location, number of signers, document type, and preferred appointment time.",
    related: ["real-estate-document-notary", "affidavit-notary", "mobile-notary-fort-wayne"]
  },
  {
    slug: "power-of-attorney-notary",
    title: "Power of Attorney Notary Fort Wayne | Mobile Notary",
    description: "Power of attorney notary and healthcare power of attorney notary appointments in Fort Wayne, hospitals, nursing homes, and senior care facilities.",
    h1: "Power of Attorney Notary",
    intro: "Shawn provides mobile power of attorney notary appointments for Fort Wayne residents, families, hospitals, nursing homes, and care facilities.",
    sectionTitle: "Mobile notarization for power of attorney documents",
    body: [
      "Power of attorney documents are common mobile notary requests, especially when families need help at a home, hospital, nursing home, retirement facility, or assisted living community.",
      "Healthcare power of attorney notary appointments may also be available by request when the signer is present, willing, aware, and able to provide acceptable identification."
    ],
    bullets: ["Power of attorney notary appointments", "Healthcare power of attorney notary service", "Hospital and senior care facility visits", "Same-day or after-hours requests when available"],
    note: "A notary verifies identity and witnesses eligible notarial acts, but does not prepare legal documents or provide legal advice.",
    related: ["healthcare-directive-notary", "living-will-notary", "hospital-notary-fort-wayne"]
  },
  {
    slug: "living-will-notary",
    title: "Living Will Notary Fort Wayne | Mobile Notary",
    description: "Living will notary appointments in Fort Wayne for homes, hospitals, nursing homes, retirement facilities, and healthcare planning documents.",
    h1: "Living Will Notary",
    intro: "Living will notary appointments may be available at homes, hospitals, nursing homes, retirement facilities, and assisted living communities in Fort Wayne and nearby areas.",
    sectionTitle: "Mobile notary service for living wills",
    body: [
      "Families often need a living will notary when coordinating healthcare planning documents in a time-sensitive setting.",
      "Shawn travels by appointment to make notarization more accessible for residents, patients, and families throughout Fort Wayne, Allen County, and Northeast Indiana."
    ],
    bullets: ["Living will notary service", "Healthcare planning document notarization", "Hospital, nursing home, and retirement facility appointments", "After-hours and same-day requests when available"],
    note: "Please confirm the document is complete and that the signer is ready before the appointment begins.",
    related: ["healthcare-directive-notary", "power-of-attorney-notary", "nursing-home-notary-fort-wayne"]
  },
  {
    slug: "healthcare-directive-notary",
    title: "Healthcare Directive Notary Fort Wayne | Mobile Notary",
    description: "Healthcare directive notary appointments in Fort Wayne, Parkview area, hospitals, nursing homes, assisted living, and retirement facilities.",
    h1: "Healthcare Directive Notary",
    intro: "Healthcare directive notary appointments may be available for Fort Wayne residents, families, patients, hospitals, nursing homes, assisted living communities, and retirement facilities.",
    sectionTitle: "Notary service for healthcare planning documents",
    body: [
      "Healthcare directives are common hospital notary Fort Wayne and senior care notary requests. Shawn can travel to the signer so important documents can be handled more conveniently.",
      "Appointments may be available near Parkview Regional Medical Center, the Parkview area, Fort Wayne, Allen County, Leo-Cedarville, Auburn, and surrounding Northeast Indiana communities."
    ],
    bullets: ["Healthcare directive notary appointments", "Healthcare power of attorney notarization", "Living will and affidavit notarization", "Parkview notary and hospital notary requests"],
    note: "The signer must be willing and able to complete the notarial act. Facility access and identification requirements may apply.",
    related: ["hospital-notary-fort-wayne", "parkview-notary", "living-will-notary"]
  },
  {
    slug: "affidavit-notary",
    title: "Affidavit Notary Fort Wayne | Mobile Notary Public",
    description: "Affidavit notary service in Fort Wayne for sworn statements and mobile document notarization by appointment throughout Northeast Indiana.",
    h1: "Affidavit Notary",
    intro: "After Hours Mobile Notary of Fort Wayne provides affidavit notary appointments for sworn statements and other eligible documents by appointment.",
    sectionTitle: "Mobile notarization for affidavits and sworn statements",
    body: [
      "Affidavit notary requests can come from families, individuals, businesses, healthcare settings, and correctional facility situations.",
      "Shawn can travel to homes, offices, hospitals, care facilities, and other approved locations for document notarization Fort Wayne residents can schedule by phone or text."
    ],
    bullets: ["Affidavit notary appointments", "Sworn statement notarization", "Same-day and after-hours requests when available", "Mobile notary Fort Wayne service"],
    note: "Do not sign the affidavit before the notary appointment unless you have been specifically instructed that doing so is appropriate.",
    related: ["mobile-notary-fort-wayne", "business-notary-services", "allen-county-jail-notary"]
  },
  {
    slug: "real-estate-document-notary",
    title: "Real Estate Document Notary Fort Wayne | Mobile Notary",
    description: "Real estate document notary appointments in Fort Wayne for mobile notarization by appointment at homes, offices, and local meeting locations.",
    h1: "Real Estate Document Notary",
    intro: "Shawn provides mobile notarization for eligible real estate documents by appointment in Fort Wayne, Allen County, and nearby Northeast Indiana communities.",
    sectionTitle: "Mobile notary appointments for real estate documents",
    body: [
      "Real estate document notary requests may involve time-sensitive signatures, local business needs, family transactions, or documents that require a notary public Fort Wayne residents can reach quickly.",
      "After Hours Mobile Notary of Fort Wayne can travel to homes, offices, and meeting locations when availability, signer readiness, and document requirements are confirmed."
    ],
    bullets: ["Real estate document notary appointments", "Office, home, and meeting-location service", "After-hours and weekend requests when available", "Local notary public service throughout Fort Wayne and Allen County"],
    note: "Some real estate transactions have lender, title, witness, or document-specific requirements. Confirm those requirements before scheduling.",
    related: ["business-notary-services", "mobile-notary-fort-wayne", "same-day-notary-fort-wayne"]
  }
];

const labels = Object.fromEntries(services.map((service) => [service.slug, service.h1]));

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function serviceUrl(slug) {
  return `${site}/services/${slug}.html`;
}

function nav() {
  return `
    <header class="site-header">
      <div class="nav-wrap">
        <a class="brand" href="../" aria-label="After Hours Mobile Notary of Fort Wayne home">
          <span class="brand-mark" aria-hidden="true">FW</span>
          <span class="brand-text">
            <strong>After Hours Mobile Notary</strong>
            <span>Fort Wayne, Indiana</span>
          </span>
        </a>
        <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M4 7h16M4 12h16M4 17h16"></path>
          </svg>
        </button>
        <nav class="nav-links" id="site-nav" data-nav aria-label="Main navigation">
          <a href="../#services">Services</a>
          <a href="../#healthcare">Healthcare</a>
          <a href="../#areas">Service Area</a>
          <a href="../#faq">FAQ</a>
          <a href="mailto:${email}">Email</a>
          <a class="nav-cta" href="tel:${phoneHref}">Call ${phoneDisplay}</a>
        </nav>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h2>After Hours Mobile Notary of Fort Wayne</h2>
          <p>Fort Wayne's after-hours mobile notary public for evenings, weekends, same-day requests, hospitals, senior care facilities, correctional facilities, businesses, and local residents.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <div class="footer-links">
            <a href="tel:${phoneHref}">Call or text ${phoneDisplay}</a>
            <a href="mailto:${email}">${email}</a>
          </div>
        </div>
        <div>
          <h3>Popular Services</h3>
          <div class="footer-links">
            <a href="after-hours-notary-fort-wayne.html">After-hours notary</a>
            <a href="hospital-notary-fort-wayne.html">Hospital notary</a>
            <a href="allen-county-jail-notary.html">Allen County jail notary</a>
            <a href="power-of-attorney-notary.html">Power of attorney notary</a>
          </div>
        </div>
      </div>
      <div class="container footer-small">
        <p>Serving Fort Wayne, Allen County, Leo-Cedarville, Auburn, DeKalb County, Huntertown, Grabill, New Haven, Woodburn, the Dupont Road area, the Parkview area, and Northeast Indiana.</p>
      </div>
    </footer>
    <div class="sticky-contact" aria-label="Mobile contact buttons">
      <a href="tel:${phoneHref}">Call</a>
      <a href="sms:${phoneHref}">Text</a>
      <a href="mailto:${email}">Email</a>
    </div>
    <script src="../assets/main.js" defer></script>`;
}

function schema(service) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${site}/#business`,
        name: "After Hours Mobile Notary of Fort Wayne",
        url: site,
        image: `${site}/IMG_4095.JPG`,
        telephone: phoneHref,
        email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fort Wayne",
          addressRegion: "IN",
          addressCountry: "US"
        },
        areaServed: ["Fort Wayne", "Allen County", "Leo-Cedarville", "Auburn", "Northeast Indiana"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: phoneHref,
          contactType: "customer service",
          email,
          areaServed: "Northeast Indiana"
        }
      },
      {
        "@type": "Service",
        "@id": `${serviceUrl(service.slug)}#service`,
        name: service.h1,
        serviceType: "Mobile notary public",
        description: service.description,
        provider: {
          "@id": `${site}/#business`
        },
        areaServed: "Fort Wayne, Allen County, Leo-Cedarville, Auburn, and Northeast Indiana",
        url: serviceUrl(service.slug)
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.h1,
            item: serviceUrl(service.slug)
          }
        ]
      }
    ]
  }, null, 2);
}

function relatedMarkup(service) {
  return service.related
    .map((slug) => `<a href="${slug}.html">${escapeHtml(labels[slug])}</a>`)
    .join("\n");
}

function page(service) {
  const paragraphs = service.body.map((text) => `<p>${escapeHtml(text)}</p>`).join("\n");
  const bullets = service.bullets.map((text) => `<li>${escapeHtml(text)}</li>`).join("\n");
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(service.title)}</title>
    <meta name="description" content="${escapeHtml(service.description)}">
    <link rel="canonical" href="${serviceUrl(service.slug)}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="After Hours Mobile Notary of Fort Wayne">
    <meta property="og:title" content="${escapeHtml(service.h1)}">
    <meta property="og:description" content="${escapeHtml(service.description)}">
    <meta property="og:url" content="${serviceUrl(service.slug)}">
    <meta property="og:image" content="${site}/IMG_4095.JPG">
    <link rel="stylesheet" href="../assets/styles.css">
    <script type="application/ld+json">${schema(service)}</script>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    ${nav()}

    <main id="main">
      <section class="page-hero" aria-labelledby="page-title">
        <div class="container">
          <p class="breadcrumbs"><a href="../">Home</a> / ${escapeHtml(service.h1)}</p>
          <p class="eyebrow">Mobile notary public in Fort Wayne</p>
          <h1 id="page-title">${escapeHtml(service.h1)}</h1>
          <p>${escapeHtml(service.intro)}</p>
          <div class="hero-actions" aria-label="Contact options">
            <a class="button primary" href="tel:${phoneHref}">Call or Text ${phoneDisplay}</a>
            <a class="button secondary" href="mailto:${email}">Email ${email}</a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container service-layout">
          <article class="content">
            <p class="section-kicker">Fort Wayne mobile notary</p>
            <h2>${escapeHtml(service.sectionTitle)}</h2>
            ${paragraphs}
            <h3>Common reasons to request this service</h3>
            <ul class="check-list">
              ${bullets}
            </ul>
            <div class="notice">
              <strong>Scheduling note:</strong> ${escapeHtml(service.note)}
            </div>
            <h2>What to have ready</h2>
            <p>For most mobile notary appointments, the signer should be present, willing to sign, and able to provide acceptable identification. The document should be complete and ready for notarization, with any facility access details confirmed before Shawn arrives.</p>
            <p>Call or text Shawn at <a href="tel:${phoneHref}">${phoneDisplay}</a> to request service in Fort Wayne, Allen County, Leo-Cedarville, Auburn, the Parkview area, the Dupont Road area, or another nearby Northeast Indiana community.</p>
            <div class="cta-row">
              <a class="button primary" href="tel:${phoneHref}">Need a notary now?</a>
              <a class="button outline" href="../#services">View all services</a>
            </div>
          </article>

          <aside class="sidebar" aria-labelledby="sidebar-heading">
            <h2 id="sidebar-heading">Request mobile notary service</h2>
            <p>Call or text Shawn to check availability for this Fort Wayne notary service.</p>
            <a class="button primary" href="tel:${phoneHref}">Call/Text ${phoneDisplay}</a>
            <a class="button outline" href="mailto:${email}">Email Shawn</a>
            <h3>Service area</h3>
            <p>Fort Wayne, North Fort Wayne, Leo-Cedarville, Auburn, Allen County, DeKalb County, Huntertown, Grabill, New Haven, Woodburn, Parkview area, Dupont Road area, and Northeast Indiana.</p>
            <h3>Related services</h3>
            <div class="related-links">
              ${relatedMarkup(service)}
            </div>
          </aside>
        </div>
      </section>

      <section class="section cta-band" aria-labelledby="cta-heading">
        <div class="container split">
          <div>
            <h2 id="cta-heading">Call or text Shawn to request mobile notary service.</h2>
            <p class="lead">After-hours notary help is available by appointment throughout Fort Wayne and surrounding Northeast Indiana communities.</p>
          </div>
          <div class="cta-row">
            <a class="button primary" href="tel:${phoneHref}">${phoneDisplay}</a>
            <a class="button secondary" href="mailto:${email}">${email}</a>
          </div>
        </div>
      </section>
    </main>

    ${footer()}
  </body>
</html>`;
}

await mkdir("services", { recursive: true });

for (const service of services) {
  await writeFile(`services/${service.slug}.html`, page(service));
}
