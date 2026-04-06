import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        domains: ['images.unsplash.com', 'cdn.prod.website-files.com'], // agrega aquí los dominios permitidos
    },
}

export default nextConfig
