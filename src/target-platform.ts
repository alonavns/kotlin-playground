class TargetPlatform {
  id: string;
  printableName: string;
  static JS: any;
  static JUNIT: any;
  static CANVAS: any;
  static JAVA: any;

  constructor(id: string, printableName: string) {
    this.id = id;
    this.printableName = printableName;
  }

  static getById(id: string) {
    switch (id) {
      case 'js':
        return TargetPlatform.JS;
      case 'junit':
        return TargetPlatform.JUNIT;
      case 'canvas':
        return TargetPlatform.CANVAS;
      default:
        return TargetPlatform.JAVA;
    }
  }
}

TargetPlatform.JS = new TargetPlatform('js', 'JavaScript');
TargetPlatform.JAVA = new TargetPlatform('java', 'JVM');
TargetPlatform.JUNIT = new TargetPlatform('junit', 'JUnit');
TargetPlatform.CANVAS = new TargetPlatform('canvas', 'JavaScript(canvas)');

export default TargetPlatform
