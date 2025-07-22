import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockBackendService implements InMemoryDbService {
  createDb() {
    return {
      users: [
        { id: 1, username: 'admin', password: 'admin', role: 'admin', token: 'faketoken-123' },
        { id: 2, username: 'dev', password: 'dev', role: 'developer', token: 'faketoken-456' },
      ],
      tasks: [
        { id: 1, projectId: 1,userId:2 ,title: 'Setup the project', description: 'Setup the project', status: 'pending' },
        { id: 2, projectId: 1,userId:2 ,title: 'do login form', description: 'implement the login functionality', status: 'pending' },
      ],
      projects: [
        { id: 1, title: 'Initial Project', description: 'This is a sample project' },
      ],
    };
  }
}
