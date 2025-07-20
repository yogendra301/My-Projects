import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockBackendService implements InMemoryDbService {
  createDb() {
    return {
      users: [
        { id: 1, username: 'admin', password: 'admin', role: 'admin', token: 'faketoken-123' },
        { id: 2, username: 'dev', password: 'dev', role: 'developer', token: 'faketoken-456' },
      ],
      tasks: [
        { id: 1, title: 'Initial Task', description: 'This is a sample task', status: 'pending' },
      ],
      team: [
        { id: 1, name: 'Alice', role: 'Frontend Dev' },
        { id: 2, name: 'Bob', role: 'Backend Dev' }
      ]
    };
  }
}
