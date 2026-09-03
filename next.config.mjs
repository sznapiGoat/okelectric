/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next ve výchozím stavu servíruje jen WebP. AVIF je u fotografií
    // podstatně menší, prohlížeč si vybere podle Accept hlavičky a starším
    // zůstane WebP.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
