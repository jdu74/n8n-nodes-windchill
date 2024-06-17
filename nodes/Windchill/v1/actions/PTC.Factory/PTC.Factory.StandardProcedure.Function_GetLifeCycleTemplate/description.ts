import { INodeProperties } from "n8n-workflow";

export const PtcFactoryStandardProcedureFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
	{
		displayName: 'StandardProcedureId',
		name: 'StandardProcedureId-string(path)',
		description: 'Standard Procedure ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"GET /StandardProcedures('{StandardProcedureId}')/PTC.Factory.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
