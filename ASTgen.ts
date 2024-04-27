import { IfStmt, BinaryOp, NotOp, Sensor, SensorThreshold } from "./utils/AST";

class ASTGen {
    constructor() {}

    public visit(ast: any) {
        if (ast instanceof IfStmt) {
            this.visitIfStmt(ast)
        }
        else if (ast instanceof BinaryOp) {
            this.visitBinaryOp(ast)
        }
        else if (ast instanceof NotOp)
            this.visitNotOp(ast)
        else if (ast instanceof Sensor)
            this.visitSensor()
        else if (ast instanceof SensorThreshold)
            this.visitSensorThreshold()
    }

    public visitIfStmt(ast: IfStmt) {

    }

    public visitBinaryOp(ast: BinaryOp) {

    }

    public visitNotOp(ast: NotOp) {

    }

    public visitSensor(ast: Sensor) {

    }

    public visitSensorThreshold(ast: SensorThreshold) {

    }
}

export default ASTGen;