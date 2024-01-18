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
</header>

<div class="header-options">
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
</div>

<style>
  header {
    background-color: blueviolet;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header > div:nth-child(1) {
    letter-spacing: 20px;
    font-size: 30px;
    font-weight: 800;
  }

  .header-options {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    header {
      background-color: blueviolet;
      min-height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header-options {
      position: absolute;
      right: 0px;
      top: 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 80px;
      height: 40px;
    }

    header > div:nth-child(1) {
      letter-spacing: 5px;
      font-size: 14px;
      font-weight: 800;
    }
  }
</style>
