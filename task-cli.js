#!/usr/bin/env node
import { Command } from 'commander';
import {addTasks} from "./commands/addTask.js";
import {updateTask} from "./commands/updateTask.js";
const program = new Command()

program
    .name('task-cli')
    .description('Task Tracker CLI')
    .version('1.0.0')

program
    .command('add')
    .description('Add a task')
    .option('-t, --task <task>', 'Task Description')
    .action(addTasks)

program
    .command('update <id> <description>')
    .description('Update a task')
    .action(updateTask)


program.parse(process.argv);