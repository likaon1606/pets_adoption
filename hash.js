import bcrypt from 'bcrypt';
const hash = await bcrypt.hash("Admin1234", 10);
console.log(hash);
