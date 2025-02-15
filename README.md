# Book Review Platform

This project is a Book Review Platform built using **Next.js**, **Wix CMS**, and **ShadCN**. The platform allows users to browse books, submit reviews, and authenticate via Wix OAuth.

## Features

- **Wix Studio Setup**: Configure Wix CMS to manage book-related data.
- **Next.js Integration**: Utilize Next.js for frontend development.
- **ShadCN UI**: Implement UI components with ShadCN.
- **Book Display & Search**: Browse and search for books in the catalog.
- **Book Review System**: Submit and view book reviews.
- **OAuth Authentication**: Secure login using Wix OAuth.
- **Metadata & UI Enhancements**: Optimize SEO metadata and enhance UI with cursive fonts and icons.

## Setup Guide

### Prerequisites

- Node.js installed
- Wix CMS account
- MongoDB (if needed for additional storage)

### Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/YogeshDPalve/the-book-review.git
   cd book-review-platform
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Setup Wix CMS**
   - Create a new Wix Studio project.
   - Setup collections for books and reviews.
4. **Setup Next.js**

   ```sh
   npx create-next-app@latest .
   ```

5. **Configure OAuth**

   - Register OAuth credentials in Wix.
   - Add the client ID and secret to `.env`:

   ```sh
   WIX_CLIENT_ID=your_client_id
   WIX_CLIENT_SECRET=your_client_secret
   ```

6. **Run the Project**
   ```sh
   npm run dev
   ```

## Tech Stack

- **Next.js** - Frontend framework
- **Wix CMS** - Content management
- **ShadCN** - UI components
- **MongoDB** (optional) - Database storage
- **OAuth** - Authentication

## Contributing

Feel free to contribute by submitting issues and pull requests.

## License

This project is licensed under the MIT License.
