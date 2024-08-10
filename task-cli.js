#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command()

program
    .name('task-cli')
    .description('Task Tracker CLI')
    .version('1.0.0')

program
    .command('add')
    .description('Add a task')
    .option('-t, --task <task>', 'Task Description')
    .action((options) => {
        const task = options.task;

        if(task){
            console.log(`Task added: ${task}`);
        }
        else{
            console.error("No task description provided.")
        }
    })

program.parse(process.argv);