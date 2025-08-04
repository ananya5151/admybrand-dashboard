# ADmyBRAND Insights Dashboard

A modern, feature-rich, and beautifully designed analytics dashboard built with Next.js, TypeScript, and shadcn/ui. This project showcases a complete front-end application with a focus on a clean user interface, data visualization, and a scalable component architecture.

**Live Demo:** [https://admybrand-dashboard-sage.vercel.app/](https://admybrand-dashboard-sage.vercel.app/)


# Desktop Screenshots
<p align="center">
<img width="400" alt="Dashboard Overview" src="https://github.com/user-attachments/assets/beea3d5b-fb6f-459e-84bc-6a51596be4a9" />
<img width="400" alt="Orders Page" src="https://github.com/user-attachments/assets/2c39cf80-ef26-4b5f-ae36-9f923d754299" />
<img width="400" alt="Products Page" src="https://github.com/user-attachments/assets/ef991bb0-1814-4a0f-afa2-1457d5831955" />
<img width="400" alt="Customers Page" src="https://github.com/user-attachments/assets/8ee54510-55c7-4da8-9d78-d3b4419a20dc" />
<img width="400" alt="Analytics Page" src="https://github.com/user-attachments/assets/841ac139-24c4-4382-901a-6e6574527b9f" />
<img width="400" alt="Settings Page" src="https://github.com/user-attachments/assets/fa237ef2-f09b-4c4b-88d4-0a75f0d4d443" />
<img width="400" alt="Light Mode" src="https://github.com/user-attachments/assets/72a7ff53-dee6-4183-9568-27f4ef6bfd0c" />
</p>

# Responsive Mobile View
<p align="center">
<img width="250" alt="Mobile Dashboard" src="https://github.com/user-attachments/assets/eaf1b8dd-2ccf-44b4-8c88-e54de7845f9b" />
<img width="250" alt="Mobile Menu" src="https://github.com/user-attachments/assets/8ce28ff1-8fa0-445a-8799-310bc60469cb" />
<img width="250" alt="Mobile Orders" src="https://github.com/user-attachments/assets/f852565d-22f5-43c5-96a7-10c5ab2be64d" />
## Features

This dashboard is packed with features designed to provide a comprehensive and intuitive user experience.

📊 **Dashboard & Analytics**
- **Overview Page:** At-a-glance key performance indicators (KPIs) for revenue, users, sales, and active subscriptions.
- **Interactive Charts:** Utilizes Recharts to display three types of data visualizations:
  - Bar Chart for monthly overview.
  - Line Chart for user acquisition trends.
  - Donut Chart for traffic source breakdown.
- **Advanced Data Tables:** Fully interactive tables for Orders, Products, and Customers with features like:
  - **Sorting:** Clickable column headers to sort data.
  - **Filtering:** Search bars and status tabs to filter results.
  - **Pagination:** Client-side pagination to handle large datasets.
- **Export Functionality:** Export customer data to **PDF** or **CSV** formats directly from the UI.
- **Date Range Filtering:** An advanced date picker for filtering data within specific timeframes.

🎨 **UI/UX & Design**
- **Modern Design System:** Built with **shadcn/ui** and **Tailwind CSS** for a consistent and visually appealing aesthetic.
- **Responsive Design:** Flawless performance and layout on desktop, tablet, and mobile devices.
- **Dark/Light Mode:** Seamless theme switching with persistence in local storage.
- **Beautiful Loading Skeletons:** Elegant loading states to enhance the user experience while data is fetched.
- **Smooth Animations:** Subtle animations and hover effects provide a polished and professional feel.

⚡ **Technical Implementation**
- **Component Architecture:** Built with reusable, modular components for easy maintenance and scalability.
- **Next.js 14+ App Router:** Leverages the latest Next.js features for optimal performance and a modern development experience.
- **TypeScript:** Full type safety for a more robust and error-free codebase.
- **Custom Hooks:** A dedicated hook (`useAdvancedTable`) to manage complex table state and logic cleanly.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Component Library:** [shadcn/ui](https://ui.shadcn.com/)
- **Charting:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ananya5151/admybrand-dashboard.git](https://github.com/ananya5151/admybrand-dashboard.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd admybrand-dashboard
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## AI Usage Report

This project was developed in collaboration with an AI assistant (Google's Gemini). The AI played a significant role in the following areas:

-   **Initial Scaffolding:** Generated the initial Next.js project setup, directory structure, and `shadcn/ui` configuration commands.
-   **Component Generation:** Provided boilerplate code for all major components, including the Sidebar, Header, Cards, Charts, and Data Tables, which were then refined and customized.
-   **Bug Fixing & Debugging:** Assisted in identifying and resolving errors, such as incorrect import paths, TypeScript type mismatches, and React key errors.
-   **Advanced Feature Implementation:** Guided the implementation of complex features, including the custom hook for the advanced table, the export-to-PDF/CSV functionality, and the theme provider for dark/light mode.
-   **Code Refactoring:** Helped refactor complex components (like the `useAdvancedTable` hook) to improve readability and maintainability.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
