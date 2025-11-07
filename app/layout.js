export const metadata = {
  title: 'Ollin Labs - Soluciones Avanzadas de Software Analítico',
  description: 'Soluciones avanzadas de software analítico para empresas modernas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              box-sizing: border-box;
            }
            body {
              overflow-x: hidden;
              max-width: 100vw;
            }
            @media (max-width: 768px) {
              * {
                max-width: 100% !important;
              }
            }
          `
        }} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
