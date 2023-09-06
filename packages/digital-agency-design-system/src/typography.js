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
      blockquote: {
        borderLeftWidth: theme('borderWidth.4'),
        borderColor: theme('colors.wood.600'),
        paddingInline: theme('spacing.5'),
        paddingBlock: theme('spacing.2'),
        marginBottom: theme('spacing.6'),
      },
      // list
      'ul, ol': {
        display: 'grid',
        gap: theme('spacing.1'),
        marginBottom: theme('spacing.2'),
        paddingLeft: '2em',
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
      // code block
      '.code-block': {
        display: 'grid',
        placeItems: 'start',
        overflow: 'hidden',
        backgroundColor: '#2e3440',
        borderRadius: theme('borderRadius.md'),
        marginBottom: theme('spacing.6'),
        color: theme('colors.sumi.100'),
        wordBreak: 'break-all',
      },
      '.code-block > pre': {
        paddingInline: theme('spacing.3'),
        paddingBlock: theme('spacing.5'),
        fontFamily: theme('fontFamily.mono'),
      },
      '.code-block > .label': {
        display: 'inline-flex',
        backgroundColor: '#3b4252',
        paddingLeft: theme('spacing.4'),
        paddingRight: theme('spacing.2'),
        paddingTop: theme('spacing.4'),
        paddingBottom: theme('spacing.2'),
        marginBottom: '-8px',
        marginRight: theme('spacing.5'),
        borderBottomRightRadius: theme('borderRadius.sm'),
        fontSize: theme('fontSize.sm'),
      },
      // custom elements
      'link-card': {
        display: 'block',
        marginBottom: theme('spacing.2'),
      },
      'p > link-card': {
        display: 'inline',
        marginBottom: theme('spacing.0'),
      },
      'code-block': {
        display: 'block',
        backgroundColor: theme('colors.sumi.100'),
        borderRadius: theme('borderRadius.lg'),
        padding: theme('spacing.5'),
        marginBottom: theme('spacing.6'),
        fontFamily: theme('fontFamily.mono'),
      },
    },
  },
});

export default typography;
