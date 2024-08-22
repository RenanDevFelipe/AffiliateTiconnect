import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Endpoint de login
app.post('/login', async (req, res) => {
  const { email, password }: { email: string; password: string } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    return res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (error) {
    console.error('Erro no servidor:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Endpoint de registro
app.post('/register', async (req, res) => {
  const { name, email, password, id_ixc }: { name: string; email: string; password: string; id_ixc: any } = req.body;

const idIXCNumber = parseInt(id_ixc, 10);
if (isNaN(idIXCNumber)) {
  console.log('Erro: ID IXC não é um número válido');
  return res.status(400).json({ message: 'ID IXC deve ser um número válido' });
}

  console.log('Recebido no servidor:', { name, email, password, id_ixc });

  if (!name || !email || !password || !id_ixc) {
    console.log('Erro: Campos obrigatórios faltando');
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    console.log('Usuário existente:', existingUser);

    if (existingUser) {
      console.log('Erro: Email já está em uso');
      return res.status(400).json({ message: 'Email já está em uso' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Senha criptografada:', hashedPassword);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        id_ixc,
      },
    });
    console.log('Novo usuário criado:', newUser);

    return res.status(201).json({ message: 'Registro bem-sucedido' });
  } catch (error) {
    console.error('Erro no servidor durante o registro:', error);
    return res.status(500).json({ message: 'Erro interno do servidor', error });
  }
});


// Configura o servidor para escutar na porta 4000
app.listen(4000, () => {
  console.log('API rodando na porta 4000');
});