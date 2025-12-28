import React from 'react'
import AppLayout from '@components/Layout/AppLayout'    
import BazaarPodcasts from '@components/Bazar-Podcasts/BazaarPodcasts'

const page = () => {
  return (
    <AppLayout>
      <BazaarPodcasts />
    </AppLayout>
  )
}

export default page