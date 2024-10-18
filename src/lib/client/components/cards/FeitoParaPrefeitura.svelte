<script>
  import { icons } from "$lib/utils";
  export let cardData = {
    type: '',
    date: '',
    title: '',
    text: '',
    autor: '',
    iframe: ''
  };
</script>

<div class="w-full sm:w-1/2 card bg-neutral rounded-2xl text-accent px-6 py-4">
  <div class="flex justify-between font-normal">
    <div class="bg-primary rounded-lg flex p-2">
      {@html icons.camera()}
      <p class="pl-1">{cardData.type}</p>
    </div>
    <p>{cardData.date}</p> 
  </div>
  <h2 class="text-center font-bold mt-1 text-2xl">{cardData.title}</h2>
  <p class="text-center mb-5 text-gray-600 font-light">{cardData.text}</p>
  <div class="">
    {@html cardData.iframe}
  </div>
  <div class="flex justify-between mt-3">
    <div class="flex">
      <img class="rounded-full mr-2" src="images/teste-perfil.png" alt="">
      <p class="self-center">{cardData.autor}</p>
    </div>
    <div class="flex self-center">
      <a class="mr-2  self-center" href="#">Saiba mais</a>
      {@html icons.arrowRight()}
    </div>
  </div>
</div>
