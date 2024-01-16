<script lang="ts">
  import Answer from "./Answer.svelte";
  export let data: { question: string; answer: string };
</script>

<question>
  <div>{data.question}</div>
  <Answer answer={data.answer} />
</question>

<style>
  question {
    display: flex;
    flex-direction: row;
  }

  question > div {
    flex: 1;
  }

  question > div:nth-child(2) {
    align-self: flex-end;
  }
</style>
