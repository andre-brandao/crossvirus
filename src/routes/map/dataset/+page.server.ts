import type { PageServerLoad } from './$types'
import { datasetC } from '$db/controller'
import { error } from '@sveltejs/kit'
export const load = (async ({ locals }) => {
  const cityId = locals.user?.cityId

  if (!cityId) {
    return error(404, 'City not found')
  }

  const cityDatasets = await datasetC.getCityDatasets(cityId)
  return {
    datasets: cityDatasets,
  }
}) satisfies PageServerLoad 
