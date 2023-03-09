<script lang="ts">
    import { typeStatus } from "../types";
  import CloudinaryLogo from "./components/cloudinaryLogo.svelte";
import StepUpload from "./stepUpload.svelte";
import StepEdit from "./stepEdit.svelte";
    import { imageStatus } from "./store";
  
</script>
<div class="max-w-xl m-auto grid grid-cols-1 place-content-center w-full h-screen gap-20">
  <header class="flex justify-center gap-x-2 items-center">
  <h1 class="flex justify-center items-center text-blue-900 text-3xl font-semibold pt-10">Remove <span class="text-blue-500 " > bg</span></h1>

</header>
<main> 
  {#if $imageStatus === typeStatus.READY || $imageStatus === typeStatus.UPLOADING}
     <StepUpload />
     {:else if $imageStatus === typeStatus.DONE} 
     <StepEdit />
  {/if}
 
 </main>
  <footer class="flex justify-center items-center gap-x-2">
   <p class="text-bold text-2xl   "> Hecho con</p>  <a href="https://cloudinary.com/" target="_blank" rel="noreferrer" > <CloudinaryLogo /> </a>
  </footer>
</div>
