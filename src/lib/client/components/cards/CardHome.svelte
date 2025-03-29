<script>
  import { icons } from "$lib/utils";
  export let cardData = {
    type: '',
    date: '',
    title: '',
    text: '',
    autor: '',
    iframe: '',
    link : '',
    width : 'lg:w-96'
  };
</script>

<div class="{$$props.class} lg:mt-0 w-full {cardData.width} bg-gray-50 text-accent p-6 py-4 rounded-lg border border-gray-200 shadow-md">
  <div class="flex justify-between font-normal">
    <div class="bg-primary text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
      {@html icons.camera()}
      <p class="pl-1 ">{cardData.type}</p>
    </div>
    <p class="text-sm text-gray-500">{cardData.date}</p> 
  </div>
  <a href="{cardData.link}"><h2 class="text-center font-bold text-2xl mt-2">{cardData.title}</h2></a>
  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{cardData.text}</p>
  <div class="w-full flex justify-center h-40 px-6">
    {@html cardData.iframe}
  </div>
  <footer class="flex justify-between mt-auto pt-3">
    <div class="flex">
      <img class="rounded-full mr-2" src="images/teste-perfil.png" alt="">
      <p class="self-center font-medium">{cardData.autor}</p>
    </div>
    <div class="flex self-center">
      <a class="mr-2 self-center" href="{cardData.link}">Saiba mais</a>
      {@html icons.arrowRight()}
    </div>
  </footer>
</div>
