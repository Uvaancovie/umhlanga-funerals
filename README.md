Here's a professional and detailed `README.md` for your project:

---

# **Umhlanga Funerals Website**

This repository contains the source code for the **Umhlanga Funerals Website**, a modern and responsive web application built using **Next.js** and **Tailwind CSS**. The site is designed to provide a dignified and user-friendly experience for showcasing luxury vehicle fleets, funeral services, and policies, as well as facilitating easy communication with clients.

---

## **Features**

### **1. Fleet Gallery**
- Interactive carousel to showcase premium vehicles, including Rolls-Royce, Bentley, Mercedes G-Class, and more.
- Detailed specifications and descriptions for each vehicle.
- Modal view with booking and contact options.

### **2. Hero Section**
- Rotating banner featuring key services such as luxury fleets and funeral policies.
- Engaging call-to-action buttons for navigation to fleet galleries and policies.

### **3. Why Choose Us Section**
- Highlights unique selling points:
  - Compassionate care
  - Premium fleet services
  - 24/7 support
  - Decades of experience

### **4. News & Blogs**
- Dynamic blog section with categorized posts:
  - Funeral guides
  - Policy updates
  - News and insights
- Easy-to-use filters and detailed articles.

### **5. Contact Us**
- Functional contact form for inquiries.
- Google Maps integration for location.
- Quick-access buttons for calling and emailing.

---

## **Technologies Used**
- **Next.js**: For server-side rendering, routing, and SEO optimization.
- **Tailwind CSS**: For a modern, responsive design.
- **React**: For dynamic and reusable UI components.
- **Vercel**: For hosting and automatic deployments.
- **Lucide Icons**: For clean and lightweight icons.

---

## **Getting Started**

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Uvaancovie/umhlanga-funerals.git
   ```
2. Navigate to the project directory:
   ```bash
   cd umhlanga-funerals
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### **Development**
Start the development server:
```bash
npm run dev
```

Access the development site at: `http://localhost:3000`

---

## **Build and Deploy**
1. Build the project:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

### **Deploy to Vercel**
To deploy the site to Vercel:
```bash
vercel --prod
```

---

## **Environment Variables**
If your project requires environment variables, create a `.env.local` file in the root directory and include variables like:

```env
NEXT_PUBLIC_API_URL=https://example.com/api
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-google-maps-api-key
```

---

## **Project Structure**
```plaintext
umhlanga-funerals/
├── components/         # Reusable UI components (Hero, FleetGallery, etc.)
├── pages/              # Application routes and pages
├── public/             # Static assets (images, icons, etc.)
├── styles/             # Global and Tailwind CSS files
├── .env.local          # Environment variables (not included in the repo)
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
```

---

## **Live Demo**
Check out the live version of the website:
[https://ufs.vercel.app](https://ufs.vercel.app)

---

## **Contributing**
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

If you have any questions or feedback, feel free to reach out. Happy coding! 🚀
