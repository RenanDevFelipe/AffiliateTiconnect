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

  // Verifica se o email e a senha foram fornecidos
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  try {
    // Procura o usuário no banco de dados pelo email
    const user = await prisma.user.findUnique({
      where: { email },
    });
    console.log('Usuário encontrado:', user);

    // Verifica se o usuário existe
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Compara a senha fornecida com a senha armazenada no banco de dados
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('Resultado da comparação de senha:', passwordMatch);

    // Se a senha não corresponder, retorna erro de credenciais
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Se tudo estiver correto, retorna sucesso
    return res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (error) {
    // Loga qualquer erro que ocorrer durante o processo
    console.error('Erro no servidor:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Configura o servidor para escutar na porta 4000
app.listen(4000, () => {
  console.log('API rodando na porta 4000');
});
