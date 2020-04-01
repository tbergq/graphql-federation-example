// @flow

import os from 'os';
import fs from 'fs';
import path from 'path';
import { ShellCommand } from '@adeira/monorepo-utils';

import now from '../now.json';

const buildDir = path.join(os.tmpdir(), now.name);

new ShellCommand(null, 'yarn', 'babel', 'src', '--out-dir', buildDir, '--root-mode', 'upward')
  .setOutputToScreen()
  .runSynchronously();

const copyFromRoot = (filename: string) => {
  fs.copyFileSync(path.join(__dirname, '..', filename), path.join(buildDir, filename));
};
copyFromRoot('now.json');
copyFromRoot('package.json');
copyFromRoot('.env');
copyFromRoot('schema.gql');
new ShellCommand(buildDir, 'yarn', 'install').setOutputToScreen().runSynchronously();

// eslint-disable-next-line no-console
console.log('built to ', buildDir);

new ShellCommand(buildDir, 'yarn', 'now').setOutputToScreen().runSynchronously();
