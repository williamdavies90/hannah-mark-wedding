<script>
  import { onMount, onDestroy } from 'svelte';
  import { slide } from 'svelte/transition';
  export let title = "";
  let isOpen = false;
  onMount(() => {
    
  });

  onDestroy(() => {
    
  });
</script>



<div class="accordion">
  <div class="title-container" on:click={() => isOpen = !isOpen}>
    <span>
      <h3>{@html title}</h3>
    </span>
    <svg class="chevron {isOpen ? 'rotated' : ''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  </div>

  {#if isOpen}
    <div class="content" transition:slide>
      <slot></slot>
    </div>
  {/if}
</div>

<style>
  .accordion {
    border-radius: 0px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: transparent;
  }

  
  .accordion a:hover {
    text-decoration: underline;
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
  }

  .title-container h3 {
    margin-bottom: 0px;
    text-align: left;
    display: inline;
    color: var(--primary-color);
  }

  .content {
    padding: 20px;
    background-color: #fff;
  }
  

  .chevron {
    transition: transform 0.3s ease;
    width: 24px; /* Adjust size as needed */
    height: 24px; /* Adjust size as needed */
    color: var(--accent-color);
  }

  .rotated {
    transform: rotate(180deg);
  }
  .icon {
    width: 16px; /* Adjust based on your preference */
    height: 16px; /* Ensure this matches the width for square aspect ratio */
}
</style>

