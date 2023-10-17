import React, { useState, useEffect } from 'react';

export const UseAPI = () => {

    const searchData = async () : Promise<any> => {
        const result = await fetch("http://footclick.com/api/api.php?f=equipes");    
        return result.json()

        }
        
    return searchData;
  }