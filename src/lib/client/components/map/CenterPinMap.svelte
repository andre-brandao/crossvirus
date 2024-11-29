<script lang="ts">
  import { goto } from "$app/navigation"
  import L, { Marker } from "leaflet";
  
  interface MapProps{
    centerX : number,
    centerY: number,
    zoom : number,
    editionMode : boolean
  }
  
  let {centerX = $bindable(), centerY = $bindable() , zoom = $bindable(), editionMode = $bindable() } : MapProps = $props()

  let map: L.Map | null;

  let centerMarker : Marker;

  function goToMe(){
    try{
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          map?.setView(new L.LatLng(latitude, longitude), 15, {animate:false})
          atualizaCentro();
        },
        (error) => {
          console.error("Erro ao obter localização:", error.message);
        }
        );
      } else {
        console.log("Geolocation não é suportado por este navegador.");
      }

    }
    catch(e){
      console.error(e);
    }    
  }
  
  function createMap(container: string | HTMLElement) {
    let m = L.map(container, { preferCanvas: true }).setView(
    [centerX, centerY], zoom
    )
    L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    // {
    //   // attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
    //   //   &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
    //   // subdomains: 'abcd',
    //   maxZoom: 14,
    // },
    // 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    },
    ).addTo(m)
    //Colocar um ponto no centro para gravar onde o usuário está
    m.addEventListener("click", (v) => console.log(v));
    return m
  }
  
  function mapAction(container: HTMLDivElement) {
    map = createMap(container)
    map.on('zoom', atualizaCentro);
    map.on('move', atualizaCentro);
    map.on('zoomend', atualizaCentro);
    map.on('moveend', atualizaCentro);
    map.on('click', atualizaCentro);
    map.on('dblclick', atualizaCentro);
    map.on('mousedown', atualizaCentro);
    map.on('mouseup', atualizaCentro);
    let myIcon = L.icon({
      iconUrl: '/images/location.svg',
      iconSize: [38, 120],
      popupAnchor: [-3, -76],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });
    centerMarker = L.marker(map.getCenter(), { draggable: false, icon: myIcon }).addTo(map);
    return {
      destroy: () => {
        // @ts-ignore
        map.remove()
        map = null
      },
    }
  }
  
  function atualizaCentro(){
    editionMode = true;
    if(map){
      map.on('zoom', atualizaCentro)
      centerMarker.setLatLng(map.getCenter());
      centerX = map.getCenter().lat;
      centerY = map.getCenter().lng;
      zoom = map.getZoom();
    }
  }
</script>

<svelte:head>
  <link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""
  />
</svelte:head>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="map z-10" onclick="{atualizaCentro}" style="height:100%;width:100%" use:mapAction>
  
</div>
<button type="button" class="btn btn-success h-full" onclick="{goToMe}">Go to me</button>


<style>
  .map :global(.marker-text) {
    width: 100%;
    text-align: center;
    font-weight: 600;
    background-color: #444;
    color: #eee;
    border-radius: 0.5rem;
  }
  
  .map :global(.map-marker) {
    width: 100%;
    transform: translateX(-50%) translateY(-25%);
  }
</style>