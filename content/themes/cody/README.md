# Cody

Cody is a Ghost Theme optimized for developers.

## Features

- Focused on content
- Fully responsive
- Easy to configure
- Perfomance (minification, prefetching, async loading)
- Optimize for developers (syntax hightlighting using Prism)
- Disqus comments
- Google Analytics
- OpenGraph and Twitter Cards meta's

## Install

1. Navigate to your Ghost theme directory `ghost/content/themes`
2. Unzip the theme in the directory `cody`
3. Restart ghost and log in to your dashboard
4. In settings, under themes, select **cody** and save
5. That's all, you can now configure your theme

## Configure

All configurable files are located in `cody/partials/custom`.

#### config.hbs

Configurable javascript identifiers.

- `ga_ua`: Your [Google Analitycs](https://support.google.com/analytics/answer/1032385) account identifier
- `disqus_shortname`: Your [Disqus](http://help.disqus.com/customer/portal/articles/466208) unique identifier

#### meta.hbs

Configurable meta tags.

- `twitter:site`: Used for [Twitter Card](https://dev.twitter.com/docs/cards/markup-reference) identification, the twitter @username of the owner of this card's domain
- `twitter:creator`: Used for [Twitter Card](https://dev.twitter.com/docs/cards/markup-reference) identification, the twitter @username of the author of this content
- `google-site-verification`: Used for [Google Webmaster Tools](https://support.google.com/webmasters/answer/35179) identification
- `fb:admins`: Used for [Facebook Insights](https://developers.facebook.com/docs/insights/â€Ž) identification