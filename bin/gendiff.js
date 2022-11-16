#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/genDiff.js'

const program = new Command();

program
    .arguments("<filepath1>")
    .argument("<filepath2>")
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2, {format}) => {
        console.log(genDiff(filepath1, filepath2, format));
    })

program.parse(process.argv);