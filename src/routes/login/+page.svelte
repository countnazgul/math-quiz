<script>
  import { goto } from "$app/navigation";
  import { ActionIcon } from "@svelteuidev/core";
  import { GithubLogo } from "radix-icons-svelte";
</script>

<sign-in>
  <ActionIcon
    size="xl"
    on:click={() => {
      goto("/login/github", { replaceState: true });
    }}
  >
    <GithubLogo size={56} />
  </ActionIcon>
</sign-in>

<style>
  sign-in {
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
</style>
