#! /usr/bin/env node
const { program } = require("commander");
const ora = require("ora");
const chalk = require("chalk");
const logSymbols = require("log-symbols");

program.version("0.1.0");

program
  .command("create <project>")
  .description('initial project template')
  .action(function(project) {
    //tips
    const tips = ora("downloading...").start();


    const downloadUrl = "direct:(https://github.com/asukanuo/asuka.git)";

    downloadUrl(downloadUrl, project, { clone: true }, (err) => {
        if (err) {
           tips.fail();
           return console.log(
            logSymbols.error,
            chalk.red("download failed, Error is:" + err)
           );
        } else {
            tips.succeed();
            return console.log(
                logSymbols.success,
                chalk.green("download success!")
              );
        }
    });



    console.log("create a new project: " + project);
  });

program
  .command("--help")
  .description("You can find some useful information here.")
  .action(function() {
    console.log("there are some information about project");
  });
  
program.parse(process.argv);