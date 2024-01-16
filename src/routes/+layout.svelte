<script lang="ts">
  import {
    colorScheme,
    SvelteUIProvider,
    Stack,
    Switch,
    Text,
  } from "@svelteuidev/core";
  import "../app.css";



  colorScheme.set("dark");
</script>

<svelte:head>
  <title>Math Quiz with ChatGPT</title>
</svelte:head>

<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
  <slot />
</SvelteUIProvider>
