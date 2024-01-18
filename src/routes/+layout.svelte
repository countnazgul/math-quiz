<script lang="ts">
  import { colorScheme, SvelteUIProvider } from "@svelteuidev/core";
  import "../app.css";
  import { screenWidth } from "$lib/store";

  colorScheme.set("dark");
</script>

<svelte:window bind:outerWidth={$screenWidth} />

<svelte:head>
  <title>Math Quiz with ChatGPT</title>
</svelte:head>

<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
  <slot />
</SvelteUIProvider>
