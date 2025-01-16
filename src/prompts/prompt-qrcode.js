import chalk from "chalk";
import pkg from 'prompt';

const promptQRcode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCODE: "),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QRcode: (1 - Normal) ou (2 - Terminal)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas 1 ou 2"),
    required: true,
  },
];

export default promptQRcode;
