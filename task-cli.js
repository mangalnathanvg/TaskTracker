#!/usr/bin/env node
import { Command } from 'commander';
import {addTasks} from "./commands/addTask.js";
import {updateTask} from "./commands/updateTask.js";
import {deleteTask} from "./commands/deleteTask.js";
import {markDone, markInProgress, markTodo} from "./commands/statusUpdates.js";
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

program
    .command('mark-in-progress <id>')
    .description(`Mark a task's status as In-progress`)
    .action(markInProgress)

program
    .command('mark-done <id>')
    .description(`Mark a task's status as Done`)
    .action(markDone)

program
    .command('mark-todo <id>')
    .description(`Mark a task's status as Todo`)
    .action(markTodo)

program.parse(process.argv);