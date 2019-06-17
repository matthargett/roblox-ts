import * as ts from "ts-morph";
import { ProjectType } from "./Project";

export type HasParameters =
	| ts.FunctionExpression
	| ts.ArrowFunction
	| ts.FunctionDeclaration
	| ts.ConstructorDeclaration
	| ts.MethodDeclaration;

type ProjectInfo =
	| { type: ProjectType.Package }
	| { type: ProjectType.Game | ProjectType.Bundle; runtimeLibPath: Array<string> };
