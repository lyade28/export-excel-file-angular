import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() {}


  elements =  [
    {
      titre : 'test1',
      description : 'libassede'
    },
    {
      titre : 'test2',
      description : 'libassede1'
    },
    {
      titre : 'test3',
      description : 'libassede2'
    },
    {
      titre : 'test4',
      description : 'libassede3'
    },

  ]
}
