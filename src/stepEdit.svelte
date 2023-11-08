<script lang="ts">
    import { originalImage, modifiedImage } from "./store";
    import "two-up-element";
    let proccesingImg = true
    let tries = 0
    let intervalId:any
    $: {
        if(proccesingImg && tries < 50) {
            clearInterval(intervalId) 
            intervalId = setInterval(() => {
                tries++
            } , 500)
        }
    }
</script>

<div class="flex justify-center items-center flex-col">
    <two-up>
        <img src={$originalImage} alt="Image upload by user" />
        <img 
        on:load={() => proccesingImg = false}
        on:error={() => proccesingImg = true}
        src={`${$modifiedImage}&t=${tries}`} 
        
        alt="Image withoutBg" />
    </two-up>
    <a
        download
        href={$modifiedImage}
        class="bg-blue-500 hover:bg-blue-700 text-xl text-center w-full font-bold text-white
rounded-full px-4 py-2">Download image</a
    >
</div>
