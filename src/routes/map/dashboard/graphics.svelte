<script lang="ts">
  import { VisXYContainer, VisLine, VisAxis, VisStackedBar } from '@unovis/svelte'
  import { onMount } from 'svelte'

  type DataRecord = { x: number, y: number }

  interface MapData{
    dataRecord : DataRecord[],
    isLoading : boolean
  }

  let {dataRecord =
    [
    { x: 0, y: 2 },
    { x: 1, y: 250 },
    { x: 2, y: 1000 },
    ], 
    isLoading = $bindable()} : MapData = $props(); 

  const legends = [
    "Malaria",
    "Dengue",
    "Vaca louca"
  ]

  const x = (d: DataRecord) => d.x
  const y = (d: DataRecord) => d.y
  const yAxis = (d: DataRecord) => d.y * 1.2

  const categories = ["Malaria", "Dengue", "Vaca louca"]
  const tickFormat = (tick: number) => categories[tick]

  const graphicPadding = {left : 80, right: 80}
</script>

<VisXYContainer data={dataRecord} padding={graphicPadding}>
  <VisStackedBar barWidth={80} x={x} y={y} color={"#FFA500"}/>
  <VisAxis gridLine={false} minMaxTicksOnly={true} numberTick={3} type="x" label="Doenças" {tickFormat}/>
  <VisAxis type="y" y={yAxis}/>
</VisXYContainer>