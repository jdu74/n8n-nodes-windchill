import { INodeProperties } from "n8n-workflow";

export const PtcFactoryStandardProcedureFunctionIsCheckoutAllowedDescription: INodeProperties[] = [
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
					"GET /StandardProcedures('{StandardProcedureId}')/PTC.Factory.IsCheckoutAllowed()",
				],
			},
		},
		required: true,
	},
];
