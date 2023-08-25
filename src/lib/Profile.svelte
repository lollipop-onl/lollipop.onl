<script>
  const SOCIAL_PROFILE = [
    {
      icon: 'icon-[carbon--logo-github]',
      text: 'lollipop-onl',
      href: 'https://github.com/lollipop-onl',
    },
    {
      icon: 'icon-[carbon--building-insights-3]',
      text: 'teamLab Inc.',
      href: 'https://www.team-lab.com/recruit/',
    },
  ]
</script>

<div class="bg-base-profile py-8 px-10 rounded-lg shadow-xl">
  <div class="flex items-center gap-8">
    <img 
      class="aspect-square w-36 rounded-md" 
      src="https://ja.gravatar.com/userimage/211531763/da7c3b3146864e5d25a469766333b1e4.jpeg?size=256" 
      alt="" 
    />
    <div>
      <p class="text-2xl font-bold text-prose-title">Ryoya Tamura</p>
      <p class="text-prose-body leading-relaxed mt-2">
        FrontEnd Engineer
      </p>
      <ul class="mt-6 flex gap-8 items-center">
        {#each SOCIAL_PROFILE as { icon, text, href }}
          <li class="grid place-items-center gap-3 grid-flow-col">
            <span class={`text-label text-xl ${icon}`} />
            <a 
              class="text-prose-subtitle hover:text-brand" 
              href={href}
              target="_blank"
            >
              {text}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>