import Data from './chartsData';

export default interface Charts {
     name: string,
     period: string,
     description: string,
     values: Array<Data | number>
     unit: string

}