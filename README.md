This repository contains the source code for the DNS IT Services marketing website. It is a modern, single-page application built with Next.js and TypeScript, designed to showcase the company's services, expertise, and client testimonials.

## Features

The website is composed of several key sections, each built as a distinct React component:

*   **Hero Section:** A prominent introduction with the company's main value proposition.
*   **Services:** A grid of cards detailing the core services offered: IT Services, Managed Print Services, Document Management, and Communications.
*   **Partners:** A section displaying the logos of key clients and partners.
*   **Progress:** Highlights the company's long history ("since 1996") with a side-by-side layout featuring a background video.
*   **Case Studies Slider:** An interactive carousel powered by Swiper.js, showcasing customer testimonials and quotes.
*   **FAQ & Insights:** A dual-purpose section featuring an accordion-style FAQ for common questions and a grid of recent news articles.
*   **Features:** A grid highlighting key company statistics and accreditations, such as years in business and the number of expert team members.
*   **Contact & Footer:** A comprehensive final section with a contact form, company address, opening hours, and sitemap links.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) 15 (App Router)
*   **UI Library:** [React](https://react.dev/) 19
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Sass Modules](https://sass-lang.com/) & [Tailwind CSS](https://tailwindcss.com/)
*   **Interactivity:** [Swiper.js](https://swiperjs.com/) for sliders
*   **Linting & Formatting:** ESLint & Prettier
*   **Package Manager:** pnpm

## Project Structure

The project follows a standard Next.js App Router structure, with a focus on component-based architecture.

```
/
├── public/                 # Static assets (images, videos, icons)
├── src/
│   ├── app/                # Main application pages and layout
│   └── components/         # Reusable React components for each page section
│       ├── Header/
│       ├── Hero/
│       ├── Services/
│       ├── Partners/
│       ├── Progress/
│       ├── Slider/
│       ├── FAQ/
│       ├── Features/
│       └── Contacts/
├── next.config.ts          # Next.js configuration
├── tailwindcss.config.mjs  # Tailwind CSS configuration
└── package.json            # Project dependencies and scripts
```

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

*   Node.js (v18.18.0 or newer)
*   [pnpm](https://pnpm.io/installation)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/aulanchik/dns-website.git
    ```
2.  Change into the project directory:
    ```sh
    cd dns-website
    ```
3.  Install the dependencies:
    ```sh
    pnpm install
    ```

### Running the Development Server

To start the development server (powered by Turbopack), run:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website. The page will automatically reload as you make changes to the code.

## Available Scripts

In the project directory, you can run the following commands:

*   `pnpm dev`: Starts the development server with Turbopack.
*   `pnpm build`: Creates a production-ready build of the application.
*   `pnpm start`: Starts the production server after a build.
*   `pnpm lint`: Runs ESLint to analyze the code for potential issues.
