export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
}

export interface Project {
  id: string;
  name: string;
  members?: [User['id']];
  description: string;
  icon: string;
}

export interface Epic {
  id: number;
  project: Project['id'];
  name: string;
  description: string;
  icon: string;
}

export interface Story {
  id: number;
  name: string;
  description: string;
  epic: Epic['id'];
  owner: User['id'];
  assignedTo: [User['id']];
  points: number;
  created: Date;
  due: Date;
  started: Date;
  finished: Date;
  status: 'todo' | 'in-progress' | 'done';
  icon: string;
}

export interface Task {
  id: number;
  name: string;
  description: string;
  story: Story['id'];
  created: Date;
  due: Date;
  done: boolean;
}
