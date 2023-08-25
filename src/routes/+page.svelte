<script>
  import Profile from "$lib/Profile.svelte";
  import PostCard from "$lib/PostCard.svelte";

</script>

<Profile />
<div class="flex items-center justify-between mt-20">
  <h2 class="font-bold text-prose-subtitle text-lg">Blog</h2>
  <p class="text-prose-body text-sm">6 posts</p>
</div>
<ol class="mt-6 grid grid-cols-2 gap-8">
  {#each [1,2,3,4,5] as i}
    <PostCard />
  {/each}
</ol>
