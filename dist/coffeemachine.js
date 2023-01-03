#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
const program = new commander_1.Command();
console.log(figlet_1.default.textSync('Coffee Machine', { horizontalLayout: 'full' }));
const makeCoffee = (option, name) => {
    console.log('Make coffee with option: ', option);
    console.log('Make coffee with name: ', name);
    if (option === 'p') {
        console.log('Make latte');
    }
};
program
    .version('0.0.1')
    .description('Coffee Machine CLI')
    .option('-p, --project', 'Test all functions in the project.')
    .option('-d, --directory [directory name]', 'Test functions in the directory.')
    .option('-f, --file [file name]', 'Test functions of the file.')
    .parse(process.argv);
const options = program.opts();
//# sourceMappingURL=coffeemachine.js.map