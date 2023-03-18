import { createClient } from 'react-native-soap';

const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

const getListOfContinentsByName = () => {
  const args = { sCountryISOCode: '' };
  return createClient(url)
    .then(client => client.ListOfContinentsByName(args))
    .then(response => response.ListOfContinentsByNameResult.tContinent.map(Continent => ({
      code: Continent.sCode,
      name: Continent.sName,
    })))
    .catch(error => {
      console.error(error);
      return [];
    });
};

export default getListOfContinentsByName;
