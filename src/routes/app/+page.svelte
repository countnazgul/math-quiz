<script lang="ts">
  import { Loader, RadioGroup, Button, NumberInput } from "@svelteuidev/core";

  import Question from "./components/Question.svelte";
  import Header from "./components/Header.svelte";

  let data: { question: string; answer: string }[] = [];
  let age = 16;
  let numberOfQuestions = 10;

  let area = "algebra";
  const areaItems = [
    { label: "Algebra", value: "algebra" },
    { label: "Geometry", value: "Geometry" },
    { label: "Trigonometry", value: "Trigonometry" },
    { label: "Mixed", value: "Mixed" },
  ];

  let isLoaderVisible = false;

  async function getQuestions() {
    isLoaderVisible = true;

    data = await fetch("/api/questions", {
      method: "POST",
      body: JSON.stringify({ age, numberOfQuestions, area }),
    }).then((res) => res.json());

    isLoaderVisible = false;
  }
</script>

<main>
  <Header />
  <main-content>
    <options>
      <div><NumberInput label="Age" min={13} max={18} bind:value={age} /></div>
      <div>
        <NumberInput
          label="Number of questions"
          min={10}
          max={30}
          bind:value={numberOfQuestions}
        />
      </div>
      <div><RadioGroup items={areaItems} bind:value={area} /></div>
      <div><Button on:click={getQuestions}>Generate questions</Button></div>
    </options>
    <questions-list>
      {#if isLoaderVisible}
        <div class="loader">
          <Loader variant="dots" size={80} />
        </div>
      {:else if data.length > 0}
        <h1>Questions</h1>
        {#each data as questionAndAnswer}
          <Question data={questionAndAnswer} />
        {/each}
      {/if}
    </questions-list>
  </main-content>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  main-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  options {
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 170px;
    align-items: center;
    justify-items: center;
    gap: 10px;
  }

  questions-list {
    height: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .loader {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
