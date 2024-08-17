#!/usr/bin/env node
import { Command } from 'commander';
import {addTasks} from "./commands/addTask.js";
import {updateTask} from "./commands/updateTask.js";
import {deleteTask} from "./commands/deleteTask.js";
const program = new Command()

program
    .name('task-cli')
    .description('Task Tracker CLI')
    .version('1.0.0')

program
    .command('add <description>')
    .description('Add a task')
    .action(addTasks)

program
    .command('update <id> <description>')
    .description('Update a task')
    .action(updateTask)

program
    .command('delete <id>')
    .description('Delete a task')
    .action(deleteTask)

program.parse(process.argv);