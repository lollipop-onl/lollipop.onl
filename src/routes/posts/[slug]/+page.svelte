<script>
  const LABELS = [
    {
      icon: 'icon-[carbon--logo-github]',
      text: 'lollipop-onl',
    },
    {
      icon: 'icon-[carbon--calendar]',
      text: 'Aug 5, 2023',
    },
    {
      icon: 'icon-[carbon--hourglass]',
      text: '5 min',
    },
  ]
</script>

<div class="bg-base-profile py-8 px-10 rounded-lg shadow-xl">
  <div class="flex justify-between items-center">
    <a class="text-brand grid place-items-center gap-1 grid-flow-col hover:text-label transition" href="/">
      <span class="text-2xl icon-[carbon--chevron-left]" />
      BACK
    </a>
    <a class="text-brand grid place-items-center gap-2 grid-flow-col hover:text-label transition" href="https://github.com" target="_blank">
      Open in GitHub
      <span class="text-lg icon-[carbon--launch]" />
    </a>
  </div>
  <h1 class="text-prose-title text-2xl font-bold mt-8">
    JavaScript data types and data structures
  </h1>
  <ul class="flex gap-8 items-center mt-4">
    {#each LABELS as { icon, text }}
      <li class="text-label grid place-items-center gap-3 grid-flow-col">
        <span class={`text-xl ${icon}`} />
        {text}
      </li>
    {/each}
  </ul>
</div>

<div class="px-8 py-10">
  <p>hello world.</p>
</div>