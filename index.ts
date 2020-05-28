#!/usr/bin/env node
import program from 'commander';

import packageJson from './package.json';

program.name(packageJson.name).version(packageJson.version);

program.parse(process.argv);
