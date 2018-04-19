import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    priority: 1,
    task: 'CS1331 Due',
    note: 'Finish pb 2.3',
    deadline: '4.27',
    place: 'Home',
   
  }, {
    priority: 2,
    task: 'CSE6140 Revision',
    note: 'Go over MST',
    deadline: '4.25',
    place: 'Library',
    
  }, {
    priority: 3,
    task: 'Clean the room',
    note: 'N/A',
    deadline: 'today',
    place: 'Home',
   
  }, {
    priority: 3,
    task: 'Fitness',
    note: 'Basketball and swimming',
    deadline: 'tomorrow 6pm',
    place: 'CRC',
    
  }, {
    priority: 5,
    task: 'Find a book "Live at the moment"',
    note: 'the book prof asked',
    deadline: 'today',
    place: 'COC',
    
  }, {
    priority: 4,
    task: 'Search for Multivariate Gaussian Dist',
    note: 'Something hard',
    deadline: 'today',
    place: 'Home',
    
  }, {
    priority: 2,
    task: 'Find a document',
    note: 'my rent lease',
    deadline: 'today',
    place: 'Home',
   
  }, {
    priority: 1,
    task: 'Call Mike',
    note: 'N/A',
    deadline: '8pm',
    place: '',
    
  }, {
    priority: 3,
    task: 'Meet Mike',
    note: 'have dinner',
    deadline: '6pm',
    place: 'Dining hall',
    
  }];

  getData() {
    return this.data;
  }
}
