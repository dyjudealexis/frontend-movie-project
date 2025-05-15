// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

function SEO({
  title,
  description = '',
  lang = 'en',
  meta = [],
  charset = 'utf-8',
  viewport = 'width=device-width, initial-scale=1',
  keywords = []
}) {
  const metaTags = [
    { name: 'description', content: description },
    { name: 'viewport', content: viewport },
    { charset },
    // open graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    // twitter card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    // keywords, if any
    ...(keywords.length > 0
      ? [{ name: 'keywords', content: keywords.join(', ') }]
      : []),
    // custom additional meta
    ...meta
  ];

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      {metaTags.map((tag, i) => {
        const key = Object.keys(tag)[0] + i;
        return <meta key={key} {...tag} />;
      })}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  charset: PropTypes.string,
  viewport: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string)
};

export default SEO;
