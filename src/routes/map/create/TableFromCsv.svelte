<script lang="ts">
  import { onDestroy, onMount } from "svelte"

  import type { ParseResult } from "papaparse"

  interface TableProps{
    csvData : ParseResult<unknown> | null,
    atributeNames : string[],
    selectedTypeCodi : string,
    addAtributte : (atr : string) => void,
    removeAtributte : (atr : string) => void,
  }
  
  let {csvData, selectedTypeCodi, atributeNames, addAtributte, removeAtributte } : TableProps = $props();

</script>

<div>
  {#if csvData?.data}
  <div class="w-full flex mt-2 overflow-auto max-h-72">
    <table class="table border">
      <thead>
        <tr class="color-header text-black">
          <th></th>
          {#each atributeNames as a, index}
            <th>
              <div class="flex justify-start align-center">
                <p class="self-center text-lg font-bold me-2">
                  {a}
                </p>
                {#if selectedTypeCodi == "endereco"}
                  <input type="checkbox" class="checkbox self-center" 
                  onclick={(e) => {e.target?.checked ? addAtributte(a) : removeAtributte(a)}}/>
                {/if}
              </div>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each csvData?.data as csvItem, index}
        <tr>
          <th class="font-normal text-base">{index}</th>
          {#each atributeNames as colum}
          <th class="font-normal text-base">{csvItem[colum]}</th>
          {/each}
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
  {/if}
  
</div>

<style>
  .color-header{
    background-color: rgb(255, 165, 0);
  }
</style>