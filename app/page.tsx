/* app/page.tsx */
'use client'

import { useEffect, useState } from 'react'
import { client, exploreProfiles } from '../api'
// import Link from 'next/link'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppAppBar from './views/AppAppBar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from './theme/theme';

export default function Home() {
  /* create initial state to hold array of profiles */
  const [profiles, setProfiles] = useState<any>([])
  useEffect(() => {
    fetchProfiles()
  }, [])
  async function fetchProfiles() {
    try {
      /* fetch profiles from Lens API */
      let response = await client.query({ query: exploreProfiles })
      /* return profiles with profile pics  */
      let profileData = await Promise.all(response.data.exploreProfiles.items.filter(async profileInfo => {
        return profileInfo.picture.__typename === 'MediaSet'
      }))

      /* update the local state with the profiles array */
      setProfiles(profileData)
    } catch (err) {
      console.log({ err })
    }
  }
  return (
    <div>
        <ThemeProvider theme={theme}>
          <AppAppBar />
      </ThemeProvider>
    </div>
  )
}