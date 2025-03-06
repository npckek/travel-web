/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      content: {
        moon: 'url(\' data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="24px" heigth="24px" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>\')',
        sun: 'url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="24px" heigth="24px" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>\')',
        avatar_sun: 'url(\' data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" shape-rendering="auto" width="512" height="512"><metadata xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/"><rdf:RDF><rdf:Description><dc:title>Thumbs</dc:title><dc:creator>DiceBear</dc:creator><dc:source xsi:type="dcterms:URI">https://www.dicebear.com</dc:source><dcterms:license xsi:type="dcterms:URI">https://creativecommons.org/publicdomain/zero/1.0/</dcterms:license><dc:rights>„Thumbs” (https://www.dicebear.com) by „DiceBear”, licensed under „CC0 1.0” (https://creativecommons.org/publicdomain/zero/1.0/)</dc:rights></rdf:Description></rdf:RDF></metadata><mask id="viewboxMask"><rect width="100" height="100" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask><g mask="url(#viewboxMask)"><rect fill="#69d2e7" width="100" height="100" x="0" y="0" /><g transform="scale(-1 1) translate(-100 0)"><g transform="translate(2, 5) rotate(9 50 70)"><path d="M95 53.33C95 29.4 74.85 10 50 10S5 29.4 5 53.33V140h90V53.33Z" fill="#0a5b83"/><g transform="translate(29 33)"><g transform="translate(-8, -9) rotate(18 21 21)"><g transform="translate(0 5)"><path d="M13 8c0 3.31-1.34 6-3 6s-3-2.69-3-6 1.34-6 3-6 3 2.69 3 6ZM35 8c0 3.31-1.34 6-3 6s-3-2.69-3-6 1.34-6 3-6 3 2.69 3 6Z" fill="#ffffff"/></g><g transform="translate(6 23)"><path d="M15 10C6.79 10 3.02 3.88 4.22 3.12 5.42 2.35 6.1 6.6 15 6.49c8.9-.12 9.58-4.23 10.78-3.37C26.98 3.98 23.21 10 15 10Z" fill="#ffffff"/></g></g></g></g></g></g></svg> \')',
        avarat_moon: 'url(\' data:image/svg+xml; urf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" shape-rendering="auto" width="512" height="512"><metadata xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/"><rdf:RDF><rdf:Description><dc:title>Thumbs</dc:title><dc:creator>DiceBear</dc:creator><dc:source xsi:type="dcterms:URI">https://www.dicebear.com</dc:source><dcterms:license xsi:type="dcterms:URI">https://creativecommons.org/publicdomain/zero/1.0/</dcterms:license><dc:rights>„Thumbs” (https://www.dicebear.com) by „DiceBear”, licensed under „CC0 1.0” (https://creativecommons.org/publicdomain/zero/1.0/)</dc:rights></rdf:Description></rdf:RDF></metadata><mask id="viewboxMask"><rect width="100" height="100" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask><g mask="url(#viewboxMask)"><rect fill="#0a5b83" width="100" height="100" x="0" y="0" /><g transform="scale(-1 1) translate(-100 0)"><g transform="translate(2, 5) rotate(9 50 70)"><path d="M95 53.33C95 29.4 74.85 10 50 10S5 29.4 5 53.33V140h90V53.33Z" fill="#69d2e7"/><g transform="translate(29 33)"><g transform="translate(-8, -9) rotate(18 21 21)"><g transform="translate(0 5)"><path d="M13 8c0 3.31-1.34 6-3 6s-3-2.69-3-6 1.34-6 3-6 3 2.69 3 6ZM35 8c0 3.31-1.34 6-3 6s-3-2.69-3-6 1.34-6 3-6 3 2.69 3 6Z" fill="#ffffff"/></g><g transform="translate(6 23)"><path d="M15 10C6.79 10 3.02 3.88 4.22 3.12 5.42 2.35 6.1 6.6 15 6.49c8.9-.12 9.58-4.23 10.78-3.37C26.98 3.98 23.21 10 15 10Z" fill="#ffffff"/></g></g></g></g></g></g></svg> \')'
      },
      colors: {
        background: "rgba(var(--background))",
        block:"rgba(var(--block))",
        border: "rgba(var(--border))",
        text: "rgba(var(--text))",
        logo: "rgba(var(--logo))",
        icon: "rgba(var(--icon))"
      }
    },
  },
  plugins: [],
}

