import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { datasetC } from '$lib/server/db/controller';

export const load = (async ({locals}) => {
  const cityId = locals.user?.cityId

  if (!cityId) {
    return error(404, 'City not found')
  }

  const cityDatasets = await datasetC.getCityDatasets(cityId)
  
  console.log(cityDatasets);
  return {
    datasets: cityDatasets[0],
  }

}) satisfies PageServerLoad;