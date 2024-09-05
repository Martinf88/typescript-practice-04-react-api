export interface ApiData {
  data: Character[];
  info: object;
}

export interface Character {
  films: string[];
  name: string;
  imageUrl: string;
  _id: number;
}

async function getPirates(): Promise<Character[]> {
  const response: Response = await fetch(
    "https://api.disneyapi.dev/character?films=Pirates of the Caribbean&pageSize=100"
  );
  const apiData: ApiData = await response.json();
  //   const data: ApiData[] = jsonResponse.data;
  //Obs! Vi är inte garanterade att få 'ApiData'
  //på onsdag kommer vi att se hur vi kan validera datan
  return apiData.data;
}

export { getPirates };
