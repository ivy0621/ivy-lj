/* eslint-disable no-console */
/**
 * @author ivy
 * @date 2019/5/20
 * @Description: 发布前所有打包一遍
 */
const chalk = require('chalk');
const spawn = require('cross-spawn');
const { existsSync, emptyDir } = require('fs-extra');
const { join } = require('path');

const root = process.cwd();

const packagesPath = join(root, 'packages');
const fullModPath = (mod) => join(packagesPath, mod);

class Mod {
  constructor(mod) {
    this.root = fullModPath(mod);
    this.package = this.fullFilePath('package.json');
  }

  fullFilePath(file) {
    return join(this.root, file);
  }
}

// const isAsync = true;

build().then(() => {
  console.log();
  console.log(chalk.green('全部打包成功~'));
});

async function build() {
  if (!existsSync(packagesPath)) return;
  await runEslint();
  const packages = ['config', 'business'];
  console.log(`start build at ${chalk.cyan(new Date())}`);
  for (let i = 0; i < packages.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    await sleep(0.1);
    // eslint-disable-next-line no-await-in-loop
    await runBuildModule(packages[i], i);
  }
}

async function runBuildModule(modPath, index) {
  const start = Date.now();
  const mod = new Mod(modPath);
  const packageJSON = require(mod.package);
  console.log();
  console.log(
    `${chalk.red('🚀').repeat(index + 1)} start build ${chalk.blue(packageJSON.name)} 🙏🙏🙏`
  );
  await runBuild(mod.root, packageJSON.name);
  console.log();
  console.log(chalk.green(`build ${packageJSON.name} success, total ${Math.ceil((Date.now() - start) / 1000)}s`));
}

async function runBuild(rootPath, name) {
  console.log(rootPath);
  await emptyDist(rootPath);
  return new Promise((resolve, reject) => {
    const child = spawn(
      'yarn',
      ['run', 'build'],
      {
        stdio: 'inherit',
        env: {
          ...process.env,
        },
        cwd: rootPath,
      }
    );
    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`
          [build ${name} error]:
          code: ${code}
        `));
        return;
      }
      resolve();
    });
  });
}

function runEslint() {
  return new Promise((resolve, reject) => {
    const child = spawn(
      'yarn',
      ['run', 'fix'],
      {
        stdio: 'inherit',
        env: {
          ...process.env,
        },
        cwd: root,
      }
    );
    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`
          [lint error]:
          code: ${code}
        `));
        return;
      }
      resolve();
    });
  });
}

function emptyDist(rootPath) {
  const dist = join(rootPath, 'dist');
  return emptyDir(dist);
}

function sleep(sec) {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
}
