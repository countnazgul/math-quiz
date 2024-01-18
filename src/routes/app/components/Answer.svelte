<script lang="ts">
  import { ActionIcon } from "@svelteuidev/core";
  import { EyeOpen, EyeClosed } from "radix-icons-svelte";

  export let answer: string;

  let isShown = false;
</script>

<answer>
  {#if isShown}
    {answer}
    <div on:click={() => (isShown = false)} title="Hide answer">
      <ActionIcon size="md">
        <EyeClosed />
      </ActionIcon>
    </div>
  {:else}
    <div on:click={() => (isShown = true)} title="Show answer">
      <ActionIcon size="md">
        <EyeOpen />
      </ActionIcon>
    </div>
  {/if}
</answer>

<style>
  answer {
    display: flex;
    gap: 10px;
    min-width: 50px;
  }

  answer > div {
    cursor: pointer;
  }
</style>
