import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: true,
  },
  {
    name: 'Pralhad Gurung',
    email: 'pralhad@email.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: false,
  },
  {
    name: 'Ujjwol Magar',
    email: 'ujjwol@email.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: false,
  },
  {
    name: 'Ragendra Maharjan',
    email: 'ragendra@email.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: false,
  },
];

export default users;