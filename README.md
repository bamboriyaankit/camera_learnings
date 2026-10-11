# Publish First Light on GitHub Pages

Repository: https://github.com/bamboriyaankit/camera_learnings

## Hosting

Use the **public** repository on GitHub Free, `bamboriyaankit/camera_learnings`.
The expected project URL is `https://bamboriyaankit.github.io/camera_learnings/`.
Both repository files and learning pages will be public. The notebook remains
in each visitor's browser; it is not an authenticated private cloud journal.
No custom domain, paid plan, backend, or access token in site code is required.

## Before the first upload

1. Select the account/repository and public visibility.
2. The user confirmed public reuse permission for the supplied images on
   2026-10-11. `referenceImages` in `publication.json` is therefore `approved`.
   Any other value prevents deployment. Two other supplied diagrams are excluded
   because their annotations are misleading.
3. Prepare a fresh artifact with `node scripts/prepare-pages.js`. It writes only
   the site files to `.runtime/pages/`. If that directory already exists, move
   it aside within the project first. Keep all generated files inside this project.

The current workspace has a protected `.git` entry and is not a Git repository.
The initial release uses GitHub's API to create ordinary Git commits without
altering that entry. For future Git CLI updates, clone the repository into
`.runtime/github-repo/`, inside this project. Keep editing the main project files
and copy reviewed changes into that checkout before committing.

Copy only these files to the publishing checkout:

- `index.html`, `styles.css`, `content.js`, `app.js`, `beginner-foundations.md`
- `publication.json`, `scripts/prepare-pages.js`, `.github/workflows/pages.yml`
- `PUBLISHING.md` (also suitable as the public repository's `README.md`)
- If approved, only the six PNGs enumerated in `scripts/prepare-pages.js`

Do not copy the whole workspace. Local browser profiles, downloaded sources,
progress exports, private photos, environment files, and excluded diagrams have
no place in the public checkout. The build allowlist controls the deployed site;
it does not hide files committed to the public repository.

## Enable deployment

1. Create the selected public GitHub repository. Push the prepared checkout to
   its `main` branch using your own GitHub authentication. Do not paste tokens
   into chat or store them in repository files.
2. In the repository, open **Settings → Pages → Build and deployment → Source**
   and select **GitHub Actions**.
3. Open **Actions → Publish First Light → Run workflow** if the initial run
   preceded Pages configuration. Later pushes to `main` deploy automatically.
4. Wait for build and deployment to succeed, then open the URL shown by the
   deployment. Its actual hostname/path depends on the chosen repository.

Use ordinary Git commits for updates. To recover a bad deployment, revert the
offending commit and push the revert; the workflow publishes the restored files.

## Move saved progress

Before switching, open the local site's **My notebook** and export progress.
On the published site, open **My notebook** and import that JSON file. Keep the
export locally; do not add it to the repository. Localhost and GitHub Pages use
different browser storage. Progress also does not automatically sync between
devices. Project sites under the same `USERNAME.github.io` hostname share an
origin; avoid hosting another copy with the same storage key there.

## Verify the release

Open the actual Pages URL and a bookmarked `#lesson/aperture` URL. Check the
home page, learning path, sharing guides, search, and My setup. Mark a lesson,
reload, then export/import a backup and check its contents. Check on the phone
and tablet too. Draft lessons and planned stages remain labeled; publication
does not mean the complete menu reference or private uploads are finished.

## Official documentation

- https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
