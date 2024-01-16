<script lang="ts">
  import { colorScheme, Button, ActionIcon } from "@svelteuidev/core";
  import { Moon, Sun } from "radix-icons-svelte";
  import { enhance } from "$app/forms";

  function toggleTheme() {
    console.log("asd");
    colorScheme.update((v) => (v === "dark" ? "light" : "dark"));
  }
</script>

<header>
  <div>MATH QUIZ</div>

  <div>
    <ActionIcon
      on:click={toggleTheme}
      variant="transparent"
      color="white"
      size=""
    >
      {#if $colorScheme == "dark"}
        <Sun size={20} />
      {:else}
        <Moon size={20} />
      {/if}
    </ActionIcon>
  </div>
  <div>
    <form method="post" action="?/logout" use:enhance>
      <Button type="submit" variant="subtle" color="orange">Sign out</Button>
    </form>
  </div>
</header>

<style>
  header {
    background-color: blueviolet;
    height: 50px;
    display: grid;
    grid-template-columns: auto 50px 100px;
    align-items: center;
    justify-items: center;
  }

  header > div:nth-child(1) {
    letter-spacing: 20px;
    font-size: 30px;
    font-weight: 800;
  }
</style>
