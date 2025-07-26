

// export class MockBackendService implements InMemoryDbService {
//   createDb() {
//     return {
//       users: [
//         { id: 1, username: 'admin', password: 'admin', role: 'admin', token: 'faketoken-123' },
//         { id: 2, username: 'dev', password: 'dev', role: 'developer', token: 'faketoken-456' },
//       ],
//       tasks: [
//         { id: 1, projectId: 1,assignTo:2 ,title: 'Setup the project', description: 'Setup the project', status: 'pending' },
//         { id: 2, projectId: 1,assignTo:2 ,title: 'do login form', description: 'implement the login functionality', status: 'pending' },
//         { id: 3, projectId: 1,assignTo:2 ,title: 'Setup the project', description: 'Setup the project', status: 'pending' }
//       ],
//       projects: [
//         { id: 1, title: 'Initial Project', description: 'This is a sample project' },
//       ],
//       status: [
//         { id: 1, title: 'Not Started', color: '#FF0000' },
//         { id: 2, title: 'In Progress', color: '#FFFF00' },
//         { id: 3, title: 'Pending', color: '#00FF00' },
//         { id: 4, title: 'Completed', color: '#0000FF' }
//       ]
//     };
//   }

//   // // Generate IDs for new entities
//   // genId(collection: any[], collectionName: string): number {
//   //   return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
//   // }

//   // // Handle POST requests for tasks
//   // post(reqInfo: RequestInfo) {
//   //   const { collection, collectionName, headers, id, req, url } = reqInfo;
    
//   //   if (collectionName === 'tasks') {
//   //     const newTask = req.body;
//   //     newTask.id = this.genId(collection, collectionName);
//   //     collection.push(newTask);
      
//   //     return reqInfo.utils.createResponse$(() => ({
//   //       body: newTask,
//   //       status: 201
//   //     }));
//   //   }

//   //   if (collectionName === 'status') {
//   //     const newStatus = req.body;
//   //     newStatus.id = this.genId(collection, collectionName);
//   //     collection.push(newStatus);
      
//   //     return reqInfo.utils.createResponse$(() => ({
//   //       body: newStatus,
//   //       status: 201
//   //     }));
//   //   }

//   //   // Let the default POST handle other collections
//   //   return undefined;
//   // }

//   // // Handle PUT requests for tasks
//   // put(reqInfo: RequestInfo) {
//   //   const { collection, collectionName, id, req } = reqInfo;
    
//   //   if (collectionName === 'tasks') {
//   //     const updatedTask = req.body;
//   //     const index = collection.findIndex((task: any) => task.id == id);
      
//   //     if (index >= 0) {
//   //       collection[index] = { ...collection[index], ...updatedTask };
//   //       return reqInfo.utils.createResponse$(() => ({
//   //         body: collection[index],
//   //         status: 200
//   //       }));
//   //     }
//   //   }

//   //   // Let the default PUT handle other collections
//   //   return undefined;
//   // }
// }
