'use client';
import React from 'react'
import { SWRConfig } from 'swr';
import { MantineProvider } from '@mantine/core';

export default function Providers({ children }) {
  //

  // Use SWR
  const swrOptions = {
    //
    refreshInterval: 300000, // 5 minutes
    //
    fetcher: async (...args) => {
      const res = await fetch(...args);
      if (!res.ok) {
        const errorDetails = await res.json();
        const error = new Error(errorDetails.message || 'An error occurred while fetching data.');
        error.description = errorDetails.description || 'No additional information was provided by the API.';
        error.status = res.status;
        throw error;
      }
      return res.json();
    },
    //
  };

  return (
    <SWRConfig value={swrOptions}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
          {children}
      </MantineProvider>
    </SWRConfig>
  );
}

