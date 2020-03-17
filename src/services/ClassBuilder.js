class ClassBuilder {
  constructor(classes = []) {
    this.classes = classes;
  }

  class() {
    return this.classes.join(' ');
  }
}

export default ClassBuilder;
