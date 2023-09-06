const typography = (theme) => ({
  DEFAULT: {
    css: {
      letterSpacing: theme('letterSpacing.md'),
      // headings
      h1: {
        marginTop: theme('spacing.16'),
        marginBottom: theme('spacing.6'),
        fontSize: theme('fontSize.3xl'),
        fontWeight: theme('fontWeight.medium'),
        lineHeight: theme('lineHeight.md'),
        [`@media (min-width: ${theme('screens.md')})`]: {
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.regular'),
          lineHeight: theme('lineHeight.sm'),
        },
      },
      h2: {
        marginTop: theme('spacing.16'),
        marginBottom: theme('spacing.6'),
        fontSize: theme('fontSize.2xl'),
        fontWeight: theme('fontWeight.medium'),
        lineHeight: theme('lineHeight.md'),
        [`@media (min-width: ${theme('screens.md')})`]: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.regular'),
        },
      },
      h3: {
        marginTop: theme('spacing.10'),
        marginBottom: theme('spacing.6'),
        fontSize: theme('fontSize.xl'),
        fontWeight: theme('fontWeight.medium'),
        lineHeight: theme('lineHeight.md'),
        [`@media (min-width: ${theme('screens.md')})`]: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.regular'),
        },
      },
      h4: {
        marginTop: theme('spacing.10'),
        marginBottom: theme('spacing.4'),
        fontSize: theme('fontSize.lg'),
        fontWeight: theme('fontWeight.medium'),
        lineHeight: theme('lineHeight.md'),
        [`@media (min-width: ${theme('screens.md')})`]: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.regular'),
        },
      },
      h5: {
        marginTop: theme('spacing.6'),
        marginBottom: theme('spacing.4'),
        fontSize: theme('fontSize.md'),
        fontWeight: theme('fontWeight.medium'),
        lineHeight: theme('lineHeight.lg'),
        [`@media (min-width: ${theme('screens.md')})`]: {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.regular'),
          lineHeight: theme('lineHeight.md'),
        },
      },
      // paragraphs
      p: {
        marginBottom: theme('spacing.2'),
        fontSize: '1rem',
        lineHeight: theme('lineHeight.lg'),
      },
      // decorations
      b: {
        fontWeight: theme('fontWeight.bold'),
      },
      a: {
        color: theme('colors.sea.800'),
        textDecoration: 'underline',
        '&:hover, &:active, &:visited': {
          color: theme('colors.sea.900'),
        },
        '&:hover': {
          textDecoration: 'none',
        },
      },
      // code block
      pre: {
        backgroundColor: theme('colors.sumi.100'),
        borderRadius: theme('borderRadius.lg'),
        padding: theme('spacing.5'),
        marginBottom: theme('spacing.6'),
      },
      // list
      'ul, ol': {
        display: 'grid',
        gap: theme('spacing.1'),
        marginBottom: theme('spacing.2'),
        paddingLeft: '1.5em',
      },
      'li > ul, li > ol': {
        marginBottom: '0',
      },
      ul: {
        listStyleType: 'disc',
      },
      ol: {
        listStyleType: 'decimal',
      },
      'li > ol': {
        listStyleType: 'lower-alpha',
      },
    },
  },
});

export default typography;
