# Roadmap

## Klaar (goedgekeurd plan)
- [x] AI-prompts: branding-sectie met officiële bunny-SVG + kleuren (integration-templates.ts + tests)
- [x] Mails: appCreatedMail (eigenaar) + verificationRequestedMail (admin) via site-mail.server.ts
- [x] Native OIDC-login: oidc-provider valt terug op eigen discovery + first-party publieke PKCE-client (db/78), label "ROUT ID"

## Daarna (nieuw verzoek)
- [ ] QR-persistentie: QR-stijl opslaan in profiles.qr_settings (jsonb), herladen in Studio
- [ ] Social share inspecteur: smart defaults (titel = naam (@handle) — ROUT, omschrijving = bio/tagline, OG-afbeelding = avatar), overschrijfbaar

## Daarna (dashboard & storage)
- [ ] Dashboard: "Laatste Bezoeken" pagineren/max 10-15 met "Toon meer"; dashboard herstructureren in tabs (QR, Short Links, Assets)
- [ ] QR-beheer: grid met scan-analytics, opnieuw downloaden, stijl bewerken
- [ ] Short Links: beheertabel met kliktellingen en bewerkbare bestemmings-URL's
- [ ] Scaleway-retentie: free 7 dagen (configureerbaar tot 3 mnd), PRO/verified "Lifetime" (50 assets / 500MB permanent); Asset Manager UI met verloopstatus, verwijderen, upgrade

## Deze ronde
- [x] sms-gate.app payload/auth, +32 automatisch, buitenland via inkomende sms (webhook /api/public/sms/inbound)
- [x] 2FA/passkey-foutmeldingen, samenvoegen zonder wachtwoord, profielscope (db/79), Glass Media Capsule + 🎧
- [ ] Telegram-bot verificatie + admin-wachtrij (niet gebouwd)
- [ ] Dashboard/QR/Short Links/Scaleway-retentie (niet gebouwd)
