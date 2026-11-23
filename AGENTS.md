# Faith Angelica

Static copy of the Faith Angelica site. This copy is not the live website. It has no custom domain and no PIN gate. Do not add either one.

## Hosting

- GitHub repository: public `ecotto7/faithangelica` on branch `main`. Static files live at the repo root. There is no build step.
- Netlify team: Gonzo Systems. The team slug is `ecotto7`. Do not create or move the site on any other Netlify account.
- Netlify site name: `faithangelica`, so the public address is `https://faithangelica.netlify.app`.
- The site is imported from GitHub with an empty build command and publish directory `.`. `netlify.toml` stays at the repo root with `publish = "."`.
- Deploys happen only by pushing to `main`. Do not run `netlify deploy`, `netlify deploy --prod`, or a deploy through the Netlify tools unless explicitly asked. Each production deploy costs 15 credits from a shared 300-per-month pool, and if that pool runs out every site on the team pauses.
- Do not add `faithangelica.com` or any other custom domain. Do not turn on Netlify DNS or change any nameservers.

## Forms

Forms stay on their existing provider. Do not use Netlify Forms. Do not add `data-netlify`, a form-name field, or a honeypot. The current pages have no embedded form. Contact is the mailto link `music@faithangelica.com`. If a form is added later, copy the existing provider's embed, form id, and script, and allow that host in the content security policy.

## Pages

The pages are Home, Songwriting, Singing, Demos, Web Design, Wedding Coordination, and Graphic Design. There is no posts sitemap. Do not invent pages.

Pages use folder URLs: `/songwriting/` is `songwriting/index.html`. Do not rename or move a page without a 301 in `netlify.toml`.

Keep the wording on the pages. Keep mailto links as mailto links. Keep the album covers and the links that play the music. Do not download or rehost the audio.

The footer is the yellow bar with the logo and icon links. It has no year. Do not add one.
