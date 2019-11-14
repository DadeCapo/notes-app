const chalk = require ('chalk')
const yargs = require ('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.')

// add, remove, read, list

// Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function (){
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    handler: function(){
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function(){
        console.log('listing all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading the note')
    }
})

console.log(yargs.argv)