// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         serverActions: {}
//     },
//     images:{
//         domains: ['czmwsvupdeuxfotssvhv']//referensID
//     },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {}
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'czmwsvupdeuxfotssvhv',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
