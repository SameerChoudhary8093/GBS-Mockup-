<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
# Project: SGVU University Landing Page

## Stack
- React + TypeScript + Vite + Tailwind CSS
- shadcn/ui components (accordion, badge, button, card, checkbox, input, separator)
- No router — single-page with smooth scroll navigation

## Key Colors
- Navy: `#0d244b` (primary dark)
- Gold: `#c1963f` (accent)
- Light blue gradient: `rgba(26,69,155,0.9)`

## Section IDs (for scroll navigation)
hero, rankings, student-success, programs, research, scholarship, campus-life, footer

## Navigation Pattern
- Top utility bar (hidden on mobile)
- Sticky nav with hamburger (useState) for mobile
- Active section tracked via IntersectionObserver in Body.tsx
- scrollToSection() helper used across nav, footer, CTA buttons

## Form Pattern (HeroBannerSection)
- Custom dropdown components (no select element) using useState + absolute positioned ul
- Validation on submit, per-field error messages below inputs
- Success state replaces form with confirmation card

## Responsive Breakpoints Used
- `md:` for desktop nav vs hamburger
- `lg:` for side-by-side vs stacked hero layout
- `sm:` for button rows, profile card grid

## File Structure
- All sections in src/screens/Body/sections/{SectionName}/
- Body.tsx orchestrates layout, nav state, section IDs
</coder>
