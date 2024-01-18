<script lang="ts">
  import { ActionIcon, Modal } from "@svelteuidev/core";
  import { EyeOpen, EyeClosed } from "radix-icons-svelte";
  import { screenWidth } from "$lib/store";

  export let answer: string;

  let isShown = false;
  let isModalOpen = false;

  function showAnswer(show: boolean) {
    if ($screenWidth <= 600) {
      isModalOpen = show;
    } else {
      isShown = show;
    }
  }
</script>

<answer>
  <Modal
    centered
    opened={isModalOpen}
    on:close={() => showAnswer(false)}
    title="Answer"
  >
    {answer}
  </Modal>

  {#if isShown}
    {answer}
    <div on:click={() => showAnswer(false)} title="Hide answer">
      <ActionIcon size="md">
        <EyeClosed />
      </ActionIcon>
    </div>
  {:else}
    <div on:click={() => showAnswer(true)} title="Show answer">
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
