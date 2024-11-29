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

<div class="w-full md:w-1/2 card bg-neutral rounded-2xl text-accent mt-2 px-6 py-4 drop-shadow-md">
  <div class="flex justify-between font-normal">
    <div class="bg-primary rounded-lg flex p-1">
      {@html icons.camera()}
      <p class="pl-1">{cardData.type}</p>
    </div>
    <p>{cardData.date}</p> 
  </div>
  <h2 class="text-center font-semibold mt-1 text-xl">{cardData.title}</h2>
  <p class="text-center mb-5 text-gray-600 font-light">{cardData.text}</p>
  <div class="img">
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
