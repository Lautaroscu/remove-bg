<script lang="ts">
  import { typeStatus } from "../types";
  import { imageStatus, originalImage } from "./store";
  import { modifiedImage } from "./store";
  import Dropzone from "dropzone";
  import "dropzone/dist/dropzone.css";
  import { onMount } from "svelte";
  import { Cloudinary } from "@cloudinary/url-gen";
  import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";

  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "dzeotbd0l",
    }, 
    url: {
      secure: true,
    },
  });
  onMount(() => {
    const dropzone = new Dropzone("#dropzone", {
      uploadMultifile: false,
      acceptsFiles: ".jpg, .png , .webp",
      maxFiles: 1,
    });
    dropzone.on("sending", (file, xhr, formData) => {
      formData.append("upload_preset", "iszxieur");
      formData.append("timestamp", Date.now() / 1000);
      formData.append("api_key", 418579654788937);
      imageStatus.set(typeStatus.UPLOADING);
    });
    dropzone.on("success", (file, response) => {
      imageStatus.set(typeStatus.DONE);
      const { secure_url: url, public_id: idImg } = response;
      const imageWithOutBg = cloudinary
        .image(idImg)
        .effect(backgroundRemoval());
      modifiedImage.set(imageWithOutBg.toURL());
      originalImage.set(url);
    });
    dropzone.on("error", (file, response) => {
      console.log("mal", response);
    });
  });
</script>

<form
  action="https://api.cloudinary.com/v1_1/dzeotbd0l/image/upload"
  id="dropzone"
  class="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col "
>
  {#if $imageStatus == typeStatus.READY}
    <button
      class="bg-blue-600 p-4 text-xl font-bold text-white pointer-events-none rounded-full"
      >Upload Files</button
    >
    <strong class="text-lg mt-4">Or drop a image</strong>
  {/if}
  {#if $imageStatus === typeStatus.UPLOADING}
    <strong class="text-lg mt-4">Uploading file...</strong>
  {/if}
</form>
