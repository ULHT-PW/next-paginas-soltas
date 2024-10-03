"use client";

import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

export default function Municipios() {

  // Fetch data using SWR
  const fetcher = (url) => axios.get(url).then(res => res.data.data)
  const { data: municipalities , error } = useSWR(`/api/municipalities`, fetcher);
  
  // Handle loading and error states
  if (error) return <div>Error loading data</div>;
  if (!municipalities) return <div>Loading...</div>;

  municipalities.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h2>Municípios da Área Metropolitana de Lisboa (AML)</h2>
      <ul>
        {municipalities.map(municipality => (
          <li key={municipality.id}>{municipality.name}</li>
        ))}
      </ul>
      <p>Extraído do endpoint municipios da <a href="https://api.carrismetropolitana.pt" target="_blank">API da CarrisMetropolitana</a></p>
    </div>
  );
}
