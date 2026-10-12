# First Light: publication and updates

Repository: https://github.com/bamboriyaankit/camera_learnings

Site address: https://bamboriyaankit.github.io/camera_learnings/

First Light is a free photography learning guide for a Sony a6400 and Sigma
18–50mm lens. It contains thirty lessons, five shooting guides, sharing
advice, quizzes, and a notebook saved in your browser. The camera reference indexes 201 Sony topics and explains 91 entries. The remaining
110 menu explanations, editing lessons, and private photo uploads remain planned.

The camera-controls increment adds Auto/P, single/burst/timer/bracketing, custom buttons, Fn/My Menu and autofocus troubleshooting. Each lesson includes an exercise, quiz and Sony sources. Camera instructions have not yet been tested on the owner’s physical camera.

## Hosting

GitHub Pages publishes the **main branch, root folder (`/`)** using built-in
branch publishing. In **Settings → Pages → Build and deployment**, the source
is **Deploy from a branch**. No custom workflow, dependencies, paid plan, custom
domain, or token in website code is needed. `.nojekyll` keeps this a plain static
site. Public repositories support this on GitHub Free.

Both source files and learning pages are public. Notebook entries stay in each
visitor's browser; this is not an authenticated private cloud journal.

## Files and updates

The website consists of `index.html`, `styles.css`, `content.js`, `app.js`,
`beginner-foundations.md`, `.nojekyll`, and six PNGs under `images/`.
Push edits to `main` to republish. Check **Settings → Pages** and the repository's
deployment/Actions status, then open the site and verify the changed pages.
If an update breaks the site, revert its commit and push that revert.

For the original project workspace, `node scripts/prepare-pages.js` prepares an
explicitly allowlisted release under `.runtime/pages/`. Move any existing output
aside within the project before preparing a fresh release. The user's public
reuse permission for the six images was confirmed on 2026-10-11 and recorded in
local `publication.json`. Two misleading diagrams remain excluded.

The original workspace's `.git` entry is protected. Its publishing checkout is
`.runtime/github-repo/`, inside that workspace. Edit the main project files,
prepare the release, copy its files into the checkout, then review and commit.
Do not copy the entire workspace: browser profiles, private photos, downloaded
sources, progress exports, credentials, and planning records stay local.

The initial README was created using GitHub's API; the complete release uses
Git. No credential is stored in project or repository files.

## Move saved progress

Before switching from the local website, open **My notebook → Export progress
& notes**. On the published site, import that JSON file from **My notebook**.
Keep the backup locally and do not commit it to GitHub. Localhost and Pages use
different browser storage, and devices do not automatically sync. Project sites
under the same `bamboriyaankit.github.io` hostname share an origin; avoid hosting
another copy using the same storage key there.

## Verify a release

Check the home page, `#lesson/aperture`, sharing guides, My setup images, search,
and notebook. Mark a lesson and reload. Download a progress export and check
that importing it restores your notes. Also try the guide on your phone/tablet.
Draft content and planned stages remain labeled after publication.

## Official hosting documentation

- https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The capture-fluency and Composition & Light increment adds five lessons: the confirmed Sigma 18–50mm Sony E lens, Memory/My Dial/scenes, registered faces and Smile Shutter, composition, and available light. The learning path has three stages. General principles use Nikon sources, lens specifications use Sigma, and all camera-menu paths use Sony’s a6400 guide. Editing and cloud uploads remain deferred.

The exposure/flash/JPEG increment adds six lessons and eighteen menu explanations. Learn metering, exposure locking, built-in fill flash, Creative Style, DRO, Auto HDR and noise reduction, then try portrait, indoor and backlit assignments. Relevant exposure foundations were reviewed; other draft optics and physical-camera checks remain outstanding. Existing lesson IDs and notebook data remain compatible. The later Mac editing preparation roadmap remains in the project handoff; no editing software or cloud uploads are required here.
