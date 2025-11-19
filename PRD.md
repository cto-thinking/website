# Product Requirements Document (PRD)

## IMOVERTHINKN

---

## 1. Product Overview

**Product Name:** IMOVERTHINKN  
**Tagline:** Structure your spiral. Decide with clarity.  
**Version:** 0.0.0  
**Last Updated:** November 3, 2025

### 1.1 Product Vision

IMOVERTHINKN is a psychologically-backed AI chat application designed to help users structure their spiraling thoughts into actionable decisions. The platform honors the depth of users' contemplation while breaking through analysis paralysis, providing clarity for those who overthink.

### 1.2 Target Audience

- Individuals experiencing analysis paralysis
- People struggling with decision-making
- Users who find themselves in thought spirals
- Anyone seeking structured guidance for complex personal decisions

---

## 2. Core Features

### 2.1 Conversational AI Interface

#### 2.1.1 Chat Messaging System

**Description:** Real-time conversational interface for users to interact with the AI assistant.

**Functional Requirements:**

- Users can type and send text messages
- Messages are displayed in a chat-style interface
- User messages appear on the right side with blue background
- Assistant messages appear on the left side with gray background
- Messages support multi-line text input
- Messages preserve whitespace and line breaks
- Message history persists during the session
- Automatic scrolling to latest message

**Technical Implementation:**

- React-based component with TypeScript
- State management using React hooks (useState)
- Message interface with id, text, and sender properties
- Unique message IDs using timestamp-based generation

**User Experience:**

- Maximum message width: 80% of container
- Rounded message bubbles for modern aesthetic
- Smooth scrolling behavior
- Visual distinction between user and assistant messages

---

### 2.2 Text Input System

#### 2.2.1 Multi-line Textarea

**Description:** Flexible text input area for composing messages.

**Functional Requirements:**

- Expandable textarea (min: 52px, max: 200px)
- Placeholder text: "Share what's on your mind..."
- Auto-resize based on content
- Clear input after sending
- Disable input while processing
- Submit button with send icon

**Keyboard Shortcuts:**

- **Enter:** Send message
- **Shift + Enter:** Create new line

**Visual Feedback:**

- Helper text displays keyboard shortcuts
- Button disabled state when input is empty or processing
- Send button changes color on hover (blue to darker blue)
- Disabled state shows gray background

---

### 2.3 Welcome Screen

#### 2.3.1 Landing Page Content

**Description:** Initial screen displayed when no messages exist.

**Content Elements:**

1. **Main Heading:** "Welcome to IMOVERTHINKN"
2. **Description:** "Psychologically-backed AI that structures your spiraling thoughts into decisions—honoring your depth while breaking through paralysis."
3. **Three Feature Cards:**

**Feature Card 1: "HELP, I'M SPIRALING"**

- Use case: For when your thoughts won't stop circling
- Visual: Card with border and background

**Feature Card 2: "WHAT SHOULD I DO?"**

- Use case: For decisions that matter and feel impossible
- Visual: Card with border and background

**Feature Card 3: "THE WHAT IF"**

- Use case: For exploring scenarios without getting stuck
- Visual: Card with border and background

**Layout:**

- Centered content
- Grid layout (1 column on mobile, 3 columns on desktop)
- Responsive spacing and padding
- Maximum width: 3xl (48rem)

---

### 2.4 Authentication System

#### 2.4.1 User Avatar & Dropdown Menu

**Description:** Avatar button that opens authentication options.

**Functional Requirements:**

- Circular avatar button in header
- Displays "?" when logged out, "U" when logged in
- Gradient background (blue to purple)
- Click to toggle dropdown menu
- Click outside to close dropdown
- Focus ring for accessibility

**Dropdown Menu Content:**

1. **Login with Google**

   - Google logo icon
   - "Login with Google" text
   - Hover effect (gray background)
   - Click handler (placeholder implementation)

2. **Signup with Google**
   - Google logo icon
   - "Signup with Google" text
   - Hover effect (gray background)
   - Click handler (placeholder implementation)
   - Separator divider between login and signup

**Visual Design:**

- Dropdown width: 264px
- White background with shadow
- Border styling
- Positioned absolute, right-aligned
- Z-index: 50 for proper layering

**Interaction Behavior:**

- Dropdown only shows when user is not logged in
- Automatically closes after selection
- Closes when clicking outside the dropdown area

**Current Status:**

- ⚠️ Authentication logic not yet implemented (TODO)
- UI components fully functional
- Console logging for testing purposes

---

### 2.5 Application Header

#### 2.5.1 Navigation Bar

**Description:** Fixed header with branding and user controls.

**Components:**

- **Logo/Brand Name:** "IMOVERTHINKN" (text-xl, font-semibold)
- **Tagline:** "Structure your spiral. Decide with clarity."
- **User Avatar:** Right-aligned avatar button

**Styling:**

- Border bottom separator
- Maximum width: 4xl (56rem)
- Centered content
- Padding: 4 (1rem) on all sides
- Responsive layout (flex with space-between)

---

### 2.6 Processing State Indicator

#### 2.6.1 Loading Animation

**Description:** Visual feedback during message processing.

**Functional Requirements:**

- Displays while AI is "thinking"
- Located in message area on left side
- Three animated dots
- Bouncing animation with staggered timing

**Animation Details:**

- Dot size: 2x2 (8px)
- Color: Gray (400)
- Animation: Bounce
- Timing: 0s, 0.1s, 0.2s delays

**Trigger Conditions:**

- Shows when isProcessing state is true
- Currently triggered with 500ms simulated delay

---

### 2.7 Dark Mode Support

#### 2.7.1 Theme System

**Description:** Full dark mode styling throughout the application.

**Supported Elements:**

- Background colors (white/gray-900)
- Text colors (gray-900/white)
- Border colors (gray-200/gray-700)
- Message bubbles (gray-100/gray-800)
- Input fields (white/gray-800)
- Placeholder text (gray-500/gray-400)
- Dropdown menus (white/gray-800)
- Feature cards (gray-50/gray-800)

**Implementation:**

- Tailwind CSS dark: prefix classes
- System preference detection (implicit)
- Consistent color palette across all components

---

## 3. User Interface Specifications

### 3.1 Layout Structure

```
┌─────────────────────────────────────┐
│           HEADER                    │
│  [Logo/Tagline]      [Avatar]       │
├─────────────────────────────────────┤
│                                     │
│      MESSAGES CONTAINER             │
│      (scrollable)                   │
│                                     │
│  [Welcome Screen / Chat Messages]   │
│                                     │
│                                     │
├─────────────────────────────────────┤
│      INPUT CONTAINER                │
│  [Textarea]              [Send]     │
│  [Helper Text]                      │
└─────────────────────────────────────┘
```

### 3.2 Responsive Design

- **Desktop:** Maximum width 4xl (896px)
- **Mobile:** Full width with padding
- **Grid Layout:** 1 column (mobile) → 3 columns (md+)

### 3.3 Color Palette

#### Light Mode

- Background: White
- Text: Gray-900
- Primary: Blue-600
- Secondary: Gray-100
- Border: Gray-200

#### Dark Mode

- Background: Gray-900
- Text: White
- Primary: Blue-600
- Secondary: Gray-800
- Border: Gray-700

### 3.4 Typography

- **Font Family:** System font stack (-apple-system, BlinkMacSystemFont, 'Segoe UI', etc.)
- **Headings:**
  - H1: text-xl (20px), font-semibold
  - H2: text-3xl (30px), font-bold
  - H3: font-semibold
- **Body Text:** Default size, regular weight
- **Small Text:** text-sm (14px), text-xs (12px)
- **Smoothing:** Antialiased

---

## 4. Technical Architecture

### 4.1 Technology Stack

**Frontend Framework:**

- React 19.1.1
- TypeScript 5.9.3
- Vite 7.1.7 (build tool)

**Styling:**

- Tailwind CSS 3.4.18
- PostCSS 8.5.6
- Autoprefixer 10.4.21

**Code Quality:**

- ESLint 9.36.0
- TypeScript ESLint 8.45.0
- React Hooks ESLint Plugin 5.2.0

### 4.2 Component Architecture

**Main App Component (App.tsx)**

- Single-page application structure
- Functional component with hooks
- Local state management (no external state library)

**State Management:**

- `messages`: Array of Message objects
- `inputValue`: String for textarea content
- `isProcessing`: Boolean for loading state
- `isDropdownOpen`: Boolean for menu visibility
- `isLoggedIn`: Boolean for authentication status

**Refs:**

- `messagesEndRef`: For auto-scrolling
- `dropdownRef`: For click-outside detection

### 4.3 Data Models

```typescript
interface Message {
  id: number;
  text: string;
  sender: "user" | "assistant";
}
```

### 4.4 Key React Hooks Usage

**useEffect #1 - Auto Scroll**

- Dependency: [messages]
- Purpose: Scroll to bottom when messages change

**useEffect #2 - Click Outside**

- Dependency: [isDropdownOpen]
- Purpose: Close dropdown when clicking outside
- Cleanup: Remove event listener

---

## 5. Feature Status & Roadmap

### 5.1 Implemented Features ✅

- [x] Chat interface UI
- [x] Message sending and display
- [x] Multi-line text input
- [x] Keyboard shortcuts (Enter/Shift+Enter)
- [x] Welcome screen with feature cards
- [x] User avatar button
- [x] Authentication dropdown menu UI
- [x] Dark mode styling
- [x] Loading animation
- [x] Auto-scroll to latest message
- [x] Click-outside dropdown close
- [x] Responsive design

### 5.2 Pending Implementation ⚠️

- [ ] Google OAuth integration (Login)
- [ ] Google OAuth integration (Signup)
- [ ] Actual AI backend integration
- [ ] User session management
- [ ] Message persistence
- [ ] User profile display
- [ ] Authentication state persistence

### 5.3 Current Limitations

1. **Echo Response:** Assistant currently echoes user input (line 62)
2. **No Backend:** No API integration for AI responses
3. **No Authentication:** Google login/signup are placeholder functions
4. **No Persistence:** Messages cleared on page refresh
5. **Single Session:** No multi-session support
6. **No Error Handling:** No network error management

---

## 6. User Flows

### 6.1 First-Time User Flow

1. User lands on welcome screen
2. Reads value proposition and use cases
3. Types message in input field
4. Presses Enter or clicks Send button
5. User message appears on right
6. Loading animation displays
7. Assistant response appears on left (currently echo)
8. Conversation continues

### 6.2 Authentication Flow (Planned)

1. User clicks avatar button
2. Dropdown menu appears
3. User selects "Login with Google" or "Signup with Google"
4. Google OAuth flow initiates (not yet implemented)
5. User authenticates
6. Returns to app with authenticated state
7. Avatar displays user initial ("U")
8. Dropdown no longer shows (user is logged in)

### 6.3 Message Input Flow

1. User clicks in textarea
2. Types message content
3. Can press Shift+Enter for new lines
4. Send button enables when text is present
5. Presses Enter or clicks Send
6. Input clears immediately
7. Message appears in chat
8. Processing state shows loading animation
9. Response appears after delay

---

## 7. Accessibility Features

### 7.1 Keyboard Navigation

- Tab navigation supported
- Enter key to send messages
- Escape key could close dropdown (not yet implemented)
- Focus states on interactive elements

### 7.2 Visual Accessibility

- Focus ring on avatar button (ring-2, ring-blue-500)
- Focus ring on input field
- Color contrast for readability
- Disabled states clearly indicated

### 7.3 Semantic HTML

- Proper form element usage
- Button elements for actions
- Header element for navigation
- Textarea for multi-line input

---

## 8. Performance Considerations

### 8.1 Optimizations

- React.StrictMode enabled
- Smooth scrolling with behavior: 'smooth'
- Conditional rendering (welcome screen vs messages)
- Event listener cleanup in useEffect

### 8.2 Build Configuration

- Vite for fast development and builds
- TypeScript for type safety
- SWC for fast compilation (@vitejs/plugin-react-swc)
- Tree shaking enabled

---

## 9. Security Considerations

### 9.1 Current State

- No sensitive data handling yet
- No API keys in frontend code
- No XSS vulnerabilities (React escaping)

### 9.2 Future Requirements

- Secure OAuth implementation
- HTTPS for production
- Content Security Policy
- Rate limiting for API calls
- Input sanitization (if needed)
- Session management security

---

## 10. Development Guidelines

### 10.1 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### 10.2 Code Style

- TypeScript strict mode
- Functional components with hooks
- Props typing with TypeScript interfaces
- Tailwind CSS for styling
- No inline styles (except dynamic values)

---

## 11. Future Enhancements

### 11.1 Planned Features

1. **AI Integration**

   - Connect to AI backend (OpenAI, Anthropic, or custom)
   - Stream responses in real-time
   - Context-aware conversations
   - Psychological frameworks integration

2. **User Management**

   - Complete Google OAuth
   - User profiles
   - Session persistence
   - Conversation history

3. **Enhanced UX**

   - Message editing
   - Message deletion
   - Conversation export
   - Markdown support in messages
   - Code syntax highlighting
   - Copy message functionality

4. **Analytics**

   - Usage tracking
   - Conversation analytics
   - Decision outcome tracking
   - User engagement metrics

5. **Additional Features**
   - Multiple conversation threads
   - Conversation templates
   - Guided decision frameworks
   - Progress visualization
   - Mobile app version

---

## 12. Success Metrics

### 12.1 Key Performance Indicators (KPIs)

- User engagement rate
- Average conversation length
- Decision completion rate
- User retention (7-day, 30-day)
- Time to first decision
- User satisfaction score

### 12.2 Technical Metrics

- Page load time
- Time to interactive
- API response time
- Error rate
- Uptime percentage

---

## 13. Dependencies

### 13.1 Production Dependencies

- react: ^19.1.1
- react-dom: ^19.1.1

### 13.2 Development Dependencies

- @eslint/js: ^9.36.0
- @types/node: ^24.6.0
- @types/react: ^19.1.16
- @types/react-dom: ^19.1.9
- @vitejs/plugin-react-swc: ^4.1.0
- autoprefixer: ^10.4.21
- eslint: ^9.36.0
- eslint-plugin-react-hooks: ^5.2.0
- eslint-plugin-react-refresh: ^0.4.22
- globals: ^16.4.0
- postcss: ^8.5.6
- tailwindcss: ^3.4.18
- typescript: ~5.9.3
- typescript-eslint: ^8.45.0
- vite: ^7.1.7

---

## 14. Deployment Considerations

### 14.1 Build Process

- TypeScript compilation
- Vite bundling
- CSS optimization
- Tree shaking
- Minification

### 14.2 Hosting Requirements

- Static file hosting (Vercel, Netlify, etc.)
- CDN for assets
- HTTPS required
- Environment variables for API keys (future)

---

## 15. Support & Maintenance

### 15.1 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ support required
- No IE11 support

### 15.2 Maintenance Plan

- Regular dependency updates
- Security patches
- Bug fixes
- Feature additions based on user feedback

---

## 16. Conclusion

IMOVERTHINKN is a thoughtfully designed conversational AI application with a clear purpose: helping users break through analysis paralysis and make decisions with clarity. The current implementation provides a solid foundation with a polished UI, while the architecture allows for seamless integration of backend services and advanced AI capabilities.

The application's psychology-backed approach, combined with an intuitive and empathetic interface, positions it uniquely in the decision-making assistance space. Future developments will focus on completing the authentication system, integrating AI capabilities, and enhancing user experience based on real-world usage patterns.

---

**Document Version:** 1.0  
**Created:** November 3, 2025  
**Status:** Initial Release  
**Next Review:** After backend integration
