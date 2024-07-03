module.exports = {
    // Mengonfigurasi environtment variables
    env: {
      API_URL: process.env.API_URL,
    },
  
    // Menambahkan konfigurasi webpack
    webpack: (config, { isServer }) => {
      // Menambahkan pengaturan khusus untuk server-side rendering
      if (isServer) {
        // Lakukan sesuatu di sini
      }
  
      // Mengembalikan konfigurasi webpack yang sudah diperbarui
      return config;
    },
  
    // Menambahkan konfigurasi untuk mengubah path alias
    // Ini memungkinkan untuk mengakses path seperti '@/components'
    // daripada '../../components'
    webpack(config) {
      config.resolve.alias['@'] = path.resolve(__dirname);
      return config;
    },
  
    // Menyediakan pilihan untuk mengaktifkan atau menonaktifkan
    // pemetaan otomatis halaman yang dinamis
    // Contoh: /posts/[id] -> /posts/1, /posts/2, dll.
    // true: aktifkan, false: nonaktifkan
    experimental: { esmExternals: true },
  };