"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
const program = new commander_1.Command();
console.log(figlet_1.default.textSync('Coffee Machine', { horizontalLayout: 'full' }));
program
    .version('0.0.1')
    .description('Coffee Machine CLI')
    .option('-b, --brew', 'Brew a coffee')
    .option('-c, --clean', 'Clean the machine')
    .option('-f, --fill', 'Fill the machine')
    .option('-s, --status', 'Check the status of the machine')
    .parse(process.argv);
const options = program.opts();
//# sourceMappingURL=coffeemachine.js.map