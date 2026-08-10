import { Helmet } from "react-helmet-async";

interface PageHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
}

/**
 * Componente para gestionar los meta tags de la página
 * Incluye soporte para Open Graph y Twitter Cards
 */
export const PageHead = ({
  title = "Jesús Francisco Vázquez Biltre - Software Developer",
  description = "Portfolio personal de Jesús Francisco Vázquez Biltre. Software Developer con experiencia en aplicaciones web y móviles, APIs REST, bases de datos y ciclo de desarrollo de software.",
  image = "https://www.jesufvb.dev/og-image.webp",
  url = "https://www.jesufvb.dev",
  type = "website",
  twitterCard = "summary_large_image",
}: PageHeadProps) => {
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <link rel="canonical" href={url} />

      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Portfolio - Jesús Francisco Vázquez Biltre" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* SEO adicional */}
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="keywords" content="software developer, desarrollador, web, mobile, APIs, bases de datos, typescript, portfolio" />
      <meta name="author" content="Jesús Francisco Vázquez Biltre" />
    </Helmet>
  );
};
