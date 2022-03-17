<template>
  <section class="container">
    <main>
      <h1>Minimal Notes</h1>
      <form name="add-notes-form" @submit.prevent>
        <textarea
          id="add-form-input"
          placeholder="Insert your note..."
          rows="4"
        />
        <button type="submit">Submit</button>
      </form>
    </main>

    <article class="box" v-for="index in numberOfNotes" :key="index">
      <div class="box__header">
        <p>{{ note.timestamp }}</p>
        <button type="button">X</button>
      </div>
      <div class="box__content">
        <p>{{ note.content }}</p>
      </div>
    </article>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        numberOfNotes: 12,
        note: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum risus neque, vel dapibus libero scelerisque non. Nullam placerat pellentesque tellus a vehicula. Quisque ",
          timestamp: new Date().toLocaleDateString(),
        },
      };
    },
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    border-radius: 0.25em;
  }

  :root {
    --mn-text-color: #000000;
    --mn-background-color: #ffffff;
    --mn-border: 1px solid #8d8e91;
    --mb-border-focus: #333;
  }

  body {
    inline-size: 80%;
    margin: auto;
    padding: 3rem;
    background-color: var(--mn-background-color);
    color: var(--mn-text-color);
  }

  body,
  button,
  textarea {
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  form textarea {
    inline-size: 100%;
    border-radius: 0.5em;
    padding: 0.5em;
    border: var(--mn-border);
    margin-block-end: 1rem;
  }

  form button {
    inline-size: 100%;
    padding: 0.75em;
    min-block-size: 45px;
    border: var(--mn-border);
  }

  .box {
    border: var(--mn-border);
    padding: 0.5em;
    display: inline-block;
    min-block-size: 150px;
    align-self: end;
  }

  .box .box__header {
    inline-size: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-end: 0.5em;
  }

  .box .box__header button {
    border: 0;
    font-weight: bold;
  }

  .box .box__content {
    line-height: 1.5em;
    font-size: 0.9em;
  }

  h1 {
    /* For font size choices refer to https://type-scale.com/ */
    font-size: 1.953rem;
    margin-block-end: 0.5em;
    font-weight: bolder;
  }

  button {
    cursor: pointer;
    background: none;
  }
</style>
