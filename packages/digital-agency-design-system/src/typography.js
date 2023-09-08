const typography = (theme) => ({
  DEFAULT: {
    css: {
      wordBreak: 'break-word',
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
        color: theme('colors.sumi.700'),
      },
      'blockquote > p:last-child': {
        marginBottom: theme('spacing.0'),
      },
      ':where(p, li) > code': {
        backgroundColor: theme('colors.sumi.100'),
        borderRadius: theme('borderRadius.sm'),
        paddingInline: theme('spacing.2'),
        paddingBlock: theme('spacing.1'),
        fontFamily: theme('fontFamily.mono'),
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
      // embed content
      '.embed-youtube': {
        width: '100%',
        height: 'auto',
        aspectRatio: '16 / 9',
      },
      // code block
      '.code-block': {
        display: 'grid',
        placeItems: 'start',
        overflow: 'hidden',
        backgroundColor: theme('colors.sumi.50'),
        borderRadius: theme('borderRadius.md'),
        marginBottom: theme('spacing.6'),
        wordBreak: 'break-all',
      },
      '.code-block .scroller': {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        width: '100%',
        overflow: 'auto',
      },
      '.code-block .scroller > .gap': {
        display: 'block',
        width: theme('spacing.3'),
        height: '100%',
      },
      '.code-block pre': {
        paddingBlock: theme('spacing.5'),
        fontFamily: theme('fontFamily.mono'),
      },
      '.code-block .label': {
        display: 'inline-flex',
        backgroundColor: theme('colors.sumi.700'),
        paddingLeft: theme('spacing.4'),
        paddingRight: theme('spacing.2'),
        paddingTop: theme('spacing.4'),
        paddingBottom: theme('spacing.2'),
        marginBottom: '-8px',
        marginRight: theme('spacing.5'),
        borderBottomRightRadius: theme('borderRadius.sm'),
        color: theme('colors.white'),
        fontSize: theme('fontSize.sm'),
      },
      // custom elements
      'link-card': {
        display: 'block',
        marginBottom: theme('spacing.2'),
      },
      ':where(p, li) > link-card': {
        display: 'inline',
        marginBottom: theme('spacing.0'),
      },
    },
  },
});

export default typography;
