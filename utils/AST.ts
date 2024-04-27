import ASTGen from "@/ASTgen"

// These class will be used for Visitor Pattern
class Exp {
    public accept(visitAST: ASTGen) {
        throw("You need to implement this")
    }
}

class IfStmt {
    condition: any 
    actions: any[]
    constructor(condition: any, actions: any[]) {
        this.condition = condition 
        this.actions = actions
    }

    public accept(visitAST: ASTGen) {
        visitAST.visit(this)
    }
}

class BinaryOp extends Exp {
    op: string 
    lhs: any 
    rhs: any
    constructor(op: string, lhs: any, rhs: any) {
        super()
        this.op = op 
        this.lhs = lhs
        this.rhs = rhs
    }

    public accept(visitAST: ASTGen) {
        visitAST.visit(this)
    }
}

class NotOp extends Exp {
    operand: BinaryOp
    constructor(operand: BinaryOp) {
        super()
        this.operand = operand
    }

    public accept(visitAST: ASTGen) {
        visitAST.visit(this)
    }
}

class Sensor extends Exp {
    sensorName: string
    sensorType: string 
    sensorLoc: string 
    constructor(name: string, type: string, location: string) {
        super()
        this.sensorName = name;
        this.sensorType = type;
        this.sensorLoc = location;
    }

    public accept(visitAST: ASTGen) {
        visitAST.visit(this)
    }
}

class SensorThreshold extends Exp {
    threshold: number
    constructor(value: number) {
        super()
        this.threshold = value
    }

    public accept(visitAST: ASTGen) {
        visitAST.visit(this)
    }
}

export {BinaryOp, NotOp, Sensor, SensorThreshold, IfStmt}