<script lang="ts">
  import { typeStatus } from "../types";
  import CloudinaryLogo from "./components/cloudinaryLogo.svelte";
  import StepUpload from "./stepUpload.svelte";
  import StepEdit from "./stepEdit.svelte";
  import { imageStatus } from "./store";
  import { darkMode } from "./storeDarkMode";
  function setMode() {
    darkMode.set(!$darkMode);
  }
</script>

<div class={$darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
  <button
    class="text-xs font-semibold mt-10 items-center m-3 "
    on:click={setMode}
    >{$darkMode ? "Ligth Mode" : "Dark Mode"}
  </button>
  <div
    class="max-w-xl m-auto grid grid-cols-1 place-content-center w-full h-full gap-20"
  >
    <header class="flex justify-center gap-x-2 items-center max-w-xl">
      <h1
        class="flex justify-center items-center text-blue-900 text-3xl font-semibold pt-10 scale-100 hover:scale-150 ease-in duration-300"
      >
        Remove <span class="text-blue-500 "> bg</span>
      </h1>
    </header>
    <main>
      {#if $imageStatus === typeStatus.READY || $imageStatus === typeStatus.UPLOADING}
        <StepUpload />
      {:else if $imageStatus === typeStatus.DONE}
        <StepEdit />
      {/if}
    </main>
    <footer class="flex justify-between items-center gap-x-2 ">
      <ul class="text-xl  ">
        <li>
          <a href="https://github.com/Lautaroscu" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github" />GitHub
            </a>
        </li>
        <li>
          <a href="https://instagram.com/lautaro_scuffi" target="_blank" rel="noreferrer"
            >Instagram <i class="fa-brands fa-instagram"  /></a
          >
        </li>
        <li>
          <a href="https://facebook.com/lautaro_scuffi"
            ><i class="fa-brands fa-facebook" />Facebook</a
          >
        </li>
        <li><i class="fa-solid fa-envelope" />scuffilautaro15@gmail.com</li>
      </ul>
      <div>
        <p class="text-bold text-2xl   ">Hecho con</p>
        <a href="https://cloudinary.com/" target="_blank" rel="noreferrer">
          <CloudinaryLogo />
        </a>
      </div>
    </footer>
  </div>
</div>
