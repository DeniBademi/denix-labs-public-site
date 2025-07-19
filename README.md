# DenixLabs Public Site

A multilingual Angular website for DenixLabs, supporting both Bulgarian and English languages.

## Features

- 🌍 **Multilingual Support**: Full i18n support for Bulgarian (bg) and English (en)
- 🎨 **Modern UI**: Built with Angular 19 and Tailwind CSS
- 📱 **Responsive Design**: Mobile-first approach
- ⚡ **Performance**: Optimized builds for each language
- 🔧 **AI Solutions**: Showcase of AI-powered business solutions

## Language Support

The website supports two languages:
- **Bulgarian (bg)**: Default language
- **English (en)**: International version

### Language Switching

Users can switch between languages using the language switcher in the navigation bar. The language preference is maintained in the URL structure:
- Bulgarian: `/bg/...`
- English: `/en/...`

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

The application will be available at `http://localhost:4200` and will redirect to the Bulgarian version by default.

### Building for Production

#### Build for specific language:

```bash
# Build Bulgarian version
npm run build:bg

# Build English version
npm run build:en
```

#### Build for all languages:

```bash
npm run build:all
```

### Internationalization

#### Extract translatable strings:

```bash
npm run extract-i18n
```

This command extracts all translatable strings from the templates and updates the source file at `src/locale/messages.xlf`.

#### Translation Files

- `src/locale/messages.xlf` - Source file (English)
- `src/locale/messages.bg.xlf` - Bulgarian translations
- `src/locale/messages.en.xlf` - English translations

#### Adding New Translations

1. Add `i18n` attributes to your HTML templates:
   ```html
   <h1 i18n="@@page.title">Page Title</h1>
   ```

2. Extract the strings:
   ```bash
   npm run extract-i18n
   ```

3. Update the translation files with the new strings

4. Rebuild the application

## Project Structure

```
src/
├── app/
│   ├── _services/
│   │   └── language.service.ts      # Language switching logic
│   ├── language-switcher/
│   │   └── language-switcher.component.ts  # Language switcher UI
│   ├── hero/
│   ├── navbar/
│   ├── footer/
│   └── ...
├── locale/
│   ├── messages.xlf                 # Source translations
│   ├── messages.bg.xlf              # Bulgarian translations
│   └── messages.en.xlf              # English translations
└── ...
```

## Deployment

The application is configured for deployment on Netlify with SSR support. Each language build creates separate bundles that can be deployed independently.

### Netlify Configuration

The `netlify.toml` file is configured to handle the multilingual routing and SSR.

## Contributing

When adding new content:

1. Always use i18n attributes for translatable text
2. Test both language versions
3. Update translation files when adding new strings
4. Ensure proper URL structure for both languages

## License

Copyright DenixLabs 2025
