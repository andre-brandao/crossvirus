import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { mapC, datasetC } from '$db/controller'
export const load = (async ({ locals }) => {
  const { user } = locals
  if (!user?.cityId) {
    redirect(303, '/login')
  }

  const datasets = await datasetC.getCityDatasets(user.cityId)

  return {
    datasets,
  }
}) satisfies PageServerLoad
