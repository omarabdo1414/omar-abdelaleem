# Projects Page Documentation

## Overview
The Projects page (`/projects`) displays a filtered grid of portfolio projects with a sidebar filter navigation. It's fully responsive and supports dark mode.

## File Structure

```
src/
├── app/
│   └── (site)/
│       └── projects/
│           └── page.tsx                    # Main page component
├── components/
│   └── projects/
│       ├── SideNav.tsx                     # Filter sidebar component
│       ├── ProjectCard.tsx                 # Individual project card
│       └── ProjectGrid.tsx                 # Grid container component
└── lib/
    ├── constants.tsx                       # Project data source
    └── projectFilters.ts                   # Filter logic and types
```

## Components

### 1. ProjectsPage (`src/app/(site)/projects/page.tsx`)
**Purpose**: Main page component that orchestrates the projects display.

**Features**:
- Page title: "Selected Work"
- Subtitle describing the project selection
- State management for selected filter
- Layout with sidebar and main content area

**State**:
- `selectedFilter`: Current active filter (default: "All")
- `filteredProjects`: Computed filtered project list

**Layout**:
- Responsive flex layout
- Sidebar on left (desktop) / top (mobile)
- Grid content area on right (desktop) / below (mobile)

---

### 2. SideNav (`src/components/projects/SideNav.tsx`)
**Purpose**: Filter sidebar for filtering projects by technology/type.

**Props**:
- `selectedFilter`: Currently active filter
- `onFilterChange`: Callback function when filter changes

**Features**:
- Filter options with icons:
  - **All** (Grid icon) - Shows all projects
  - **E-commerce** (Shopping cart icon) - E-commerce projects
  - **Next.js** (Code icon) - Next.js projects
  - **React** (Code icon) - React projects
  - **TypeScript** (Type icon) - TypeScript projects
  - **Full Stack** (Database icon) - Full-stack projects
  - **Web App** (Globe icon) - All web applications

**Responsive Behavior**:
- **Desktop (≥1024px)**: Vertical sidebar, sticky positioning
- **Mobile/Tablet (<1024px)**: Horizontal scrollable filter bar

**Styling**:
- Active filter highlighted with primary color background
- Hover effects on filter buttons
- Icons change color based on active state

---

### 3. ProjectCard (`src/components/projects/ProjectCard.tsx`)
**Purpose**: Displays individual project information in a card format.

**Props**:
- `project`: Project object from constants
- `index`: Optional index for gradient generation

**Features**:
- Project image display (with fallback gradient if no image)
- Project name
- Technology stack tags (pills/badges)
- Hover effects (scale, shadow, border highlight)

**Image Handling**:
- Uses Next.js Image component for optimization
- If `imgURL` is empty, displays gradient background with project initial
- Responsive image sizing

**Styling**:
- Rounded corners
- Border on hover
- Shadow effects
- Gradient overlays

---

### 4. ProjectGrid (`src/components/projects/ProjectGrid.tsx`)
**Purpose**: Grid container for project cards.

**Props**:
- `projects`: Array of filtered projects to display

**Features**:
- Responsive grid layout:
  - **Mobile**: 1 column
  - **Tablet (≥768px)**: 2 columns
  - **Desktop (≥1024px)**: 3 columns
- Empty state message when no projects match filter

**Grid Configuration**:
- Uses CSS Grid
- Gap spacing between cards
- Responsive breakpoints

---

## Filter Logic (`src/lib/projectFilters.ts`)

### Filter Types
```typescript
type FilterType = "All" | "E-commerce" | "Next.js" | "React" | "TypeScript" | "Full Stack" | "Web App"
```

### Filter Function
`filterProjects(projects: Project[], filter: FilterType): Project[]`

**Filtering Rules**:
- **All**: Returns all projects
- **E-commerce**: Matches projects with "e-commerce" or "ecommerce" in name/description
- **Next.js**: Matches projects with "Next.js" or "nextjs" in techStack
- **React**: Matches projects with "React" in techStack (case-insensitive)
- **TypeScript**: Matches projects with "TypeScript" in techStack
- **Full Stack**: Matches projects with backend technologies (PostgreSQL, Prisma, Node.js, Express, Supabase)
- **Web App**: Returns all projects (all are web apps)

---

## Data Source

Projects are imported from `src/lib/constants.tsx`:
- `Projects`: Array of all projects
- Each project has:
  - `name`: Project name
  - `techStack`: Array of technology names
  - `description`: Array of description strings
  - `imgURL`: Image URL (can be empty string)

---

## Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

### Layout Changes

#### Mobile (< 768px)
- Sidebar becomes horizontal scrollable filter bar
- Grid: 1 column
- Full-width cards
- Stacked layout

#### Tablet (768px - 1023px)
- Sidebar remains horizontal or can be toggled
- Grid: 2 columns
- Medium spacing

#### Desktop (≥ 1024px)
- Sidebar: Fixed width (256px), sticky positioning
- Grid: 3 columns
- Full layout with sidebar and content side-by-side

---

## Styling

### Color Scheme
- **Background**: Uses theme background color (`bg-background`)
- **Cards**: Card background with borders (`bg-card`, `border-border`)
- **Text**: Foreground color (`text-foreground`)
- **Primary**: Blue accent (`#135bec`)
- **Tags**: Muted background with border

### Typography
- **Title**: 4xl-6xl, bold
- **Subtitle**: lg-xl, muted color
- **Project Names**: lg-xl, semibold
- **Tags**: xs, regular

### Effects
- Hover transitions on cards
- Scale effects on images
- Shadow effects on hover
- Border color changes

---

## Dark Mode Support

All components support dark mode through:
- Tailwind `dark:` variants
- CSS variables from theme
- Automatic color adjustments

---

## Accessibility

- Semantic HTML elements (`<aside>`, `<nav>`, `<button>`)
- ARIA labels on filter buttons (`aria-label`, `aria-pressed`)
- Keyboard navigation support
- Focus states on interactive elements
- Alt text for images

---

## Performance Optimizations

1. **Next.js Image Component**: Optimized image loading
2. **Client-Side Filtering**: Fast filter updates without server requests
3. **Responsive Images**: Proper `sizes` attribute for optimal loading
4. **CSS Transitions**: Hardware-accelerated animations

---

## Usage Example

```tsx
import ProjectsPage from "@/app/(site)/projects/page";

// The page is automatically routed at /projects
// No additional setup needed
```

---

## Future Enhancements

Potential improvements:
1. **Project Detail Modal**: Click card to see full project details
2. **Search Functionality**: Search projects by name/description
3. **Sort Options**: Sort by name, date, technology
4. **URL State**: Sync filter state with URL parameters
5. **Animation**: Smooth transitions when filters change
6. **Project Links**: Add GitHub and live demo links
7. **Image Gallery**: Multiple images per project
8. **Category Tags**: Additional categorization

---

## Testing Checklist

- [x] All projects display correctly
- [x] Filter "All" shows all projects
- [x] Each filter works correctly
- [x] Responsive layout works on mobile
- [x] Responsive layout works on tablet
- [x] Responsive layout works on desktop
- [x] Dark mode works correctly
- [x] Hover states work
- [x] Images load/display correctly (with fallbacks)
- [x] No console errors

---

## Dependencies

- **Next.js**: Framework
- **React**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Lucide React**: Icons
- **react-icons**: Additional icons (if needed)

---

## Notes

- Projects without images display a gradient background with the project initial
- Filter state is managed locally (not persisted in URL)
- All components are client components for interactivity
- The page uses the existing layout with Header and Footer

