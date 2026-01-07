# Projects Page Implementation Plan

## Overview
This document outlines the complete implementation plan for the Projects page based on the provided design mockup.

## Design Analysis

### Layout Structure
1. **Header** (Already exists in layout)
   - Logo/Name with `{}` icon
   - Navigation: Home, About, Work (Projects), Contact
   - "Get In Touch" button (already implemented as "Hire Me")

2. **Main Content Area**
   - Left Sidebar: Filter section
   - Right Content: Project grid

3. **Footer** (Already exists in layout)
   - Social media icons
   - Copyright text

### Components Needed

#### 1. SideNav Component (`src/components/projects/SideNav.tsx`)
   - **Purpose**: Filter sidebar for filtering projects by technology/type
   - **Features**:
     - Filter options: "All", "Web App", "E-commerce", "React", "Vue", etc.
     - Icons for each filter option
     - Active state highlighting
     - Responsive: Hidden on mobile, shown on desktop
   - **State Management**: 
     - Selected filter state
     - Filter change handler
   - **Styling**:
     - Dark theme compatible
     - Vertical list layout
     - Active filter highlighted with darker background

#### 2. ProjectCard Component (`src/components/projects/ProjectCard.tsx`)
   - **Purpose**: Individual project card display
   - **Features**:
     - Project image (with fallback/placeholder)
     - Project name
     - Technology tags (pills/badges)
     - Hover effects
   - **Props**:
     - `project`: Project object from constants
     - `index`: For image selection (if using image array)
   - **Styling**:
     - Rounded corners
     - Image overlay or gradient
     - Tech tags as gray pills
     - Responsive image sizing

#### 3. ProjectGrid Component (`src/components/projects/ProjectGrid.tsx`)
   - **Purpose**: Grid container for project cards
   - **Features**:
     - Responsive grid layout
     - 3 columns on desktop, 2 on tablet, 1 on mobile
     - Filter logic integration
   - **Props**:
     - `projects`: Array of filtered projects
   - **Styling**:
     - CSS Grid or Flexbox
     - Gap between cards
     - Responsive breakpoints

#### 4. ProjectsPage Component (`src/app/(site)/projects/page.tsx`)
   - **Purpose**: Main page component
   - **Features**:
     - Page title: "Selected Work"
     - Subtitle: "A selection of my best projects, showcasing my skills in front-end development."
     - Filter state management
     - Integration of SideNav and ProjectGrid
   - **Layout**:
     - Sidebar + Main content flex layout
     - Responsive: Stack on mobile

## Filter Logic

### Filter Categories
Based on projects in constants.tsx, we'll create filters for:
- **All**: Show all projects
- **E-commerce**: Filter by projects containing "E-Commerce" or "e-commerce" in name/description
- **Next.js**: Filter by projects with "Next.js" in techStack
- **React**: Filter by projects with "React" in techStack
- **TypeScript**: Filter by projects with "TypeScript" in techStack
- **Full Stack**: Filter by projects with backend technologies (PostgreSQL, Prisma, etc.)

### Filter Implementation
- Extract unique technologies from all projects
- Create filter buttons dynamically or statically
- Filter function: `filterProjects(projects, selectedFilter)`

## Responsive Design Breakpoints

### Desktop (≥1024px)
- Sidebar: Fixed width (~250px)
- Grid: 3 columns
- Full layout visible

### Tablet (768px - 1023px)
- Sidebar: Collapsible or horizontal filter bar
- Grid: 2 columns
- Adjusted spacing

### Mobile (<768px)
- Sidebar: Hidden or converted to dropdown/accordion
- Grid: 1 column
- Stacked layout

## Styling Approach

### Color Scheme
- Background: Dark blue-gray (#101622) - already in globals.css
- Cards: Dark card background with border
- Text: White/light gray
- Accents: Primary blue (#135bec)
- Tags: Gray pills with dark background

### Typography
- Title: Large, bold white text
- Subtitle: Medium, lighter gray text
- Project names: Medium, bold
- Tags: Small, regular

### Icons
- Use react-icons for filter icons
- Grid icon for "All"
- Document icon for "Web App"
- Shopping cart for "E-commerce"
- Technology-specific icons for tech filters

## File Structure

```
src/
├── app/
│   └── (site)/
│       └── projects/
│           └── page.tsx          # Main page component
├── components/
│   └── projects/
│       ├── SideNav.tsx           # Filter sidebar
│       ├── ProjectCard.tsx       # Individual project card
│       ├── ProjectGrid.tsx       # Grid container
│       └── index.ts              # Barrel export (optional)
└── lib/
    └── constants.tsx             # Project data (already exists)
```

## Implementation Steps

1. ✅ Create plan document
2. ⬜ Create filter logic utility function
3. ⬜ Implement SideNav component with filters
4. ⬜ Implement ProjectCard component
5. ⬜ Implement ProjectGrid component
6. ⬜ Implement main ProjectsPage component
7. ⬜ Add responsive styles
8. ⬜ Test filtering functionality
9. ⬜ Test responsive behavior
10. ⬜ Add placeholder images or image handling

## Technical Considerations

### Image Handling
- Projects have empty `imgURL` strings
- Options:
  1. Use placeholder images (e.g., from placeholder.com or unsplash)
  2. Create a default project image
  3. Use gradient backgrounds with project name
  4. Wait for actual images to be added

### State Management
- Use React useState for filter state
- Client component needed for interactivity
- Consider URL params for filter state (optional enhancement)

### Performance
- Use Next.js Image component for optimization
- Lazy load images below fold
- Memoize filter function if needed

## Accessibility

- Semantic HTML
- ARIA labels for filters
- Keyboard navigation support
- Focus states for interactive elements
- Alt text for images

## Testing Checklist

- [ ] All projects display correctly
- [ ] Filter "All" shows all projects
- [ ] Each filter works correctly
- [ ] Responsive layout works on mobile
- [ ] Responsive layout works on tablet
- [ ] Responsive layout works on desktop
- [ ] Dark mode works correctly
- [ ] Hover states work
- [ ] Images load/display correctly
- [ ] No console errors

## Future Enhancements (Optional)

- Project detail modal/page
- Search functionality
- Sort by date/name
- Animation on filter change
- URL-based filter state
- Project categories/tags
- Project links (GitHub, Live Demo)

