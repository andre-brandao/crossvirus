<script lang="ts">
  import CardExempleMap from '../../cards/CardExempleMap.svelte'
  import TextOnlySection from '../default/TextOnlySection.svelte'
import type { PageData } from './$types';
  
  let tags = [
    "Mapa",
    "Heatmap",
    "Dashboard" 
  ]
</script>

<TextOnlySection 
title={"O que são os mapas"}
subTitle={"MAPAS INTERATIVOS"}
text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
haveBotton={false}
/>

<div class="gap-8 flex flex-col justify-center items-center md:full md:flex-row md:space-x-8 px-10 lg:px-36 mt-5">
  <CardExempleMap 
  title={"João Monlevade"}
  img={"images/exemploCidade.png"}
  desc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora repellat delectus dolores optio. Dignissimos unde expedita, soluta libero commodi quibusdam."}
  tags={tags}
  />
  
  <CardExempleMap 
  title={"João Monlevade"}
  img={"images/exemploCidade.png"}
  desc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora repellat delectus dolores optio. Dignissimos unde expedita, soluta libero commodi quibusdam."}
  tags={tags}
  />

  <CardExempleMap 
  title={"João Monlevade"}
  img={"images/exemploCidade.png"}
  desc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora repellat delectus dolores optio. Dignissimos unde expedita, soluta libero commodi quibusdam."}
  tags={tags}
  />
</div>