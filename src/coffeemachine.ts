#! /usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';
import readline from 'readline';

const program = new Command();

console.log(figlet.textSync('Coffee Machine', { horizontalLayout: 'full' }));

const makeCoffee = (option: string, name: string) => {
    console.log('Make coffee with option: ', option);
    console.log('Make coffee with name: ', name);
    if(option === 'p') {
        console.log('Make latte');
    }
}

program
    .version('0.0.1')
    .description('Coffee Machine CLI')
    .command('make <type> <name>')
    .usage('make --type <type> --name <name>')
    .alias('m')
    .option('-p, --project', 'Test all functions in the project.','.')
    .option('-d, --directory [directory name]', 'Test functions in the directory.')
    .option('-f, --file [file name]', 'Test functions of the file.')
    .parse(process.argv);

const options = program.opts();
