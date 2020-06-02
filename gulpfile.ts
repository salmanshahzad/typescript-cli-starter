import del from 'del';
import gulp from 'gulp';
import ts from 'gulp-typescript';

function deleteBuildFolder() {
  return del('build');
}

function transpileTypescript() {
  const tsProject = ts.createProject('tsconfig.json');
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('build'));
}

function deleteBuildGulpfile() {
  return del('build/gulpfile.js');
}

function copyStaticFiles() {
  return gulp.src('static/**/*').pipe(gulp.dest('build/static'));
}

function copyPackageJson() {
  return gulp.src('package.json').pipe(gulp.dest('build'));
}

export default gulp.series(
  deleteBuildFolder,
  transpileTypescript,
  deleteBuildGulpfile,
  copyStaticFiles,
  copyPackageJson,
);
