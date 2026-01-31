# Profile Feature

User profile and settings management interface.

## Components

### ProfilePageContent
Main container component that orchestrates the profile page layout.

**Features:**
- Responsive grid layout (sidebar + main content)
- Form submission handling
- Success toast notifications
- Cancel functionality

### ProfileSidebar
Navigation sidebar for profile sections.

**Sections:**
- Profile Settings (active)
- Password & Security
- Billing & Plans
- Notifications
- Exam History

**Features:**
- Active state highlighting
- Icon-based navigation
- Responsive design

### ProfileHeader
User profile header with avatar and basic info.

**Props:**
- `name`: User's full name
- `role`: User's role/program
- `location`: User's location
- `avatar`: Avatar image URL
- `isOnline`: Online status indicator

**Features:**
- Avatar upload button
- Online status indicator
- Responsive layout

### PersonalInfoForm
Form for personal information.

**Fields:**
- First name
- Last name
- Email (with verification indicator)
- Phone number (with +977 prefix)
- City/District (dropdown)
- Date of Birth

**Features:**
- Email verification status
- Phone number formatting
- Form validation
- Responsive grid layout

### EducationalBackgroundForm
Form for educational background.

**Fields:**
- Previous College/School Name
- Grade/GPA (+2)
- Passout Year (dropdown)
- Course Interests (checkboxes)

**Course Options:**
- Medical (CEE) - MBBS, BDS, B.Sc Nursing
- Engineering (IOE) - Civil, Computer, Electrical
- IT & Management - CSIT, BCA, BBA

**Features:**
- Multiple course selection
- Descriptive labels
- Responsive grid layout

## Usage

```tsx
import { ProfilePageContent } from '@/components/features/profile'

export default function ProfilePage() {
  return (
    <main className="flex-grow bg-gray-50">
      <ProfilePageContent />
    </main>
  )
}
```

## Design Patterns

### Colors
- Primary: `brand-navy` (#1A237E)
- Interactive: `brand-blue` (#0D47A1)
- CTA: `brand-gold` (#FFC107)
- Success: `success` (#2E7D32)

### Typography
- Headings: `font-heading` (Roboto)
- Body: `font-sans` (Inter)

### Form Components
Uses shared form components:
- `FormInput` - Text inputs with icons and validation
- `FormSelect` - Dropdown selects
- `Checkbox` - Checkbox inputs

### Responsive Breakpoints
- Mobile: < 640px (single column)
- Tablet: 640px - 1023px (2 columns for forms)
- Desktop: ≥ 1024px (sidebar + main content)

## State Management

Currently uses local component state. Can be integrated with:
- Zustand for global state
- React Query for server state
- Form libraries (React Hook Form, Formik)

## API Integration

TODO: Implement API calls for:
- Fetching user profile data
- Updating profile information
- Uploading avatar
- Form validation

## Accessibility

- Semantic HTML elements
- ARIA labels for icons
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Future Enhancements

- [ ] Form validation with error messages
- [ ] Avatar upload with preview
- [ ] Auto-save functionality
- [ ] Profile completion progress
- [ ] Additional profile sections
- [ ] Dark mode support
