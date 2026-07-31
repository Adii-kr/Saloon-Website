# SaloonX — Premium Men's Grooming & Barbershop

A professional, fully-responsive salon website with online appointment booking, dynamic animations, and performance optimization. Built with Bootstrap 5, vanilla JavaScript, and FormSubmit email integration.

## Features

- **Responsive Design** — Mobile-first approach, works beautifully on all devices
- **Professional Service Cards** — Showcase Hair Style, Shaving, Beard Trim, and Hair Spa with hover animations
- **Image Carousel Gallery** — Showcases the salon's atmosphere with smooth transitions
- **"Why Choose Us" Stats** — Animated counters for customers, years in business, satisfaction rate
- **Online Appointment Booking** — Fully functional form with validation and email notifications
- **Dynamic Styling** — Gradient backgrounds, smooth animations, hover effects
- **Back-to-Top Button** — Smooth scroll to top on click
- **SEO-Optimized** — Meta tags, Open Graph, structured markup for better search visibility
- **Accessible** — Semantic HTML, ARIA labels, keyboard-navigable
- **Performance** — Lazy-loaded images, optimized assets, fast load times

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom styles, animations, responsive design
- **JavaScript (ES6+)** — Form handling, animations, DOM interactions
- **Bootstrap 5** — Grid, components, utilities
- **Font Awesome 6** — Icons
- **FormSubmit.co** — Free email form submission service

**Required Setup:**

1. Open `script.js` and find this line (around line 72):
   ```javascript
   const BOOKING_EMAIL = "aditya@gmail.com";
   ```

2. Replace `aditya@gmail.com` with **your own email address**.

3. **First-time activation:**
   - Visit https://formsubmit.co/
   - The first time someone submits the form, FormSubmit will send you a confirmation email
   - **Click the confirmation link in that email**
   - After that, all future submissions will arrive in your inbox automatically

4. That's it! Your booking form is now live.

**Important Notes:**
- Emails will arrive with the subject line: "New Appointment Booking - SaloonX"
- Form data appears in a clean table format
- No credit card required; FormSubmit is completely free

### 3. Customize the Site

**Change the business details:**
- Open `index.html`
- Search for "aditya@gmail.com", "+91-9999999999", "Greater Noida" and replace with your own
- Update opening hours in the "Opening Hours" section (line ~310) and footer

**Change images:**
- Replace files in `src/` with your own salon photos
- Keep the same filenames or update the `src=""` attributes in HTML

**Adjust colors:**
- Edit `style.css` to change primary color (#ffc107 is the yellow/gold accent)
- Bootstrap classes like `bg-dark`, `text-warning` control theme colors

## File Structure

```
├── index.html          main page with all sections
├── script.js           booking form logic, animations, back-to-top
├── style.css           custom styles, animations, responsive design
├── src/
│   ├── logo.png        salon logo
│   ├── hero.avif       hero banner background
│   ├── HairStyle.avif  service card image
│   ├── Shaving.jpeg    service card image
│   ├── BeardTrim.avif  service card image
│   ├── hairspa.jpeg    service card image
│   ├── model.png       "why choose us" section barber portrait
│   ├── saloon01.jpg    gallery carousel image
│   ├── saloon02.avif   gallery carousel image
│   ├── saloon03.avif   gallery carousel image
│   └── scissor.png     booking form decoration
└── README.md           this file
```

## Features in Detail

### Appointment Booking Form

The form collects:
- **Name** — customer's full name
- **Phone** — contact number for confirmation
- **Email** — to reply with appointment confirmation
- **Service** — Hair Style, Shaving, Beard Trim, or Hair Spa
- **Preferred Date** — prevents booking dates in the past
- **Built-in validation** — required fields, phone format, email format
- **Honeypot spam protection** — hidden field that bots fill in (blocks spam)
- **User-friendly feedback** — success/error messages after submission

### Responsive Design

- **Desktop (>992px)** — Full navigation, multi-column layouts, full imagery
- **Tablet (768px–992px)** — Adjusted font sizes, stacked cards
- **Mobile (<768px)** — Single-column layout, optimized touch targets, hamburger menu

### Accessibility

- Semantic HTML5 (`<header>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Form labels associated with inputs
- Keyboard-navigable navigation and forms
- Color contrast meets WCAG standards
- Reduced motion support (respects `prefers-reduced-motion`)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (Chrome, Safari, Firefox mobile)

## Performance

- **Lazy loading** on all off-screen images
- **AVIF format** for service & gallery images (smaller, modern)
- **JPEG** for fallback and older browsers
- **Optimized PNG** for logo and decorative elements
- **Minified CSS/JS** (can be further optimized via build tools)
- **Gzip compression** recommended on server

### Typical Load Times

- First page load: ~2–3 seconds (most time is images)
- After cache: <500ms
- Lighthouse Performance score: 85+

## Credits

- **Design & Development:** Aditya Kumar
- **Framework:** Bootstrap 5
- **Icons:** Font Awesome 6
- **Form Service:** FormSubmit.co
- **Typography:** Google Fonts (Poetsen One)
