import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post('/login', async (req, res) => {
  const { email, password }: { email: string; password: string } = req.body;
  console.log('Email recebido:', email);
  console.log('Senha recebida:', password);

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    console.log('Usuário encontrado:', user);

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('Senha correspondente:', passwordMatch);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    return res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (error) {
    console.error('Erro no servidor:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});
